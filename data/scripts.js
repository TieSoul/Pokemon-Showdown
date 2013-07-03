exports.BattleScripts = {
	gen: 5,
	runMove: function(move, pokemon, target, sourceEffect) {
		if (!sourceEffect && toId(move) !== 'struggle') {
			var changedMove = this.runEvent('OverrideDecision', pokemon);
			if (changedMove && changedMove !== true) {
				move = changedMove;
				target = null;
			}
		}
		move = this.getMove(move);
		if (!target) target = this.resolveTarget(pokemon, move);

		this.setActiveMove(move, pokemon, target);

		if (pokemon.moveThisTurn) {
			// THIS IS PURELY A SANITY CHECK
			// DO NOT TAKE ADVANTAGE OF THIS TO PREVENT A POKEMON FROM MOVING;
			// USE this.cancelMove INSTEAD
			this.debug(''+pokemon.id+' INCONSISTENT STATE, ALREADY MOVED: '+pokemon.moveThisTurn);
			this.clearActiveMove(true);
			return;
		}
		if (!this.runEvent('BeforeMove', pokemon, target, move)) {
			this.clearActiveMove(true);
			return;
		}
		if (move.beforeMoveCallback) {
			if (move.beforeMoveCallback.call(this, pokemon, target, move)) {
				this.clearActiveMove(true);
				return;
			}
		}
		pokemon.lastDamage = 0;
		var lockedMove = this.runEvent('LockMove', pokemon);
		if (lockedMove === true) lockedMove = false;
		if (!lockedMove) {
			pokemon.deductPP(move, null, target);
		}
		pokemon.moveUsed(move);
		this.useMove(move, pokemon, target, sourceEffect);
		this.singleEvent('AfterMove', move, null, pokemon, target, move);
		this.runEvent('AfterMove', target, pokemon, move);
		this.runEvent('AfterMoveSelf', pokemon, target, move);
	},
	useMove: function(move, pokemon, target, sourceEffect) {
		if (!sourceEffect && this.effect.id) sourceEffect = this.effect;
		move = this.getMove(move);
		baseMove = move;
		move = this.getMoveCopy(move);
		if (!target) target = this.resolveTarget(pokemon, move);
		if (move.target === 'self' || move.target === 'allies') {
			target = pokemon;
		}
		if (sourceEffect) move.sourceEffect = sourceEffect.id;

		this.setActiveMove(move, pokemon, target);

		this.singleEvent('ModifyMove', move, null, pokemon, target, move, move);
		if (baseMove.target !== move.target) {
			//Target changed in ModifyMove, so we must adjust it here
			target = this.resolveTarget(pokemon, move);
		}
		move = this.runEvent('ModifyMove',pokemon,target,move,move);
		if (baseMove.target !== move.target) {
			//check again
			target = this.resolveTarget(pokemon, move);
		}
		if (!move) return false;

		var attrs = '';
		var missed = false;
		if (pokemon.fainted) {
			return false;
		}

		if (move.isTwoTurnMove && !pokemon.volatiles[move.id]) {
			attrs = '|[still]'; // suppress the default move animation
		}

		var movename = move.name;
		if (move.id === 'hiddenpower') movename = 'Hidden Power';
		if (sourceEffect) attrs += '|[from]'+this.getEffect(sourceEffect);
		this.addMove('move', pokemon, movename, target+attrs);

		if (!this.singleEvent('Try', move, null, pokemon, target, move)) {
			return true;
		}
		if (!this.runEvent('TryMove', pokemon, target, move)) {
			return true;
		}

		if (typeof move.affectedByImmunities === 'undefined') {
			move.affectedByImmunities = (move.category !== 'Status');
		}

		var damage = false;
		if (move.target === 'all' || move.target === 'foeSide' || move.target === 'allySide' || move.target === 'allyTeam') {
			if (move.target === 'all') {
				damage = this.runEvent('TryHitField', target, pokemon, move);
			} else {
				damage = this.runEvent('TryHitSide', target, pokemon, move);
			}
			if (!damage) {
				if (damage === false) this.add('-fail', target);
				return true;
			}
			damage = this.moveHit(target, pokemon, move);
		} else if (move.target === 'allAdjacent' || move.target === 'allAdjacentFoes') {
			var targets = [];
			if (move.target === 'allAdjacent') {
				var allyActive = pokemon.side.active;
				for (var i=0; i<allyActive.length; i++) {
					if (allyActive[i] && Math.abs(i-pokemon.position)<=1 && i != pokemon.position && !allyActive[i].fainted) {
						targets.push(allyActive[i]);
					}
				}
			}
			var foeActive = pokemon.side.foe.active;
			var foePosition = foeActive.length-pokemon.position-1;
			for (var i=0; i<foeActive.length; i++) {
				if (foeActive[i] && Math.abs(i-foePosition)<=1 && !foeActive[i].fainted) {
					targets.push(foeActive[i]);
				}
			}
			if (!targets.length) {
				this.attrLastMove('[notarget]');
				this.add('-notarget');
				if (move.selfdestruct && this.gen == 5) {
					this.faint(pokemon, pokemon, move);
				}
				return true;
			}
			if (targets.length > 1) move.spreadHit = true;
			damage = 0;
			for (var i=0; i<targets.length; i++) {
				damage += (this.tryMoveHit(targets[i], pokemon, move, true) || 0);
			}
			if (!pokemon.hp) pokemon.faint();
		} else {
			if (target.fainted && target.side !== pokemon.side) {
				// if a targeted foe faints, the move is retargeted
				target = this.resolveTarget(pokemon, move);
			}
			if (target.fainted) {
				this.attrLastMove('[notarget]');
				this.add('-notarget');
				return true;
			}
			if (target.side.active.length > 1) {
				target = this.runEvent('RedirectTarget', pokemon, pokemon, move, target);
			}
			damage = this.tryMoveHit(target, pokemon, move);
		}
		if (!pokemon.hp) {
			this.faint(pokemon, pokemon, move);
		}

		if (!damage && damage !== 0 && damage !== undefined) {
			this.singleEvent('MoveFail', move, null, target, pokemon, move);
			return true;
		}

		if (move.selfdestruct) {
			this.faint(pokemon, pokemon, move);
		}

		if (!move.negateSecondary) {
			this.singleEvent('AfterMoveSecondarySelf', move, null, pokemon, target, move);
			this.runEvent('AfterMoveSecondarySelf', pokemon, target, move);
		}
		return true;
	},
	tryMoveHit: function(target, pokemon, move, spreadHit) {
		if (move.selfdestruct && spreadHit) {
			pokemon.hp = 0;
		}

		if ((move.affectedByImmunities && !target.runImmunity(move.type, true)) || (move.isSoundBased && (pokemon !== target || this.gen <= 4) && !target.runImmunity('sound', true))) {
			return false;
		}

		this.setActiveMove(move, pokemon, target);
		var hitResult = true;

		if (typeof move.affectedByImmunities === 'undefined') {
			move.affectedByImmunities = (move.category !== 'Status');
		}

		hitResult = this.runEvent('TryHit', target, pokemon, move);
		if (!hitResult) {
			if (hitResult === false) this.add('-fail', target);
			if (hitResult !== 0) { // special Substitute hit flag
				return false;
			}
		}

		if (hitResult === 0) {
			target = null;
		} else if (!hitResult) {
			if (hitResult === false) this.add('-fail', target);
			return false;
		}

		var boostTable = [1, 4/3, 5/3, 2, 7/3, 8/3, 3];

		// calculate true accuracy
		var accuracy = move.accuracy;
		if (accuracy !== true) {
			if (!move.ignoreAccuracy) {
				if (pokemon.boosts.accuracy > 0) {
					accuracy *= boostTable[pokemon.boosts.accuracy];
				} else {
					accuracy /= boostTable[-pokemon.boosts.accuracy];
				}
			}
			if (!move.ignoreEvasion) {
				if (target.boosts.evasion > 0 && !move.ignorePositiveEvasion) {
					accuracy /= boostTable[target.boosts.evasion];
				} else if (target.boosts.evasion < 0) {
					accuracy *= boostTable[-target.boosts.evasion];
				}
			}
		}
		if (move.ohko) { // bypasses accuracy modifiers
			if (!target.volatiles['bounce'] && !target.volatiles['dig'] && !target.volatiles['dive'] && !target.volatiles['fly'] && !target.volatiles['shadowforce'] && !target.volatiles['skydrop']) {
				accuracy = 30;
				if (pokemon.level > target.level) accuracy += (pokemon.level - target.level);
			}
		}
		if (move.alwaysHit) {
			accuracy = true; // bypasses ohko accuracy modifiers
		} else {
			accuracy = this.runEvent('Accuracy', target, pokemon, move, accuracy);
		}
		if (accuracy !== true && this.random(100) >= accuracy) {
			if (!spreadHit) this.attrLastMove('[miss]');
			this.add('-miss', pokemon, target);
			return false;
		}

		var damage = 0;
		pokemon.lastDamage = 0;
		if (move.multihit) {
			var hits = move.multihit;
			if (hits.length) {
				// yes, it's hardcoded... meh
				if (hits[0] === 2 && hits[1] === 5) {
					var roll = this.random(6);
					hits = [2,2,3,3,4,5][roll];
				} else {
					hits = this.random(hits[0],hits[1]+1);
				}
			}
			hits = Math.floor(hits);
			for (var i=0; i<hits && target.hp && pokemon.hp; i++) {
				if (!move.sourceEffect && pokemon.status === 'slp') break;

				var moveDamage = this.moveHit(target, pokemon, move);
				if (moveDamage === false) break;
				// Damage from each hit is individually counted for the
				// purposes of Counter, Metal Burst, and Mirror Coat.
				damage = (moveDamage || 0);
				this.eachEvent('Update');
			}
			if (i === 0) return true;
			this.add('-hitcount', target, i);
		} else {
			damage = this.moveHit(target, pokemon, move);
		}

		if (target && move.category !== 'Status') target.gotAttacked(move, damage, pokemon);

		if (!damage && damage !== 0) return damage;

		if (!move.negateSecondary) {
			this.singleEvent('AfterMoveSecondary', move, null, target, pokemon, move);
			this.runEvent('AfterMoveSecondary', target, pokemon, move);
		}

		return damage;
	},
	moveHit: function(target, pokemon, move, moveData, isSecondary, isSelf) {
		var damage = 0;
		move = this.getMoveCopy(move);

		if (!moveData) moveData = move;
		var hitResult = true;

		// TryHit events:
		//   STEP 1: we see if the move will succeed at all:
		//   - TryHit, TryHitSide, or TryHitField are run on the move,
		//     depending on move target (these events happen in useMove
		//     or tryMoveHit, not below)
		//   == primary hit line ==
		//   Everything after this only happens on the primary hit (not on
		//   secondary or self-hits)
		//   STEP 2: we see if anything blocks the move from hitting:
		//   - TryFieldHit is run on the target
		//   STEP 3: we see if anything blocks the move from hitting the target:
		//   - If the move's target is a pokemon, TryHit is run on that pokemon

		// Note:
		//   If the move target is `foeSide`:
		//     event target = pokemon 0 on the target side
		//   If the move target is `allySide` or `all`:
		//     event target = the move user
		//
		//   This is because events can't accept actual sides or fields as
		//   targets. Choosing these event targets ensures that the correct
		//   side or field is hit.
		//
		//   It is the `TryHitField` event handler's responsibility to never
		//   use `target`.
		//   It is the `TryFieldHit` event handler's responsibility to read
		//   move.target and react accordingly.
		//   An exception is `TryHitSide` as a single event (but not as a normal
		//   event), which is passed the target side.

		if (move.target === 'all' && !isSelf) {
			hitResult = this.singleEvent('TryHitField', moveData, {}, target, pokemon, move);
		} else if ((move.target === 'foeSide' || move.target === 'allySide') && !isSelf) {
			hitResult = this.singleEvent('TryHitSide', moveData, {}, target.side, pokemon, move);
		} else if (target) {
			hitResult = this.singleEvent('TryHit', moveData, {}, target, pokemon, move);
		}
		if (!hitResult) {
			if (hitResult === false) this.add('-fail', target);
			return false;
		}

		if (target && !isSecondary && !isSelf) {
			hitResult = this.runEvent('TryPrimaryHit', target, pokemon, moveData);
			if (hitResult === 0) {
				hitResult = true;
				target = null;
			}
		}
		if (target && isSecondary && !moveData.self) {
			hitResult = this.runEvent('TrySecondaryHit', target, pokemon, moveData);
		}
		if (!hitResult) {
			return false;
		}

		if (target) {
			var didSomething = false;

			damage = this.getDamage(pokemon, target, moveData);

			// getDamage has several possible return values:
			//
			//   a number:
			//     means that much damage is dealt (0 damage still counts as dealing
			//     damage for the purposes of things like Static)
			//   false:
			//     gives error message: "But it failed!" and move ends
			//   null:
			//     the move ends, with no message (usually, a custom fail message
			//     was already output by an event handler)
			//   undefined:
			//     means no damage is dealt and the move continues
			//
			// basically, these values have the same meanings as they do for event
			// handlers.

			if ((damage || damage === 0) && !target.fainted) {
				if (move.noFaint && damage >= target.hp) {
					damage = target.hp - 1;
				}
				damage = this.damage(damage, target, pokemon, move);
				if (!(damage || damage === 0)) {
					this.debug('damage interrupted');
					return false;
				}
				didSomething = true;
			} else if (damage === false && typeof hitResult === 'undefined') {
				this.add('-fail', target);
			}
			if (damage === false || damage === null) {
				this.debug('damage calculation interrupted');
				return false;
			}
			if (moveData.boosts && !target.fainted) {
				this.boost(moveData.boosts, target, pokemon, move);
				didSomething = true;
			}
			if (moveData.heal && !target.fainted) {
				var d = target.heal(Math.round(target.maxhp * moveData.heal[0] / moveData.heal[1]));
				if (!d) {
					this.add('-fail', target);
					this.debug('heal interrupted');
					return false;
				}
				this.add('-heal', target, target.getHealth);
				didSomething = true;
			}
			if (moveData.status) {
				if (!target.status) {
					target.setStatus(moveData.status, pokemon, move);
				} else if (!isSecondary) {
					if (target.status === moveData.status) {
						this.add('-fail', target, target.status);
					} else {
						this.add('-fail', target);
					}
				}
				didSomething = true;
			}
			if (moveData.forceStatus) {
				if (target.setStatus(moveData.forceStatus, pokemon, move)) {
					didSomething = true;
				}
			}
			if (moveData.volatileStatus) {
				if (target.addVolatile(moveData.volatileStatus, pokemon, move)) {
					didSomething = true;
				}
			}
			if (moveData.sideCondition) {
				if (target.side.addSideCondition(moveData.sideCondition, pokemon, move)) {
					didSomething = true;
				}
			}
			if (moveData.weather) {
				if (this.setWeather(moveData.weather, pokemon, move)) {
					didSomething = true;
				}
			}
			if (moveData.pseudoWeather) {
				if (this.addPseudoWeather(moveData.pseudoWeather, pokemon, move)) {
					didSomething = true;
				}
			}
			// Hit events
			//   These are like the TryHit events, except we don't need a FieldHit event.
			//   Scroll up for the TryHit event documentation, and just ignore the "Try" part. ;)
			if (move.target === 'all' && !isSelf) {
				hitResult = this.singleEvent('HitField', moveData, {}, target, pokemon, move);
			} else if ((move.target === 'foeSide' || move.target === 'allySide') && !isSelf) {
				hitResult = this.singleEvent('HitSide', moveData, {}, target.side, pokemon, move);
			} else {
				hitResult = this.singleEvent('Hit', moveData, {}, target, pokemon, move);
				if (!isSelf && !isSecondary) {
					this.runEvent('Hit', target, pokemon, move);
				}
			}

			if (!hitResult && !didSomething) {
				if (hitResult === false) this.add('-fail', target);
				this.debug('move failed because it did nothing');
				return false;
			}
		}
		if (moveData.self) {
			this.moveHit(pokemon, pokemon, move, moveData.self, isSecondary, true);
		}
		if (moveData.secondaries) {
			var secondaryRoll;
			for (var i = 0; i < moveData.secondaries.length; i++) {
				secondaryRoll = this.random(100);
				if (typeof moveData.secondaries[i].chance === 'undefined' || secondaryRoll < moveData.secondaries[i].chance) {
					this.moveHit(target, pokemon, move, moveData.secondaries[i], true, isSelf);
				}
			}
		}
		if (target && target.hp > 0 && pokemon.hp > 0) {
			if (moveData.forceSwitch && this.runEvent('DragOut', target, pokemon, move)) {
				target.forceSwitchFlag = true;
			}
		}
		if (move.selfSwitch && pokemon.hp) {
			pokemon.switchFlag = move.selfSwitch;
		}
		return damage;
	},
	isAdjacent: function(pokemon1, pokemon2) {
		if (!pokemon1.fainted && !pokemon2.fainted && pokemon2.position !== pokemon1.position && Math.abs(pokemon2.position-pokemon1.position) <= 1) {
			return true;
		}
	},
	getTeam: function(side, team) {
		var format = side.battle.getFormat();
		if (format.team === 'random') {
			return this.randomTeam(side);
		} else if (typeof format.team === 'string' && format.team.substr(0,6) === 'random') {
			return this[format.team+'Team'](side);
		} else if (team) {
			return team;
		} else {
			return this.randomTeam(side);
		}
	},
	randomCCTeam: function(side) {
		var teamdexno = [];
		var team = [];

		//pick six random pokmeon--no repeats, even among formes
		//also need to either normalize for formes or select formes at random
		//unreleased are okay. No CAP for now, but maybe at some later date
		for (var i=0; i<6; i++)
		{
			while (true) {
				var x=Math.floor(Math.random()*649)+1;
				if (teamdexno.indexOf(x) === -1) {
					teamdexno.push(x);
					break;
				}
			}
		}

		for (var i=0; i<6; i++) {

			//choose forme
			var formes = [];
			for (var j in this.data.Pokedex) {
				if (this.data.Pokedex[j].num === teamdexno[i] && this.getTemplate(this.data.Pokedex[j].species).learnset && this.data.Pokedex[j].species !== 'Pichu-Spiky-eared') {
					formes.push(this.data.Pokedex[j].species);
				}
			}
			var poke = formes.sample();
			var template = this.getTemplate(poke);

			//level balance--calculate directly from stats rather than using some silly lookup table
			var mbstmin = 1307; //sunkern has the lowest modified base stat total, and that total is 807

			var stats = template.baseStats;

			//modified base stat total assumes 31 IVs, 85 EVs in every stat
			var mbst = (stats["hp"]*2+31+21+100)+10;
			mbst += (stats["atk"]*2+31+21+100)+5;
			mbst += (stats["def"]*2+31+21+100)+5;
			mbst += (stats["spa"]*2+31+21+100)+5;
			mbst += (stats["spd"]*2+31+21+100)+5;
			mbst += (stats["spe"]*2+31+21+100)+5;
			
			var level = Math.floor(100*mbstmin/mbst); //initial level guess will underestimate

			while (level < 100) {
				mbst = Math.floor((stats["hp"]*2+31+21+100)*level/100+10);
				mbst += Math.floor(((stats["atk"]*2+31+21+100)*level/100+5)*level/100); //since damage is roughly proportional to lvl
				mbst += Math.floor((stats["def"]*2+31+21+100)*level/100+5);
				mbst += Math.floor(((stats["spa"]*2+31+21+100)*level/100+5)*level/100);
				mbst += Math.floor((stats["spd"]*2+31+21+100)*level/100+5);
				mbst += Math.floor((stats["spe"]*2+31+21+100)*level/100+5);

				if (mbst >= mbstmin)
					break;
				level++;
			}
			

			//random gender--already handled by PS?
			
			//random ability (unreleased DW are par for the course)
			var abilities = [template.abilities['0']];
			if (template.abilities['1']) {
				abilities.push(template.abilities['1']);
			}
			if (template.abilities['DW']) {
				abilities.push(template.abilities['DW']);
			}
			var ability = abilities.sample();

			//random nature
			var nature = ["Adamant", "Bashful", "Bold", "Brave", "Calm", "Careful", "Docile", "Gentle", "Hardy", "Hasty", "Impish", "Jolly", "Lax", "Lonely", "Mild", "Modest", "Naive", "Naughty", "Quiet", "Quirky", "Rash", "Relaxed", "Sassy", "Serious", "Timid"].sample();

			//random item--I guess if it's in items.js, it's okay	
			var item = Object.keys(this.data.Items).sample();

			//since we're selecting forme at random, we gotta make sure forme/item combo is correct
			if (template.requiredItem) {
				item = template.requiredItem;
			}
			while ((poke === 'Arceus' && item.indexOf("plate") > -1) || (poke === 'Giratina' && item === 'griseousorb')) {
				item = Object.keys(this.data.Items).sample();
			}
				
				

			//random IVs
			var ivs = {
				hp: Math.floor(Math.random()*32),
				atk: Math.floor(Math.random()*32),
				def: Math.floor(Math.random()*32),
				spa: Math.floor(Math.random()*32),
				spd: Math.floor(Math.random()*32),
				spe: Math.floor(Math.random()*32)
			};

			//random EVs
			var evs = {
				hp: 0,
				atk: 0,
				def: 0,
				spa: 0,
				spd: 0,
				spe: 0
			};
			var s = ["hp","atk","def","spa","spd","spe"];
			var evpool = 510;
			do
			{
				var x = s.sample();
				var y = Math.floor(Math.random()*Math.min(256-evs[x],evpool+1));
				evs[x]+=y;
				evpool-=y;
			} while (evpool > 0);

			//random happiness--useless, since return/frustration is currently a "cheat"
			var happiness = Math.floor(Math.random()*256);

			//random shininess?
			var shiny = (Math.random()*1024<=1);

			//four random unique moves from movepool. don't worry about "attacking" or "viable"
			var moves;
			var pool = ['struggle'];
			if (poke === 'Smeargle') {
				pool = Object.keys(this.data.Movedex).exclude('struggle', 'chatter');
			} else if (template.learnset) {
				pool = Object.keys(template.learnset);
			}
			if (pool.length <= 4) {
				moves = pool;
			} else {
				moves=pool.sample(4);
			}

			team.push({
				name: poke,
				moves: moves,
				ability: ability,
				evs: evs,
				ivs: ivs,
				nature: nature,
				item: item,
				level: level,
				happiness: happiness,
				shiny: shiny
			});
		}

		//console.log(team);
		return team;
	},
	randomSet: function(template, i) {
		if (i === undefined) i = 1;
		template = this.getTemplate(template);

		if (!template.exists) {
			template = this.getTemplate('unown');
			// GET IT? UNOWN? BECAUSE WE CAN'T TELL WHAT THE POKEMON IS
		}

		var moveKeys = Object.keys(template.viableMoves || template.learnset).randomize();
		var moves = [];
		var ability = '';
		var item = '';
		var evs = {
			hp: 85,
			atk: 85,
			def: 85,
			spa: 85,
			spd: 85,
			spe: 85
		};
		var ivs = {
			hp: 31,
			atk: 31,
			def: 31,
			spa: 31,
			spd: 31,
			spe: 31
		};

		var hasType = {};
		hasType[template.types[0]] = true;
		if (template.types[1]) hasType[template.types[1]] = true;

		var hasMove = {};
		var counter = {};
		var setupType = '';

		var j=0;
		do {
			while (moves.length<4 && j<moveKeys.length) {
				var moveid = toId(moveKeys[j]);
				j++;
				if (moveid.substr(0,11) === 'hiddenpower') {
					if (!hasMove['hiddenpower']) {
						hasMove['hiddenpower'] = true;
					} else {
						continue;
					}
				}
				moves.push(moveid);
			}

			hasMove = {};
			counter = {
				Physical: 0, Special: 0, Status: 0, damage: 0,
				technician: 0, skilllink: 0, contrary: 0, sheerforce: 0, ironfist: 0, adaptability: 0, hustle: 0,
				recoil: 0, inaccurate: 0,
				physicalsetup: 0, specialsetup: 0, mixedsetup: 0
			};
			for (var k=0; k<moves.length; k++) {
				var move = this.getMove(moves[k]);
				var moveid = move.id;
				hasMove[moveid] = true;
				if (move.damage || move.damageCallback) {
					counter['damage']++;
				} else {
					counter[move.category]++;
				}
				if (move.basePower && move.basePower <= 60) {
					counter['technician']++;
				}
				if (move.multihit && move.multihit[1] === 5) {
					counter['skilllink']++;
				}
				if (move.isPunchAttack) {
					counter['ironfist']++;
				}
				if (move.recoil) {
					counter['recoil']++;
				}
				if (move.basePower || move.basePowerCallback) {
					if (hasType[move.type]) counter['adaptability']++;
					if (move.category === 'Physical') counter['hustle']++;
				}
				if (move.secondary) {
					if (move.secondary.chance < 50) {
						counter['sheerforce'] -= 5;
					} else {
						counter['sheerforce']++;
					}
				}
				if (move.accuracy && move.accuracy !== true && move.accuracy < 90) {
					counter['inaccurate']++;
				}
				var ContraryMove = {
					leafstorm: 1, overheat: 1, closecombat: 1, superpower: 1, vcreate: 1
				};
				if (ContraryMove[moveid]) {
					counter['contrary']++;
				}
				var PhysicalSetup = {
					swordsdance:1, dragondance:1, coil:1, bulkup:1, curse:1, bellydrum:1, shiftgear:1, honeclaws:1, howl:1
				};
				var SpecialSetup = {
					nastyplot:1, tailglow:1, quiverdance:1, calmmind:1
				};
				var MixedSetup = {
					growth:1, workup:1, shellsmash:1
				};
				if (PhysicalSetup[moveid]) {
					counter['physicalsetup']++;
				}
				if (SpecialSetup[moveid]) {
					counter['specialsetup']++;
				}
				if (MixedSetup[moveid]) {
					counter['mixedsetup']++;
				}
			}

			if (counter['mixedsetup']) {
				setupType = 'Mixed';
			} else if (counter['specialsetup']) {
				setupType = 'Special';
			} else if (counter['physicalsetup']) {
				setupType = 'Physical';
			}

			for (var k=0; k<moves.length; k++) {
				var moveid = moves[k];
				var move = this.getMove(moveid);
				var rejected = false;
				var isSetup = false;

				switch (moveid) {
				// not very useful without their supporting moves

				case 'sleeptalk':
					if (!hasMove['rest']) rejected = true;
					break;
				case 'endure':
					if (!hasMove['flail'] && !hasMove['endeavor'] && !hasMove['reversal']) rejected = true;
					break;
				case 'focuspunch':
					if (hasMove['sleeptalk'] || !hasMove['substitute']) rejected = true;
					break;
				case 'storedpower':
					if (!hasMove['cosmicpower'] && !setupType) rejected = true;
					break;

				// we only need to set up once

				case 'swordsdance': case 'dragondance': case 'coil': case 'curse': case 'bulkup': case 'bellydrum':
					if (counter.Physical < 2 && !hasMove['batonpass']) rejected = true;
					if (setupType !== 'Physical' || counter['physicalsetup'] > 1) rejected = true;
					isSetup = true;
					break;
				case 'nastyplot': case 'tailglow': case 'quiverdance': case 'calmmind':
					if (counter.Special < 2 && !hasMove['batonpass']) rejected = true;
					if (setupType !== 'Special' || counter['specialsetup'] > 1) rejected = true;
					isSetup = true;
					break;
				case 'shellsmash': case 'growth': case 'workup':
					if (counter.Physical+counter.Special < 2 && !hasMove['batonpass']) rejected = true;
					if (setupType !== 'Mixed' || counter['mixedsetup'] > 1) rejected = true;
					isSetup = true;
					break;

				// bad after setup

				case 'seismictoss': case 'nightshade': case 'superfang':
					if (setupType) rejected = true;
					break;
				case 'knockoff': case 'perishsong': case 'magiccoat': case 'spikes':
					if (setupType) rejected = true;
					break;
				case 'uturn': case 'voltswitch':
					if (setupType || hasMove['agility'] || hasMove['rockpolish'] || hasMove['magnetrise']) rejected = true;
					break;
				case 'relicsong':
					if (setupType) rejected = true;
					break;
				case 'pursuit': case 'protect': case 'haze': case 'stealthrock':
					if (setupType || (hasMove['rest'] && hasMove['sleeptalk'])) rejected = true;
					break;
				case 'trick': case 'switcheroo':
					if (setupType || (hasMove['rest'] && hasMove['sleeptalk']) || hasMove['trickroom'] || hasMove['reflect'] || hasMove['lightscreen'] || hasMove['batonpass']) rejected = true;
					break;
				case 'dragontail':
					if (hasMove['agility'] || hasMove['rockpolish']) rejected = true;
					break;

				// bit redundant to have both

				case 'flamethrower': case 'fierydance':
					if (hasMove['lavaplume'] || hasMove['overheat'] || hasMove['fireblast'] || hasMove['blueflare']) rejected = true;
					break;
				case 'overheat':
					if (setupType === 'Special' || hasMove['fireblast']) rejected = true;
					break;
				case 'icebeam':
					if (hasMove['blizzard']) rejected = true;
					break;
				case 'surf':
					if (hasMove['scald'] || hasMove['hydropump']) rejected = true;
					break;
				case 'hydropump':
					if (hasMove['razorshell'] || hasMove['scald']) rejected = true;
					break;
				case 'waterfall':
					if (hasMove['aquatail']) rejected = true;
					break;
				case 'airslash':
					if (hasMove['hurricane']) rejected = true;
					break;
				case 'bravebird': case 'pluck':
					if (hasMove['acrobatics']) rejected = true;
					break;
				case 'solarbeam':
					if ((!hasMove['sunnyday'] && template.species !== 'Ninetales') || hasMove['gigadrain'] || hasMove['leafstorm']) rejected = true;
					break;
				case 'gigadrain':
					if ((!setupType && hasMove['leafstorm']) || hasMove['petaldance']) rejected = true;
					break;
				case 'leafstorm':
					if (setupType && hasMove['gigadrain']) rejected = true;
					break;
				case 'weatherball':
					if (!hasMove['sunnyday']) rejected = true;
					break;
				case 'firepunch':
					if (hasMove['flareblitz']) rejected = true;
					break;
				case 'bugbite':
					if (hasMove['uturn']) rejected = true;
					break;
				case 'crosschop': case 'hijumpkick':
					if (hasMove['closecombat']) rejected = true;
					break;
				case 'drainpunch':
					if (hasMove['closecombat'] || hasMove['hijumpkick'] || hasMove['crosschop']) rejected = true;
					break;
				case 'thunderbolt':
					if (hasMove['discharge'] || hasMove['voltswitch'] || hasMove['thunder']) rejected = true;
					break;
				case 'discharge': case 'thunder':
					if (hasMove['voltswitch']) rejected = true;
					break;
				case 'rockslide': case 'rockblast':
					if (hasMove['stoneedge'] || hasMove['headsmash']) rejected = true;
					break;
				case 'stoneedge':
					if (hasMove['headsmash']) rejected = true;
					break;
				case 'bonemerang': case 'earthpower':
					if (hasMove['earthquake']) rejected = true;
					break;
				case 'dragonclaw':
					if (hasMove['outrage'] || hasMove['dragontail']) rejected = true;
					break;
				case 'ancientpower':
					if (hasMove['paleowave']) rejected = true;
					break;
				case 'dragonpulse':
					if (hasMove['dracometeor']) rejected = true;
					break;
				case 'return':
					if (hasMove['bodyslam'] || hasMove['facade'] || hasMove['doubleedge'] || hasMove['tailslap']) rejected = true;
					break;
				case 'poisonjab':
					if (hasMove['gunkshot']) rejected = true;
					break;
				case 'psychic':
					if (hasMove['psyshock']) rejected = true;
					break;
				case 'fusionbolt':
					if (setupType && hasMove['boltstrike']) rejected = true;
					break;
				case 'boltstrike':
					if (!setupType && hasMove['fusionbolt']) rejected = true;
					break;

				case 'rest':
					if (hasMove['painsplit'] || hasMove['wish'] || hasMove['recover'] || hasMove['moonlight'] || hasMove['synthesis']) rejected = true;
					break;
				case 'softboiled': case 'roost':
					if (hasMove['wish'] || hasMove['recover']) rejected = true;
					break;
				case 'perishsong':
					if (hasMove['roar'] || hasMove['whirlwind'] || hasMove['haze']) rejected = true;
					break;
				case 'roar':
					// Whirlwind outclasses Roar because Soundproof
					if (hasMove['whirlwind'] || hasMove['haze']) rejected = true;
					break;
				case 'substitute':
					if (hasMove['uturn'] || hasMove['voltswitch'] || hasMove['pursuit']) rejected = true;
					break;
				case 'fakeout':
					if (hasMove['trick'] || hasMove['switcheroo']) rejected = true;
					break;
				case 'encore': case 'suckerpunch':
					if (hasMove['rest'] && hasMove['sleeptalk']) rejected = true;
					break;
				case 'cottonguard':
					if (hasMove['reflect']) rejected = true;
					break;
				case 'lightscreen':
					if (hasMove['calmmind']) rejected = true;
					break;
				case 'rockpolish': case 'agility': case 'autotomize':
					if (!setupType && !hasMove['batonpass'] && hasMove['thunderwave']) rejected = true;
					if ((hasMove['stealthrock'] || hasMove['spikes'] || hasMove['toxicspikes']) && !hasMove['batonpass']) rejected = true;
					break;
				case 'thunderwave':
					if (setupType && (hasMove['rockpolish'] || hasMove['agility'])) rejected = true;
					if (hasMove['discharge'] || hasMove['trickroom']) rejected = true;
					if (hasMove['rest'] && hasMove['sleeptalk']) rejected = true;
					break;
				case 'lavaplume':
					if (hasMove['willowisp']) rejected = true;
					break;
				}
				if (k===3) {
					if (counter['Status']>=4) {
						// taunt bait, not okay
						rejected = true;
					}
				}
				var SetupException = {
					overheat:1, dracometeor:1, leafstorm:1,
					voltswitch:1, uturn:1,
					suckerpunch:1, extremespeed:1
				};
				if (move.category === 'Special' && setupType === 'Physical' && !SetupException[move.id]) {
					rejected = true;
				}
				if (move.category === 'Physical' && setupType === 'Special' && !SetupException[move.id]) {
					rejected = true;
				}
				if (setupType === 'Physical' && move.category !== 'Physical' && counter['Physical'] < 2) {
					rejected = true;
				}
				if (setupType === 'Special' && move.category !== 'Special' && counter['Special'] < 2) {
					rejected = true;
				}

				if (rejected && j<moveKeys.length) {
					moves.splice(k,1);
					break;
				}

				// handle HP IVs
				if (move.id === 'hiddenpower') {
					var HPivs = this.getType(move.type).HPivs;
					for (var iv in HPivs) {
						ivs[iv] = HPivs[iv];
					}
				}
			}

		} while (moves.length<4 && j<moveKeys.length);

		// any moveset modification goes here
		//moves[0] = 'Safeguard';
		{
			var abilities = [template.abilities['0']];
			if (template.abilities['1']) {
				abilities.push(template.abilities['1']);
			}
			if (template.abilities['DW']) {
				abilities.push(template.abilities['DW']);
			}
			abilities.sort(function(a,b){
				return this.getAbility(b).rating - this.getAbility(a).rating;
			}.bind(this));
			var ability0 = this.getAbility(abilities[0]);
			var ability1 = this.getAbility(abilities[1]);
			var ability = ability0.name;
			if (abilities[1]) {

				if (ability0.rating <= ability1.rating) {
					if (Math.random()*2<1) {
						ability = ability1.name;
					}
				} else if (ability0.rating - 0.6 <= ability1.rating) {
					if (Math.random()*3<1) {
						ability = ability1.name;
					}
				}

				var rejectAbility = false;
				if (ability === 'Contrary' && !counter['contrary']) {
					rejectAbility = true;
				}
				if (ability === 'Technician' && !counter['technician']) {
					rejectAbility = true;
				}
				if (ability === 'Skill Link' && !counter['skilllink']) {
					rejectAbility = true;
				}
				if (ability === 'Iron Fist' && !counter['ironfist']) {
					rejectAbility = true;
				}
				if (ability === 'Adaptability' && !counter['adaptability']) {
					rejectAbility = true;
				}
				if ((ability === 'Rock Head' || ability === 'Reckless') && !counter['recoil']) {
					rejectAbility = true;
				}
				if ((ability === 'No Guard' || ability === 'Compoundeyes') && !counter['inaccurate']) {
					rejectAbility = true;
				}
				if ((ability === 'Sheer Force' || ability === 'Serene Grace') && !counter['sheerforce']) {
					rejectAbility = true;
				}
				if (ability === 'Hustle' && !counter['hustle']) {
					rejectAbility = true;
				}
				if (ability === 'Simple' && !setupType && !hasMove['flamecharge']) {
					rejectAbility = true;
				}
				if (ability === 'Prankster' && !counter['Status']) {
					rejectAbility = true;
				}
				if (ability === 'Defiant' && !counter['Physical'] && !hasMove['batonpass']) {
					rejectAbility = true;
				}
				// below 2 checks should be modified, when it becomes possible, to check if the team contains rain or sun
				if (ability === 'Swift Swift' && !hasMove['raindance']) {
					rejectAbility = true;
				}
				if (ability === 'Chlorophyll' && !hasMove['sunnyday']) {
					rejectAbility = true;
				}
				if (ability === 'Moody' && template.id !== 'bidoof') {
					rejectAbility = true;
				}
				if (ability === 'Lightningrod' && template.types.indexOf('Ground') >= 0) {
					rejectAbility = true;
				}

				if (rejectAbility) {
					if (ability === ability1.name) { // or not
						ability = ability0.name;
					} else if (ability1.rating > 0) { // only switch if the alternative doesn't suck
						ability = ability1.name;
					}
				}
				if ((abilities[0] === 'Guts' || abilities[1] === 'Guts' || abilities[2] === 'Guts') && ability !== 'Quick Feet' && hasMove['facade']) {
					ability = 'Guts';
				}
				if ((abilities[0] === 'Swift Swim' || abilities[1] === 'Swift Swim' || abilities[2] === 'Swift Swim') && hasMove['raindance']) {
					ability = 'Swift Swim';
				}
				if ((abilities[0] === 'Chlorophyll' || abilities[1] === 'Chlorophyll' || abilities[2] === 'Chlorophyll') && ability !== 'Solar Power' && hasMove['sunnyday']) {
					ability = 'Chlorophyll';
				}
				if (template.id === 'combee') {
					// it always gets Hustle but its only physical move is Endeavor, which loses accuracy
					ability = 'Honey Gather';
				}
			}

			if (hasMove['gyroball']) {
				ivs.spe = 0;
				//evs.atk += evs.spe;
				evs.spe = 0;
			} else if (hasMove['trickroom']) {
				ivs.spe = 0;
				//evs.hp += evs.spe;
				evs.spe = 0;
			}

			item = 'Leftovers';
			if (template.requiredItem) {
				item = template.requiredItem;
			} else if (template.species === 'Rotom-Fan') {
				// this is just to amuse myself
				item = 'Air Balloon';
			} else if (template.species === 'Delibird') {
				// to go along with the Christmas Delibird set
				item = 'Leftovers';

			// First, the extra high-priority items

			} else if (ability === 'Imposter') {
				item = 'Choice Scarf';
			} else if (hasMove["magikarpsrevenge"]) {
				item = 'Choice Band';
			} else if (ability === 'Wonder Guard') {
				item = 'Focus Sash';
			} else if (template.species === 'Unown') {
				item = 'Choice Specs';
			} else if ((template.species === 'Wynaut' || template.species === 'Wobbuffet') && hasMove['destinybond'] && Math.random()*2 > 1) {
				item = 'Custap Berry';
			} else if (hasMove['trick'] && hasMove['gyroball'] && (ability === 'Levitate' || hasType['Flying'])) {
				item = 'Macho Brace';
			} else if (hasMove['trick'] && hasMove['gyroball']) {
				item = 'Iron Ball';
			} else if (counter.Physical >= 3 && (hasMove['trick'] || hasMove['switcheroo'])) {
				item = 'Choice Band';
			} else if (counter.Special >= 3 && (hasMove['trick'] || hasMove['switcheroo'])) {
				item = 'Choice Specs';
			} else if (counter.Status <= 1 && (hasMove['trick'] || hasMove['switcheroo'])) {
				item = 'Choice Scarf';
			} else if (hasMove['rest'] && !hasMove['sleeptalk'] && ability !== 'Natural Cure' && ability !== 'Shed Skin') {
				item = 'Chesto Berry';
			} else if (hasMove['naturalgift']) {
				item = 'Liechi Berry';
			} else if (ability === 'Harvest') {
				item = 'Sitrus Berry';
			} else if (template.species === 'Cubone' || template.species === 'Marowak') {
				item = 'Thick Club';
			} else if (template.species === 'Pikachu') {
				item = 'Light Ball';
			} else if (template.species === 'Clamperl') {
				item = 'DeepSeaTooth';
			} else if (hasMove['reflect'] && hasMove['lightscreen']) {
				item = 'Light Clay';
			} else if (hasMove['acrobatics']) {
				item = 'Flying Gem';
			} else if (hasMove['shellsmash']) {
				item = 'White Herb';
			} else if (hasMove['facade'] || ability === 'Poison Heal' || ability === 'Toxic Boost') {
				item = 'Toxic Orb';
			} else if (hasMove['raindance']) {
				item = 'Damp Rock';
			} else if (hasMove['sunnyday']) {
				item = 'Heat Rock';
			} else if (hasMove['sandstorm']) { // lol
				item = 'Smooth Rock';
			} else if (hasMove['hail']) { // lol
				item = 'Icy Rock';
			} else if (ability === 'Magic Guard' && hasMove['psychoshift']) {
				item = 'Flame Orb';
			} else if (ability === 'Sheer Force' || ability === 'Magic Guard') {
				item = 'Life Orb';
			} else if (ability === 'Unburden' && (counter['Physical'] || counter['Special'])) {
				// Give Unburden mons a random Gem of the type of one of their damaging moves
				var shuffledMoves = moves.randomize();
				for (var m in shuffledMoves) {
					var move = this.getMove(shuffledMoves[m]);
					if (move.basePower || move.basePowerCallback) {
						item = move.type + ' Gem';
						break;
					}
				}
			} else if (hasMove['trick'] || hasMove['switcheroo']) {
				item = 'Choice Scarf';
			} else if (ability === 'Guts') {
				if (hasMove['drainpunch']) {
					item = 'Flame Orb';
				} else {
					item = 'Toxic Orb';
				}
				if ((hasMove['return'] || hasMove['hyperfang']) && !hasMove['facade']) {
					// lol no
					for (var j=0; j<moves.length; j++) {
						if (moves[j] === 'Return' || moves[j] === 'HyperFang') {
							moves[j] = 'Facade';
							break;
						}
					}
				}
			} else if (ability === 'Marvel Scale' && hasMove['psychoshift']) {
				item = 'Flame Orb';
			} else if (hasMove['reflect'] || hasMove['lightscreen']) {
				// less priority than if you'd had both
				item = 'Light Clay';
			} else if (counter.Physical >= 4 && !hasMove['fakeout'] && !hasMove['suckerpunch'] && !hasMove['flamecharge'] && !hasMove['rapidspin']) {
				if (Math.random()*3 > 1) {
					item = 'Choice Band';
				} else {
					item = 'Expert Belt';
				}
			} else if (counter.Special >= 4) {
				if (Math.random()*3 > 1) {
					item = 'Choice Specs';
				} else {
					item = 'Expert Belt';
				}
			} else if (this.getEffectiveness('Ground', template) >= 2 && ability !== 'Levitate' && !hasMove['magnetrise']) {
				item = 'Air Balloon';
			} else if ((hasMove['eruption'] || hasMove['waterspout']) && !counter['Status']) {
				item = 'Choice Scarf';
			} else if (hasMove['substitute'] || hasMove['detect'] || hasMove['protect'] || ability === 'Moody') {
				item = 'Leftovers';
			} else if ((hasMove['flail'] || hasMove['reversal']) && !hasMove['endure'] && ability !== 'Sturdy') {
				item = 'Focus Sash';
			} else if (ability === 'Iron Barbs') {
				// only Iron Barbs for now
				item = 'Rocky Helmet';
			} else if ((template.baseStats.hp+75)*(template.baseStats.def+template.baseStats.spd+175) > 60000 || template.species === 'Skarmory' || template.species === 'Forretress') {
				// skarmory and forretress get exceptions for their typing
				item = 'Leftovers';
			} else if (counter.Physical + counter.Special >= 3 && setupType) {
				item = 'Life Orb';
			} else if (counter.Special >= 3 && setupType) {
				item = 'Life Orb';
			} else if (counter.Physical + counter.Special >= 4) {
				item = 'Expert Belt';
			} else if (i===0 && ability !== 'Sturdy') {
				item = 'Focus Sash';
			} else if (hasMove['outrage']) {
				item = 'Lum Berry';

			// this is the "REALLY can't think of a good item" cutoff
			// why not always Leftovers? Because it's boring. :P

			} else if (hasType['Flying'] || ability === 'Levitate') {
				item = 'Leftovers';
			} else if (this.getEffectiveness('Ground', template) >= 1 && ability !== 'Levitate' && !hasMove['magnetrise']) {
				item = 'Air Balloon';
			} else if (hasType['Poison']) {
				item = 'Black Sludge';
			} else if (counter.Status <= 1) {
				item = 'Life Orb';
			} else {
				item = 'Leftovers';
			}

			if (item === 'Leftovers' && hasType['Poison']) {
				item = 'Black Sludge';
			}
		}

		// 95-86-82-78-74-70
		var levelScale = {
			LC: 95,
			NFE: 90,
			'LC Uber': 86,
			NU: 86,
			BL3: 84,
			RU: 82,
			BL2: 80,
			UU: 78,
			BL: 76,
			OU: 74,
			CAP: 74,
			G4CAP: 74,
			G5CAP: 74,
			Unreleased: 74,
			Uber: 70
		};
		var customScale = {
			// Really bad Pokemon and jokemons
			Azurill: 99, Burmy: 99, Cascoon: 99, Caterpie: 99, Cleffa: 99, Combee: 99, Feebas: 99, Igglybuff: 99, Happiny: 99, Hoppip: 99,
			Kakuna: 99, Kricketot: 99, Ledyba: 99, Magikarp: 99, Metapod: 99, Pichu: 99, Ralts: 99, Sentret: 99, Shedinja: 99,
			Silcoon: 99, Slakoth: 99, Sunkern: 99, Tynamo: 99, Tyrogue: 99, Unown: 99, Weedle: 99, Wurmple: 99, Zigzagoon: 99,
			Clefairy: 95, Delibird: 95, "Farfetch'd": 95, Jigglypuff: 95, Kirlia: 95, Ledian: 95, Luvdisc: 95, Marill: 95, Skiploom: 95,
			Pachirisu: 90,
			
			// Eviolite
			Ferroseed: 95, Misdreavus: 95, Munchlax: 95, Murkrow: 95, Natu: 95, 
			Gligar: 90, Metang: 90, Monferno: 90, Roselia: 90, Seadra: 90, Togetic: 90, Wartortle: 90, Whirlipede: 90, 
			Dusclops: 84, Porygon2: 82, Chansey: 78,

			// Weather or teammate dependent
			Snover: 95, Vulpix: 95, Excadrill: 78, Ninetales: 78, Tentacruel: 78, Toxicroak: 78, Venusaur: 78, "Tornadus-Therian": 74,

			// Holistic judgment
			Carvanha: 90, Blaziken: 74, "Deoxys-Defense": 74, "Deoxys-Speed": 74, Garchomp: 74, Thundurus: 74
		};
		var level = levelScale[template.tier] || 90;
		if (customScale[template.name]) level = customScale[template.name];

		if (template.name === 'Chandelure' && ability === 'Shadow Tag') level = 70;
		if (template.name === 'Serperior' && ability === 'Contrary') level = 74;
		if (template.name === 'Magikarp' && hasMove['magikarpsrevenge']) level = 85;
		if (template.name === 'Spinda' && ability !== 'Contrary') level = 95;

		return {
			name: template.name,
			moves: moves,
			ability: ability,
			evs: evs,
			ivs: ivs,
			item: item,
			level: level,
			shiny: (Math.random()*1024<=1)
		};
	},
	randomTeam: function(side) {
		var keys = [];
		var pokemonLeft = 0;
		var pokemon = [];
		for (var i in this.data.FormatsData) {
			if (this.data.FormatsData[i].viableMoves) {
				keys.push(i);
			}
		}
		keys = keys.randomize();

		var ruleset = this.getFormat().ruleset;

		for (var i=0; i<keys.length && pokemonLeft < 6; i++) {
			var template = this.getTemplate(keys[i]);

			if (!template || !template.name || !template.types) continue;
			if ((template.tier === 'G4CAP' || template.tier === 'G5CAP') && Math.random()*5>1) continue;
			if (keys[i].substr(0,6) === 'arceus' && Math.random()*17>1) continue;
			if (keys[i].substr(0,8) === 'basculin' && Math.random()*2>1) continue;
			// Not available on BW
			if (template.species === 'Pichu-Spiky-eared') continue;

			if (ruleset && ruleset[0]==='PotD') {
				var potd = this.getTemplate(config.potd);
				if (i===1) {
					template = potd;
					if (!template || !template.name || !template.types) {
						continue;
					} else if (template.species === 'Magikarp') {
						template.viableMoves = {magikarpsrevenge:1, splash:1, bounce:1};
					} else if (template.species === 'Delibird') {
						template.viableMoves = {present:1, bestow:1};
					}
				} else if (template.species === potd.species) {
					continue; // No thanks, I've already got one
				}
			}

			var set = this.randomSet(template, i);

			pokemon.push(set);
			pokemonLeft++;
		}
		return pokemon;
	},
	randomSeasonalTeam: function(side) {
		var seasonalPokemonList = ['alakazam', 'machamp', 'hypno', 'hitmonlee', 'hitmonchan', 'mrmime', 'jynx', 'hitmontop', 'hariyama', 'sableye', 'medicham', 'toxicroak', 'electivire', 'magmortar', 'conkeldurr', 'throh', 'sawk', 'gothitelle', 'beheeyem', 'bisharp', 'volbeat', 'illumise', 'spinda', 'cacturne', 'infernape', 'lopunny', 'lucario', 'mienshao', 'pidgeot', 'fearow', 'dodrio', 'aerodactyl', 'noctowl', 'crobat', 'xatu', 'skarmory', 'swellow', 'staraptor', 'honchkrow', 'chatot', 'unfezant', 'sigilyph', 'braviary', 'mandibuzz', 'farfetchd', 'pelipper', 'altaria', 'togekiss', 'swoobat', 'archeops', 'swanna', 'weavile', 'gallade', 'gardevoir', 'ludicolo', 'snorlax', 'wobbuffet', 'meloetta', 'blissey', 'landorus', 'tornadus', 'golurk', 'bellossom', 'lilligant', 'probopass', 'roserade', 'leavanny', 'zapdos', 'moltres', 'articuno', 'delibird'];

		seasonalPokemonList = seasonalPokemonList.randomize();

		var team = [];

		for (var i=0; i<6; i++) {
			var set = this.randomSet(seasonalPokemonList[i], i);

			set.level = 100;

			team.push(set);
		}

		return team;
	},
	randomSeasonalWWTeam: function(side) {
		var seasonalPokemonList = ['raichu', 'nidoqueen', 'nidoking', 'clefable', 'wigglytuff', 'rapidash', 'dewgong', 'cloyster', 'exeggutor', 'starmie', 'jynx', 'lapras', 'snorlax', 'articuno', 'azumarill', 'granbull', 'delibird', 'stantler', 'miltank', 'blissey', 'swalot', 'lunatone', 'castform', 'chimecho', 'glalie', 'walrein', 'regice', 'jirachi', 'bronzong', 'chatot', 'abomasnow', 'weavile', 'togekiss', 'glaceon', 'probopass', 'froslass', 'rotom-frost', 'uxie', 'mesprit', 'azelf', 'victini', 'vanilluxe', 'sawsbuck', 'beartic', 'cryogonal', 'chandelure'];

		var shouldHavePresent = {raichu:1,clefable:1,wigglytuff:1,azumarill:1,granbull:1,miltank:1,blissey:1,togekiss:1,delibird:1};

		seasonalPokemonList = seasonalPokemonList.randomize();

		var team = [];

		for (var i=0; i<6; i++) {
			var template = this.getTemplate(seasonalPokemonList[i]);

			// we're gonna modify the default template
			template = Object.clone(template, true);
			delete template.viableMoves.ironhead;
			delete template.viableMoves.fireblast;
			delete template.viableMoves.overheat;
			delete template.viableMoves.vcreate;
			delete template.viableMoves.blueflare;
			if (template.id === 'chandelure') {
				template.viableMoves.flameburst = 1;
				template.abilities.DW = 'Flash Fire';
			}

			var set = this.randomSet(template, i);

			if (template.id in shouldHavePresent) set.moves[0] = 'Present';

			set.level = 100;

			team.push(set);
		}

		return team;
	},
	randomSeasonalVVTeam: function(side) {
		var couples = ['nidoranf+nidoranm', 'nidorina+nidorino', 'nidoqueen+nidoking', 'gallade+gardevoir', 'plusle+minun', 'illumise+volbeat', 'latias+latios', 'skitty+wailord', 'tauros+miltank', 'rufflet+vullaby', 'braviary+mandibuzz', 'mew+mesprit', 'audino+chansey', 'lickilicky+blissey', 'purugly+beautifly', 'clefairy+wigglytuff', 'clefable+jigglypuff', 'cleffa+igglybuff', 'pichu+pachirisu', 'alomomola+luvdisc', 'gorebyss+huntail', 'kyuremb+kyuremw', 'cherrim+cherubi', 'slowbro+slowking', 'jynx+lickitung', 'milotic+gyarados', 'slowpoke+shellder', 'happiny+mimejr', 'mrmime+smoochum', 'woobat+munna', 'swoobat+musharna', 'delcatty+lopunny', 'skitty+buneary', 'togetic+shaymin', 'glameow+snubbull', 'whismur+wormadam', 'finneon+porygon', 'ditto+porygon2', 'porygonz+togekiss', 'hoppip+togepi', 'lumineon+corsola', 'exeggcute+flaaffy'];
		couples = couples.randomize();
		var shouldHaveAttract = {audino:1, beautifly:1, delcatty:1, finneon:1, glameow:1, lumineon:1, purugly:1, swoobat:1, woobat:1, wormadam:1, wormadamsandy:1, wormadamtrash:1};
		var shouldHaveKiss = {buneary:1, finneon:1, lopunny:1, lumineon:1, minun:1, pachirisu:1, pichu:1, plusle:1, shaymin:1, togekiss:1, togepi:1, togetic:1};
		var team = [];
		
		// First we get the first three couples and separate it in a list of Pokemon to deal with them
		var pokemons = [];
		for (var i=0; i<3; i++) {
			var couple = couples[i].split('+');
			pokemons.push(couple[0]);
			pokemons.push(couple[1]);
		}
		
		for (var i=0; i<6; i++) {
			var pokemon = pokemons[i];
			if (pokemon === 'wormadam') {
				var wormadams = ['wormadam', 'wormadamsandy', 'wormadamtrash'];
				wormadams = wormadams.randomize();
				pokemon = wormadams[0];
			}
			var template = this.getTemplate(pokemon);
			var set = this.randomSet(template, i);
			// We set some arbitrary moves
			if (template.id === 'jynx' && set.moves.indexOf('lovelykiss') < 0) set.moves[0] = 'Lovely Kiss';
			if (template.id in shouldHaveAttract) set.moves[0] = 'Attract';
			if (template.id in shouldHaveKiss) set.moves[0] = 'Sweet Kiss';
			// We set some arbitrary levels to balance
			if (template.id === 'kyuremblack' || template.id === 'kyuremwhite') set.level = 60;
			if (template.id === 'magikarp') set.level = 100;
			team.push(set);
		}

		return team;
	},
	randomSeasonalSFTeam: function(side) {
		// This is the huge list of all the Pokemon in this seasonal
		var seasonalPokemonList = [
			'togepi', 'togetic', 'togekiss', 'happiny', 'chansey', 'blissey', 'exeggcute', 'exeggutor', 'lopunny', 'bunneary', 
			'azumarill', 'bulbasaur', 'ivysaur', 'venusaur', 'caterpie', 'metapod', 'bellsprout', 'weepinbell', 'victreebel', 
			'scyther', 'chikorita', 'bayleef', 'meganium', 'spinarak', 'natu', 'xatu', 'bellossom', 'politoed', 'skiploom', 
			'larvitar', 'tyranitar', 'celebi', 'treecko', 'grovyle', 'sceptile', 'dustox', 'lotad', 'lombre', 'ludicolo', 
			'breloom', 'electrike', 'roselia', 'gulpin', 'vibrava', 'flygon', 'cacnea', 'cacturne', 'cradily', 'keckleon', 
			'tropius', 'rayquaza', 'turtwig', 'grotle', 'torterra', 'budew', 'roserade', 'carnivine', 'yanmega', 'leafeon', 
			'shaymin', 'shayminsky', 'snivy', 'servine', 'serperior', 'pansage', 'simisage', 'swadloon', 'cottonee', 
			'whimsicott', 'petilil', 'lilligant', 'basculin', 'maractus', 'trubbish', 'garbodor', 'solosis', 'duosion', 
			'reuniclus', 'axew', 'fraxure', 'golett', 'golurk', 'virizion', 'tornadus', 'tornadustherian', 'burmy', 'wormadam', 
			'kakuna', 'beedrill', 'sandshrew', 'nidoqueen', 'zubat', 'golbat', 'oddish', 'gloom', 'mankey', 'poliwrath', 
			'machoke', 'machamp', 'doduo', 'dodrio', 'grimer', 'muk', 'kingler', 'cubone', 'marowak', 'hitmonlee', 'tangela', 
			'mrmime', 'tauros', 'kabuto', 'dragonite', 'mewtwo', 'marill', 'hoppip', 'espeon', 'teddiursa', 'ursaring', 
			'cascoon', 'taillow', 'swellow', 'pelipper', 'masquerain', 'azurill', 'minun', 'carvanha', 'huntail', 'bagon', 
			'shelgon', 'salamence', 'latios', 'tangrowth', 'seismitoad', 'eelektross', 'druddigon', 'bronzor', 
			'bronzong', 'murkrow', 'honchkrow', 'absol', 'pidove', 'tranquill', 'unfezant', 'dunsparce', 'jirachi', 
			'deerling', 'sawsbuck', 'meloetta', 'cherrim', 'gloom', 'vileplume', 'bellossom', 'lileep', 'venusaur', 
			'sunflora', 'gallade', 'vullaby'
        ];
		seasonalPokemonList = seasonalPokemonList.randomize();
		// Pokemon that must be shiny to be green
		var mustBeShiny = {
			kakuna:1, beedrill:1, sandshrew:1, nidoqueen:1, zubat:1, golbat:1, oddish:1, gloom:1, mankey:1, poliwrath:1, 
			machoke:1, machamp:1, doduo:1, dodrio:1, grimer:1, muk:1, kingler:1, cubone:1, marowak:1, hitmonlee:1, tangela:1, 
			mrmime:1, tauros:1, kabuto:1, dragonite:1, mewtwo:1, marill:1, hoppip:1, espeon:1, teddiursa:1, ursaring:1, 
			cascoon:1, taillow:1, swellow:1, pelipper:1, masquerain:1, azurill:1, minun:1, carvanha:1, huntail:1, bagon:1, 
			shelgon:1, salamence:1, latios:1, tangrowth:1, seismitoad:1, jellicent:1, elektross:1, druddigon:1, 
			bronzor:1, bronzong:1, golett:1, golurk:1
		};
		// Pokemon that are in for their natural Super Luck ability
		var superLuckPokemon = {murkrow:1, honchkrow:1, absol:1, pidove :1, tranquill:1, unfezant:1};
		// Pokemon that are in for their natural Serene Grace ability
		var sereneGracePokemon = {dunsparce:1, jirachi:1, deerling:1, sawsbuck:1, meloetta:1};
		var team = [];
		
		// Now, let's make the team!
		for (var i=0; i<6; i++) {
			var pokemon = seasonalPokemonList[i];
			var template = this.getTemplate(pokemon);
			var set = this.randomSet(template, i);
			
			// Everyone will have Metronome. EVERYONE. Luck everywhere!
			set.moves[0] = 'Metronome';
			// Also everyone will have either Softboiled, Barrage or Egg Bomb since easter!
			var secondMove = ['softboiled', 'barrage', 'eggbomb'].randomize();
			if (set.moves.indexOf(secondMove) === -1) {
				set.moves[1] = secondMove[0];
			}
			// Don't worry, both attacks are boosted for this seasonal!
			
			// Also Super Luck or Serene Grace as an ability. Yay luck!
			if (template.id in superLuckPokemon) {
				set.ability = 'Super Luck';
			} else if (template.id in sereneGracePokemon) {
				set.ability = 'Serene Grace';
			} else {
				var abilities = ['Serene Grace', 'Super Luck'].randomize();
				set.ability = abilities[0];
			}
			
			// These Pokemon must always be shiny to be green
			if (template.id in mustBeShiny) {
				set.shiny = true;
			}
			
			// We don't want choice items
			if (['Choice Scarf', 'Choice Band', 'Choice Specs'].indexOf(set.item) > -1) {
				set.item = 'Metronome';
			}
			// Avoid Toxic Orb Breloom
			if (template.id === 'breloom' && set.item === 'Toxic Orb') {
				set.item = 'Lum Berry';
			}
			// Change gems to Grass Gem
			if (set.item.indexOf('Gem') > -1) {
				if (set.moves.indexOf('barrage') > -1 || set.moves.indexOf('eggbomb') > -1 || set.moves.indexOf('gigadrain') > -1) {
					set.item = 'Grass Gem';
				} else {
					set.item = 'Metronome';
				}
			}
			team.push(set);
		}

		return team;
	},
	randomSeasonalFFTeam: function(side) {
		// Seasonal Pokemon list
		var seasonalPokemonList = [
			'missingno', 'koffing', 'weezing', 'slowpoke', 'slowbro', 'slowking', 'psyduck', 'spinda', 'whimsicott', 'liepard', 'sableye',
			'thundurus', 'tornadus', 'illumise', 'murkrow', 'purrloin', 'riolu', 'volbeat', 'rotomheat', 'rotomfan', 'haunter',
			'gengar', 'gastly', 'gliscor', 'venusaur', 'serperior', 'sceptile', 'shiftry', 'torterra', 'meganium', 'leafeon', 'roserade',
			'amoonguss', 'parasect', 'breloom', 'abomasnow', 'rotommow', 'wormadam', 'tropius', 'lilligant', 'ludicolo', 'cacturne',
			'vileplume', 'bellossom', 'victreebel', 'jumpluff', 'carnivine', 'sawsbuck', 'virizion', 'shaymin', 'arceusgrass', 'shayminsky',
			'tangrowth', 'pansage', 'maractus', 'cradily', 'celebi', 'exeggutor', 'ferrothorn', 'zorua', 'zoroark', 'dialga'
		];
		seasonalPokemonList = seasonalPokemonList.randomize();
		var team = [];
		var mustHavePrankster = {
			whimsicott:1, liepard:1, sableye:1, thundurus:1, tornadus:1, illumise:1, volbeat:1, murkrow:1, 
			purrloin:1, riolu:1, sableye:1, volbeat:1, missingno:1
		};
		
		// Now, let's make the team!
		for (var i=0; i<6; i++) {
			var pokemon = seasonalPokemonList[i];
			var template = this.getTemplate(pokemon);
			var set = this.randomSet(template, i);
			// Chance to have prankster or illusion
			var dice = this.random(100);
			if (dice < 20) {
				set.ability = 'Prankster';
			} else if (dice < 60) {
				set.ability = 'Illusion';
			}
			if (template.id in mustHavePrankster) {
				set.ability = 'Prankster';
			}
			// Let's make the movesets for some Pokemon
			if (template.id === 'missingno') {
				// Some serious missingno nerfing so it's just a fun annoying Poke
				set.item = 'Flame Orb';
				set.level = 255;
				set.moves = ['Trick', 'Stored Power', 'Thunder Wave', 'Taunt', 'Encore', 'Attract', 'Charm', 'Leech Seed'];
				set.evs = {hp: 4, def: 0, spd: 0, spa: 0, atk: 255, spe: 255};
				set.ivs = {hp: 0, def: 0, spd: 0, spa: 0, atk: 0, spe: 0};
				set.nature = 'Brave';
			} else if (template.id === 'rotomheat') {
				set.item = 'Flame Orb';
				set.moves = ['Overheat', 'Volt Switch', 'Pain Split', 'Trick'];
			} else if (template.id === 'riolu') {
				set.item = 'Eviolite';
				set.moves = ['Copycat', 'Roar', 'Drain Punch', 'Substitute'];
				set.evs = {hp: 248, def: 112, spd: 96, spa: 0, atk: 0, spe: 52};
				set.nature = 'Careful';
			} else if (template.id in {gastly:1, haunter:1, gengar:1}) {
				// Gengar line, troll SubDisable set
				set.item = 'Leftovers';
				set.moves = ['Substitute', 'Disable', 'Shadow Ball', 'Focus Blast'];
				set.evs = {hp: 4, def: 0, spd: 0, spa: 252, atk: 0, spe: 252};
				set.nature = 'Timid';
			} else if (template.id === 'gliscor') {
				set.item = 'Toxic Orb';
				set.ability = 'Poison Heal';
				set.moves = ['Substitute', 'Protect', 'Toxic', 'Earthquake'];
				set.evs = {hp: 252, def: 184, spd: 0, spa: 0, atk: 0, spe: 72};
				set.ivs = {hp: 31, def: 31, spd: 31, spa: 0, atk: 31, spe: 31};
				set.nature = 'Impish';
			} else if (template.id === 'purrloin') {
				set.item = 'Eviolite';
			} else if (template.id === 'dialga') {
				set.level = 60;
			} else if (template.id === 'sceptile') {
				var items = ['Lum Berry', 'Occa Berry', 'Yache Berry', 'Sitrus Berry'];
				items = items.randomize();
				set.item = items[0];
			} else if (template.id === 'breloom' && set.item === 'Toxic Orb' && set.ability !== 'Poison Heal') {
				set.item = 'Muscle Band';
			}
			
			// This is purely for the lulz
			if (set.ability === 'Prankster' && !('attract' in set.moves) && !('charm' in set.moves) && this.random(100) < 50) {
				var attractMoves = ['Attract', 'Charm'];
				attractMoves = attractMoves.randomize();
				set.moves[3] = attractMoves[0];
			}
			
			// For poison types with Illusion
			if (set.item === 'Black Sludge') {
				set.item = 'Leftovers';
			}
			
			team.push(set);
		}

		return team;
	},
	randomSeasonalMMTeam: function(side) {
		// Seasonal Pokemon list
		var seasonalPokemonList = [
			'cherrim', 'joltik', 'surskit', 'combee', 'kricketot', 'kricketune', 'ferrothorn', 'roserade', 'roselia', 'budew', 'clefairy', 'clefable', 
			'deoxys', 'celebi', 'jirachi', 'meloetta', 'mareep', 'chatot', 'loudred', 'ludicolo', 'sudowoodo', 'yamask', 'chandelure', 'jellicent', 
			'arceusghost', 'gengar', 'cofagrigus', 'giratina', 'rotom', 'kangaskhan', 'marowak', 'blissey', 'sawk', 'rhydon', 'rhyperior', 'rhyhorn', 
			'politoed', 'gastrodon', 'magcargo', 'nidoking', 'espeon', 'muk', 'weezing', 'grimer', 'muk', 'swalot', 'crobat', 'hydreigon', 'arbok', 
			'genesect', 'gliscor', 'aerodactyl', 'ambipom', 'drapion', 'drifblim', 'venomoth', 'spiritomb', 'rattata', 'grumpig', 'blaziken', 'mewtwo',
			'beautifly', 'skitty', 'venusaur', 'munchlax', 'wartortle', 'glaceon', 'manaphy', 'hitmonchan', 'liepard', 'sableye', 'zapdos', 'heatran',
			'treecko', 'piloswine', 'duskull', 'dusclops', 'dusknoir', 'spiritomb'
		];
		seasonalPokemonList = seasonalPokemonList.randomize();
		var team = [];
		
		// Now, let's make the team!
		for (var i=0; i<6; i++) {
			var pokemon = seasonalPokemonList[i];
			var template = this.getTemplate(pokemon);
			var set = this.randomSet(template, i);
			// Use metronome because month of music
			if (set.item in {'Choice Scarf':1, 'Choice Band':1, 'Choice Specs':1, 'Life Orb':1}) {
				set.item = 'Metronome';
			// Berries over other items since spring
			} else if (set.item === 'Leftovers' || set.item === 'Black Sludge') {
				set.item = 'Sitrus Berry';
			} else if (template.id !== 'arceusghost' && set.item !== 'Chesto Berry') {
				if (this.getEffectiveness('Fire', template) >= 1) {
					set.item = 'Occa Berry';
				} else if (this.getEffectiveness('Ground', template) >= 1 && template.ability !== 'Levitate') {
					set.item = 'Shuca Berry';
				} else if (this.getEffectiveness('Ice', template) >= 1) {
					set.item = 'Yache Berry';
				} else if (this.getEffectiveness('Grass', template) >= 1) {
					set.item = 'Rindo Berry';
				} else if (this.getEffectiveness('Fighting', template) >= 1 && this.getImmunity('Fighting', template)) {
					set.item = 'Chople Berry';
				} else if (this.getEffectiveness('Rock', template) >= 1) {
					set.item = 'Charti Berry';
				} else if (this.getEffectiveness('Dark', template) >= 1) {
					set.item = 'Colbur Berry';
				} else if (this.getEffectiveness('Electric', template) >= 1 && this.getImmunity('Electric', template)) {
					set.item = 'Wacan Berry';
				} else if (this.getEffectiveness('Psychic', template) >= 1) {
					set.item = 'Payapa Berry';
				} else if (this.getEffectiveness('Flying', template) >= 1) {
					set.item = 'Coba Berry';
				} else if (this.getEffectiveness('Water', template) >= 1) {
					set.item = 'Passho Berry';
				} else {
					set.item = 'Enigma Berry';
				}
			}
			team.push(set);
		}

		return team;
	},
	randomSeasonalJJTeam: function(side) {
		// Seasonal Pokemon list
		var seasonalPokemonList = [
			'ninetales', 'sawsbuck', 'vanilluxe', 'vanillite', 'vanillish', 'rotommow', 'rotomfan', 'pikachu', 'raichu', 'solrock', 'sunflora', 
			'castform', 'ludicolo', 'thundurus', 'tornadus', 'landorus', 'magmar', 'magmortar', 'rhydon', 'rhyperior', 'lapras', 
			'starmie', 'manaphy', 'krabby', 'kingler', 'crawdaunt', 'victreebell', 'bellossom', 'maractus', 'exeggutor', 'tropius', 'malaconda', 
			'krillowatt', 'cherrim', 'snorlax', 'butterfree', 'slaking', 'politoed', 'tentacool', 'tentacruel', 'sudowoodo', 'groudon', 
			'keldeo', 'venusaur', 'hooh', 'moltres', 'zapdos', 'reshiram ', 'blastoise', 'meloetta', 'roserade', 'lilligant', 
			'rotomheat', 'beautifuly', 'butterfree', 'beedrill', 'charizard', 'delcatty', 'drifblim', 'floatzel', 'jumpluff', 'lunatone', 
			'solrock', 'machoke', 'machamp', 'machop', 'meganium', 'pelliper', 'wailord', 'rapidash', 'vileplume', 'aurumoth', 'syclant', 
			'butterfree', 'beedrill', 'parasect', 'venomoth', 'scizor', 'pinsir', 'ledian', 'ariados', 'yanmega', 'forretress', 'shuckle', 
			'heracross', 'beautifly', 'dustox', 'masquerain', 'ninjask', 'shedinja', 'volbeat', 'illumise', 'armaldo', 'kricketune', 'wormadam', 
			'wormadamsandy', 'wormadamtrash', 'mothim', 'vespiquen', 'arceusbug', 'leavanny', 'scolipede', 'crustle', 'escavalier',
			'galvantula', 'accelgor', 'durant', 'volcarona', 'genesect', 'rotomheat'
		];
		seasonalPokemonList = seasonalPokemonList.randomize();
		var team = [this.randomSet(this.getTemplate('delibird'), 0)];
		
		// Now, let's make the team!
		for (var i=1; i<6; i++) {
			var pokemon = seasonalPokemonList[i];
			var template = this.getTemplate(pokemon);
			var set = this.randomSet(template, i);
			if (template.id in {'vanilluxe':1, 'vanillite':1, 'vanillish':1}) {
				set.moves = ['icebeam', 'weatherball', 'autotomize', 'flashcannon'];
			}
			if (template.id in {'pikachu':1, 'raichu':1}) {
				set.moves = ['thunderbolt', 'surf', 'substitute', 'nastyplot'];
			}
			if (template.id in {'rhydon':1, 'rhyperior':1}) {
				set.moves = ['surf', 'megahorn', 'earthquake', 'rockblast'];
			}
			if (template.id === 'reshiram') {
				 set.moves = ['tailwhip', 'dragontail', 'irontail', 'aquatail'];
			}
			team.push(set);
		}
		
		return team;
	},
	randomSeasonalJuly: function(side) {
		// Seasonal Pokemon list
		var seasonalPokemonList = [
			'groudon', 'charizard', 'ninetales', 'arcanine', 'rapidash', 'flareon', 'moltres', 'typhlosion', 'magcargo', 
			'houndoom', 'blaziken', 'camerupt', 'infernape', 'magmortar', 'emboar', 'simisear', 'chandelure', 'volcarona',
			'darmanitan', 'hooh', 'reshiram', 'heatran', 'entei', 'meloetta', 'genesect', 'scizor', 'jirachi', 'zoroark',
			'victini', 'crawdaunt', 'kingler', 'stoutland', 'ninetales', 'raikou', 'entei', 'suicune', 'toxicroak', 'politoed', 
			'thundurus', 'thundurustherian', 'ferrothorn', 'venusaur', 'scizor', 'skarmory', 'staraptor', 'groudon', 
			'arcanine', 'blastoise', 'heracross', 'honchkrow', 'murkrow', 'houndoom', 'yanmega', 'zapdos', 'venomoth', 
			'escavalier', 'galvantula', 'lilligant', 'lanturn', 'moltres', 'rotommow', 'sharpedo', 'xatu', 'crustle', 
			'hariyama', 'hitmonlee', 'hitmonchan', 'hitmontop', 'omastar', 'poliwrath', 'scyther', 'whimsicott', 
			'basculin', 'beautifly', 'beedrill', 'alomomola', 'braviary', 'castform', 'carracosta', 'cherrim', 
			'corsola', 'drifblim', 'exeggutor', 'fearow', 'jumpluff', 'leafeon', 'lapras', 'leavanny', 'ledian', 
			'kricketune', 'solrock', 'lunatone', 'mantine', 'meganium', 'miltank', 'primeape', 'rapidash', 
			'rotomfan', 'rotomwash', 'simisear', 'stantler', 'sunflora', 'swoobat', 'tauros', 'bouffalant', 
			'tropius', 'vespiquen', 'victreebel', 'vileplume', 'wailord', 'zebstrika', 'celebi'
		];
		seasonalPokemonList = seasonalPokemonList.randomize();

		// Create the specific Pokémon for the user
		var md5 = require('MD5');
		var random = (197 * md5(toId(side.name)) + 346) % 649;
		// Find the Pokemon. Castform by default because lol
		var pokeName = 'castform';
		for (var p in this.data.Pokedex) {
			if (this.data.Pokedex[p].num === random) {
				pokeName = p;
				break;
			}
		}
		var yourPokemon = this.randomSet(this.getTemplate(pokeName), 0);
		var team = [];
		
		// Now, let's make the team!
		var date = Date();
		date = date.split(' ');
		var maxPokes = 5;
		var independents = {4:'braviary', 5:'jynx', 9:'miltank', 10:'gorebyss', 20:'vigoroth', 21:'mrmime', 23:'lucario', 26:'lapras', 28:'regirock', 31:'slowking'};
		if (parseInt(fecha[2]) in independents) {
			// July is full of independence days, so add a Pokémon to all teams accordingly if necessary
			maxPokes = 4;
			team.push(this.randomSet(this.getTemplate(independents[parseInt(fecha[2])]), 1));
		}
		for (var i=1; i<maxPokes; i++) {
			var pokemon = seasonalPokemonList[i];
			var template = this.getTemplate(pokemon);
			var set = this.randomSet(template, i);
			team.push(set);
		}
		team.push(yourPokemon);
		
		return team;
	}
};
