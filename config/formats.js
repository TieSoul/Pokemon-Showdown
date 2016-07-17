'use strict';

// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.js

exports.Formats = [

	// XY Singles
	///////////////////////////////////////////////////////////////////

	{
		name: "Random Battle",
		desc: ["Randomized teams of level-balanced Pok&eacute;mon with sets that are generated to be competitively viable."],
		section: "ORAS Singles",

		team: 'random',
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "Unrated Random Battle",
		section: "ORAS Singles",

		team: 'random',
		challengeShow: false,
		rated: false,
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "OU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3546114/\">OU Metagame Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/dex/xy/tags/ou/\">OU Banlist</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3571990/\">OU Viability Ranking</a>",
		],
		section: "ORAS Singles",

		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Swagger Clause', 'Baton Pass Clause'],
		banlist: ['Uber', 'Shadow Tag', 'Soul Dew'],
	},
	{
		name: "Ubers",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3522911/\">Ubers Metagame Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3535106/\">Ubers Viability Ranking</a>",
		],
		section: "ORAS Singles",

		ruleset: ['Pokemon', 'Standard', 'Swagger Clause', 'Team Preview', 'Mega Rayquaza Clause'],
		banlist: [],
	},
	{
		name: "UU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3573503/\">np: UU Stage 7.1</a>",
			"&bullet; <a href=\"https://www.smogon.com/dex/xy/tags/uu/\">UU Banlist</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3555277/\">UU Viability Ranking</a>",
		],
		section: "ORAS Singles",

		searchShow: false,
		ruleset: ['OU'],
		banlist: ['OU', 'BL', 'Drizzle', 'Drought'],
	},
	{
		name: "UU (suspect test)",
		section: "ORAS Singles",

		challengeShow: false,
		ruleset: ['UU'],
		banlist: ['Salamence'],
	},
	{
		name: "RU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3572877/\">np: RU Stage 17</a>",
			"&bullet; <a href=\"https://www.smogon.com/dex/xy/tags/ru/\">RU Banlist</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3558546/\">RU Viability Ranking</a>",
		],
		section: "ORAS Singles",

		ruleset: ['UU'],
		banlist: ['UU', 'BL2'],
	},
	{
		name: "NU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3576747/\">np: NU Stage 15</a>",
			"&bullet; <a href=\"https://www.smogon.com/dex/xy/tags/nu/\">NU Banlist</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3555650/\">NU Viability Ranking</a>",
		],
		section: "ORAS Singles",

		searchShow: false,
		ruleset: ['RU'],
		banlist: ['RU', 'BL3'],
	},
	{
		name: "NU (suspect test)",
		section: "ORAS Singles",

		challengeShow: false,
		ruleset: ['NU'],
		banlist: [],
	},
	{
		name: "PU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3575837/\">np: PU Stage 8</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3528743/\">PU Viability Ranking</a>",
		],
		section: "ORAS Singles",

		ruleset: ['NU'],
		banlist: ['NU', 'BL4', 'Chatter'],
	},
	{
		name: "LC",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3505710/\">LC Metagame Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3490462/\">LC Banlist</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3547566/\">LC Viability Ranking</a>",
		],
		section: "ORAS Singles",

		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
		banlist: ['LC Uber', 'Gligar', 'Misdreavus', 'Scyther', 'Sneasel', 'Tangela', 'Dragon Rage', 'Sonic Boom', 'Swagger'],
	},
	{
		name: "CAP",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3537407/\">CAP Metagame Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/dex/xy/formats/cap/\">CAP Banlist</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3545628/\">CAP Viability Ranking</a>",
		],
		section: "ORAS Singles",

		ruleset: ['OU'],
		banlist: ['Allow CAP'],
	},
	{
		name: "Battle Spot Singles",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3527960/\">Battle Spot Singles Metagame Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3554616/\">Battle Spot Singles Viability Ranking</a>",
		],
		section: "ORAS Singles",

		maxForcedLevel: 50,
		teamLength: {
			validate: [3, 6],
			battle: 3,
		},
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview'],
		requirePentagon: true,
	},
	{
		name: "Battle Spot Special 17",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3576896/\">Battle Spot Special 17</a>"],
		section: 'ORAS Singles',

		forcedLevel: 50,
		teamLength: {
			validate: [1, 6],
			battle: 1,
		},
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview'],
		banlist: ['Abomasite', 'Absolite', 'Aerodactylite', 'Aggronite', 'Alakazite', 'Altarianite', 'Ampharosite', 'Audinite',
			'Banettite', 'Beedrillite', 'Blastoisinite', 'Blazikenite', 'Cameruptite', 'Charizardite X', 'Charizardite Y', 'Diancite',
			'Galladite', 'Garchompite', 'Gardevoirite', 'Gengarite', 'Glalitite', 'Gyaradosite', 'Heracronite', 'Houndoominite',
			'Kangaskhanite', 'Latiasite', 'Latiosite', 'Lopunnite', 'Lucarionite', 'Manectite', 'Mawilite', 'Medichamite',
			'Metagrossite', 'Mewtwonite X', 'Mewtwonite Y', 'Pidgeotite', 'Pinsirite', 'Sablenite', 'Salamencite', 'Sceptilite',
			'Scizorite', 'Sharpedonite', 'Slowbronite', 'Steelixite', 'Swampertite', 'Tyranitarite', 'Venusaurite', 'Focus Sash',
		],
		requirePentagon: true,
	},
	{
		name: "Custom Game",
		section: "ORAS Singles",

		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},

	// XY Doubles
	///////////////////////////////////////////////////////////////////

	{
		name: "Random Doubles Battle",
		section: "ORAS Doubles",

		gameType: 'doubles',
		team: 'randomDoubles',
		ruleset: ['PotD', 'Pokemon', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "Doubles OU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3569913/\">np: Doubles OU Stage 4</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3498688/\">Doubles OU Banlist</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3535930/\">Doubles OU Viability Ranking</a>",
		],
		section: "ORAS Doubles",

		gameType: 'doubles',
		ruleset: ['Pokemon', 'Standard Doubles', 'Team Preview'],
		banlist: ['Arceus', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-White', 'Lugia', 'Mewtwo',
			'Palkia', 'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Xerneas', 'Yveltal', 'Zekrom', 'Salamence-Mega', 'Salamencite', 'Soul Dew', 'Dark Void',
			'Gravity ++ Grass Whistle', 'Gravity ++ Hypnosis', 'Gravity ++ Lovely Kiss', 'Gravity ++ Sing', 'Gravity ++ Sleep Powder', 'Gravity ++ Spore',
		],
	},
	{
		name: "Doubles Ubers",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3542746/\">Doubles Ubers</a>"],
		section: "ORAS Doubles",

		gameType: 'doubles',
		ruleset: ['Pokemon', 'Species Clause', 'Moody Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Evasion Abilities Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview'],
		banlist: ['Unreleased', 'Illegal', 'Dark Void'],
	},
	{
		name: "Doubles UU",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3542755/\">Doubles UU</a>"],
		section: "ORAS Doubles",

		gameType: 'doubles',
		ruleset: ['Doubles OU'],
		banlist: ['Aegislash', 'Amoonguss', 'Azumarill', 'Bisharp', 'Breloom', 'Camerupt-Mega', 'Cameruptite', 'Chandelure',
			'Charizard-Mega-Y', 'Charizardite Y', 'Conkeldurr', 'Cresselia', 'Diancie-Mega', 'Diancite', 'Dragonite', 'Ferrothorn',
			'Garchomp', 'Gardevoir-Mega', 'Gardevoirite', 'Gengar', 'Greninja', 'Gyarados', 'Heatran', 'Hoopa-Unbound', 'Hydreigon',
			'Jirachi', 'Kangaskhan-Mega', 'Kangaskhanite', 'Keldeo', 'Kyurem-Black', 'Landorus', 'Landorus-Therian', 'Latios', 'Ludicolo',
			'Mawile-Mega', 'Mawilite', 'Milotic', 'Politoed', 'Porygon2', 'Rotom-Wash', 'Scizor', 'Scrafty', 'Shaymin-Sky', 'Suicune', 'Sylveon',
			'Talonflame', 'Terrakion', 'Thundurus', 'Togekiss', 'Tyranitar', 'Venusaur', 'Volcanion', 'Weavile', 'Whimsicott', 'Zapdos',
		],
	},
	{
		name: "VGC 2016",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3558332/\">VGC 2016 Rules</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3558929/\">VGC 2016 Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3500650/\">VGC Learning Resources</a>",
		],
		section: "ORAS Doubles",

		gameType: 'doubles',
		maxForcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Pokemon', 'Species Clause', 'Nickname Clause', 'Item Clause', 'Team Preview', 'Cancel Mod'],
		banlist: ['Illegal', 'Unreleased', 'Mew', 'Celebi', 'Jirachi', 'Deoxys', 'Deoxys-Attack', 'Deoxys-Defense', 'Deoxys-Speed', 'Phione', 'Manaphy',
			'Darkrai', 'Shaymin', 'Shaymin-Sky', 'Arceus', 'Victini', 'Keldeo', 'Meloetta', 'Genesect', 'Diancie', 'Hoopa', 'Hoopa-Unbound', 'Volcanion', 'Soul Dew',
		],
		requirePentagon: true,
		onValidateTeam: function (team) {
			const legends = {'Mewtwo':1, 'Lugia':1, 'Ho-Oh':1, 'Kyogre':1, 'Groudon':1, 'Rayquaza':1, 'Dialga':1, 'Palkia':1, 'Giratina':1, 'Reshiram':1, 'Zekrom':1, 'Kyurem':1, 'Xerneas':1, 'Yveltal':1, 'Zygarde':1};
			let n = 0;
			for (let i = 0; i < team.length; i++) {
				let template = this.getTemplate(team[i].species).baseSpecies;
				if (template in legends) n++;
				if (n > 2) return ["You can only use up to two legendary Pok\u00E9mon."];
			}
		},
	},
	{
		name: "Battle Spot Doubles",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3524352/\">VGC 2015 Rules</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3530547/\">VGC 2015 Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3526666/\">Sample Teams for VGC 2015</a>",
		],
		section: "ORAS Doubles",

		gameType: 'doubles',
		maxForcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview'],
		requirePentagon: true,
	},
	{
		name: "Sinnoh Classic",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3575910/\">Sinnoh Classic</a>"],
		section: "ORAS Doubles",

		gameType: 'doubles',
		maxForcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview'],
		banlist: ['Dragonite', 'Tyranitar', 'Heatran'],
		onValidateSet: function (set) {
			let problems = [];
			let template = this.getTemplate(set.species || set.name);
			if (template.num > 493) {
				problems.push(template.species + " is banned by Sinnoh Classic.");
			}
			let item = this.getItem(set.item);
			if (item.megaStone) {
				problems.push(item.name + " is banned by Sinnoh Classic.");
			}
			return problems;
		},
	},
	{
		name: "Doubles Custom Game",
		section: "ORAS Doubles",

		gameType: 'doubles',
		searchShow: false,
		canUseRandomTeam: true,
		maxLevel: 9999,
		defaultLevel: 100,
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},

	// XY Triples
	///////////////////////////////////////////////////////////////////

	{
		name: "Random Triples Battle",
		section: "ORAS Triples",

		gameType: 'triples',
		team: 'randomDoubles',
		ruleset: ['PotD', 'Pokemon', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "Smogon Triples",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3511522/\">Smogon Triples</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3540390/\">Smogon Triples Viability Ranking</a>",
		],
		section: "ORAS Triples",

		gameType: 'triples',
		ruleset: ['Pokemon', 'Species Clause', 'OHKO Clause', 'Moody Clause', 'Evasion Moves Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview'],
		banlist: ['Illegal', 'Unreleased', 'Arceus', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-White',
			'Lugia', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Xerneas', 'Yveltal', 'Zekrom',
			'Soul Dew', 'Dark Void', 'Perish Song',
		],
	},
	{
		name: "Smogon Triples Ubers",
		section: "ORAS Triples",

		gameType: 'triples',
		ruleset: ['Pokemon', 'Species Clause', 'OHKO Clause', 'Moody Clause', 'Evasion Moves Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview'],
		banlist: ['Illegal', 'Unreleased', 'Dark Void', 'Perish Song'],
	},
	{
		name: "Battle Spot Triples",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3533914/\">Battle Spot Triples Metagame Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3549201/\">Battle Spot Triples Viability Ranking</a>",
		],
		section: "ORAS Triples",

		gameType: 'triples',
		maxForcedLevel: 50,
		teamLength: {
			validate: [6, 6],
		},
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview'],
		requirePentagon: true,
	},
	{
		name: "Uber Triples",
		desc: [
			"Uber Triples",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3511522/\">Like Smogon Triples but no Uber bans.</a>",
		],
		section: "ORAS Triples",

		gameType: 'triples',
		ruleset: ['Pokemon', 'Species Clause', 'OHKO Clause', 'Moody Clause', 'Evasion Moves Clause', 'Mega Rayquaza Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview'],
		banlist: ['Illegal', 'Unreleased', 'Dark Void', 'Perish Song'],
	},
	{
		name: "Triples Hackmons Cup",
		section: "ORAS Triples",

		gameType: 'triples',
		team: 'randomHC',
		searchShow: false,
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "Triples Custom Game",
		section: "ORAS Triples",

		gameType: 'triples',
		searchShow: false,
		canUseRandomTeam: true,
		maxLevel: 9999,
		defaultLevel: 100,
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},

	// Other Metagames
	///////////////////////////////////////////////////////////////////

	{
		name: "Acid Rain",
		section: "OM of the Week",
		column: 2,

		mod: 'acidrain',
		onBegin: function () {
			this.setWeather('raindance');
			delete this.weatherData.duration;
			this.add('-message', "Eh, close enough.");
		},
		ruleset: ['OU'],
		banlist: ['Weather Ball', 'Castform'],
	},
	{
		name: "Old School Machops",
		section: "OM of the Week",

		ruleset: ['Ubers'],
		banlist: [],
		onValidateSet: function (set) {
			let moves = set.moves;
			let problems = [];
			let name = set.name || set.species;
			for (let i = 0; i < moves.length; i++) {
				let move = this.getMove(moves[i]);
				if (move.gen !== 1 && move.id !== 'hiddenpower') {
					problems.push(name + "'s move " + set.moves[i] + " is banned.");
				}
			}
			return problems;
		},
	},
	{
		name: "5 Star Battalion",
		section: "OM of the Week",

		ruleset: ['Ubers'],
		banlist: ['Allow More Moves'],
		onValidateSet: function (set) {
			if (set.moves && set.moves.length > 5) {
				return [(set.name || set.species) + ' has more than five moves.'];
			}
		},
	},
	{
		name: "Extreme Tier Shift",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3540047/\">Extreme Tier Shift</a>"],
		section: "OM of the Month",
		column: 2,

		mod: 'extremets',
		ruleset: ['Ubers', 'Baton Pass Clause'],
		banlist: ['Eviolite'],
	},
	{
		name: "Type Reflector",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3567348/\">Type Reflector</a>"],
		section: "OM of the Month",

		ruleset: ['OU'],
		banlist: ['Shedinja'],
		onBegin: function () {
			for (let i = 0; i < this.sides.length; i++) {
				this.sides[i].pokemon[0].isReflector = true;
				this.sides[i].reflectedType = this.sides[i].pokemon[0].types[0];
			}
		},
		onSwitchInPriority: 2,
		onSwitchIn: function (pokemon) {
			if (pokemon.isReflector) return;
			let type = pokemon.side.reflectedType;
			if (pokemon.types.indexOf(type) > 0 || pokemon.types.length === 1 && pokemon.types[0] === type) return;
			if (pokemon.template.isMega && pokemon.types.join() !== this.getTemplate(pokemon.template.baseSpecies).types.join()) return;
			if (pokemon.types.length > 1 && pokemon.types[0] === type) {
				pokemon.setType(type);
			} else {
				pokemon.setType([pokemon.types[0], type]);
			}
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), null);
		},
		onAfterMega: function (pokemon) {
			if (pokemon.isReflector) return;
			let type = pokemon.side.reflectedType;
			if (pokemon.types.indexOf(type) > 0 || pokemon.types.length === 1 && pokemon.types[0] === type) return;
			if (pokemon.types.join() !== this.getTemplate(pokemon.template.baseSpecies).types.join()) return;
			if (pokemon.types.length > 1 && pokemon.types[0] === type) {
				pokemon.setType(type);
			} else {
				pokemon.setType([pokemon.types[0], type]);
			}
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), null);
		},
	},
	{
		name: "[Seasonal] Super Staff Bros. Melee",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3491902/\">Seasonal Ladder</a>"],
		section: "OM of the Month",

		mod: 'seasonal',
		team: 'randomSeasonalMelee',
		ruleset: ['Sleep Clause Mod', 'Freeze Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
		onBegin: function () {
			this.add("raw|Super Staff Bros. <b>MELEEEEEEEEEEEEEE</b>!!");
			this.add('message', "SURVIVAL! GET READY FOR THE NEXT BATTLE!");

			let globalRenamedMoves = {};
			let customRenamedMoves = {};

			let allPokemon = this.p1.pokemon.concat(this.p2.pokemon);
			for (let i = 0, len = allPokemon.length; i < len; i++) {
				let pokemon = allPokemon[i];
				let last = pokemon.moves.length - 1;
				if (pokemon.moves[last]) {
					pokemon.moves[last] = toId(pokemon.set.signatureMove);
					pokemon.moveset[last].move = pokemon.set.signatureMove;
					pokemon.baseMoveset[last].move = pokemon.set.signatureMove;
				}
				for (let j = 0; j < pokemon.moveset.length; j++) {
					let moveData = pokemon.moveset[j];
					if (globalRenamedMoves[moveData.id]) {
						pokemon.moves[j] = toId(pokemon.set.signatureMove);
						moveData.move = globalRenamedMoves[moveData.id];
						pokemon.baseMoveset[j].move = globalRenamedMoves[moveData.id];
					}

					let customRenamedSet = customRenamedMoves[toId(pokemon.name)];
					if (customRenamedSet && customRenamedSet[moveData.id]) {
						pokemon.moves[j] = toId(pokemon.set.signatureMove);
						moveData.move = customRenamedSet[moveData.id];
						pokemon.baseMoveset[j].move = customRenamedSet[moveData.id];
					}
				}
			}
		},
		// Here we add some flavour or design immunities.
		onImmunity: function (type, pokemon) {
			if (toId(pokemon.name) === 'juanma' && type === 'Fire') {
				this.add('-message', "Did you think fire would stop __him__? You **fool**!");
				return false;
			}
		},
		onNegateImmunity: function (pokemon, type) {
			if (pokemon.volatiles['flipside']) return false;
			const foes = pokemon.side.foe.active;
			if (foes.length && foes[0].volatiles['samuraijack'] && pokemon.hasType('Dark') && type === 'Psychic') return false;
		},
		onEffectiveness: function (typeMod, target, type, move) {
			if (!target.volatiles['flipside']) return;
			if (move && move.id === 'retreat') return;
			if (move && move.id === 'freezedry' && type === 'Water') return;
			if (move && !this.getImmunity(move, type)) return 1;
			return -typeMod;
		},
		// Hacks for megas changed abilities. This allow for their changed abilities.
		onUpdate: function (pokemon) {
			let name = toId(pokemon.name);
			if (pokemon.template.isMega) {
				if (name === 'andy' && pokemon.getAbility().id === 'magicbounce') {
					pokemon.setAbility('adaptability');
					this.add('-ability', pokemon, 'Adaptability');
				}
				if (name === 'reisen' && pokemon.getAbility().id === 'hugepower') {
					pokemon.setAbility('adaptability');
					this.add('-ability', pokemon, 'Tough Claws');
				}
				if (name === 'crestfall' && pokemon.getAbility().id === 'magicbounce') {
					pokemon.setAbility('simple');
					this.add('-ability', pokemon, 'Simple');
				}
				if (name === 'dreameatergengar' && pokemon.getAbility().id === 'shadowtag') {
					pokemon.setAbility('infiltrator');
					this.add('-ability', pokemon, 'Infiltrator');
				}
				if (name === 'overneat' && pokemon.getAbility().id === 'speedboost') {
					pokemon.setAbility('noguard');
					this.add('-ability', pokemon, 'No Guard');
				}
				if (name === 'skitty' && pokemon.getAbility().id === 'healer') {
					pokemon.setAbility('shedskin');
					this.add('-ability', pokemon, 'Shed Skin');
				}
				if (name === 'theimmortal' && pokemon.getAbility().id === 'megalauncher') {
					pokemon.setAbility('cloudnine');
				}
			}
			if (!this.shownTip) {
				this.add('raw|<div class=\"broadcast-green\">Huh? But what do all these weird moves do??<br><b>Protip: Refer to the <a href="https://github.com/Zarel/Pokemon-Showdown/blob/master/mods/seasonal/README.md">PLAYER\'S MANUAL</a>!</b></div>');
				this.shownTip = true;
			}
		},
		// Here we treat many things, read comments inside for information.
		onSwitchInPriority: 1,
		onSwitchIn: function (pokemon) {
			let name = toId(pokemon.illusion ? pokemon.illusion.name : pokemon.name);
			// Wonder Guard is available, but it curses you.
			if (pokemon.getAbility().id === 'wonderguard' && pokemon.baseTemplate.baseSpecies !== 'Shedinja' && pokemon.baseTemplate.baseSpecies !== 'Kakuna') {
				pokemon.addVolatile('curse', pokemon);
				this.add('-message', pokemon.name + "'s Wonder Guard has cursed it!");
			}

			// Add here more hacky stuff for mega abilities.
			// This happens when the mega switches in, as opposed to mega-evolving on the turn.
			if (pokemon.template.isMega) {
				if (name === 'andy' && pokemon.getAbility().id === 'magicbounce') {
					pokemon.setAbility('adaptability');
					this.add('-ability', pokemon, 'Adaptability');
				}
				if (name === 'reisen' && pokemon.getAbility().id === 'hugepower') {
					pokemon.setAbility('adaptability');
					this.add('-ability', pokemon, 'Tough Claws');
				}
				if (name === 'crestfall' && pokemon.getAbility().id === 'magicbounce') {
					pokemon.setAbility('simple');
					this.add('-ability', pokemon, 'Simple');
				}
				if (name === 'dreameatergengar' && pokemon.getAbility().id === 'shadowtag') {
					pokemon.setAbility('infiltrator');
					this.add('-ability', pokemon, 'Infiltrator');
				}
				if (name === 'overneat' && pokemon.getAbility().id === 'speedboost') {
					pokemon.setAbility('noguard');
					this.add('-ability', pokemon, 'No Guard');
				}
				if (name === 'skitty' && pokemon.getAbility().id === 'healer') {
					pokemon.setAbility('shedskin');
					this.add('-ability', pokemon, 'Shed Skin');
				}
				if (name === 'theimmortal' && pokemon.getAbility().id === 'megalauncher') {
					pokemon.setAbility('cloudnine');
				}
			} else {
				// Bypass one mega limit.
				pokemon.canMegaEvo = this.canMegaEvo(pokemon);
			}

			// Innate effects.
			if (name === 'ascriptmaster') {
				pokemon.addVolatile('ascriptinnate', pokemon);
			}
			if (name === 'atomicllamas') {
				pokemon.addVolatile('baddreamsinnate', pokemon);
			}
			if (name === 'blastchance') {
				pokemon.addVolatile('flipside', pokemon);
			}
			if (name === 'bondie') {
				pokemon.addVolatile('crabstance', pokemon);
			}
			if (name === 'clefairy') {
				pokemon.addVolatile('coldsteel', pokemon);
			}
			if (name === 'duck') {
				pokemon.addVolatile('firstblood', pokemon);
			}
			if (name === 'eeveegeneral') {
				this.add('detailschange', pokemon, pokemon.details); //run mega evo animation
				this.add('-mega', pokemon, 'Eevee', null);
				for (let i = 0; i < pokemon.stats.length; i++) {
					pokemon.stats[i] += 50;
				}
			}
			if (name === 'formerhope') {
				pokemon.addVolatile('cursedbodyinnate', pokemon);
			}
			if (name === 'galbia' || name === 'aurora') {
				this.setWeather('sandstorm');
			}
			if (name === 'rodan') {
				pokemon.addVolatile('gonnamakeyousweat', pokemon);
			}
			if (name === 'giagantic') {
				pokemon.addVolatile('deltastreaminnate', pokemon);
			}
			if (name === 'hashtag') {
				this.boost({spe:1}, pokemon, pokemon, 'innate ability');
			}
			if (name === 'haund') {
				pokemon.addVolatile('prodigy', pokemon);
			}
			if (name === 'innovamania' && !pokemon.illusion) {
				this.boost({atk:6, def:6, spa:6, spd:6, spe:6, accuracy:6}, pokemon, pokemon, 'divine grace');
			}
			if (name === 'jackhiggins') {
				this.setWeather('sunnyday');
			}
			if (name === 'lemonade') {
				pokemon.addVolatile('adaptabilityinnate', pokemon);
			}
			if (name === 'manu11') {
				pokemon.addVolatile('arachnophobia', pokemon);
			}
			if (name === 'marshmallon') {
				this.boost({def: 1}, pokemon, pokemon, 'fur coat innate');
			}
			if (name === 'mizuhime' || name === 'kalalokki' || name === 'sweep') {
				this.setWeather('raindance');
			}
			if (name === 'nv') {
				pokemon.addVolatile('cuteness', pokemon);
			}
			if (name === 'pikachuun') {
				this.boost({spe: 1}, pokemon, pokemon, 'Reisen Cosplay');
			}
			if (name === 'qtrx') {
				pokemon.addVolatile('qtrxinnate', pokemon);
			}
			if (name === 'raseri') {
				this.useMove('hypnosis', pokemon);
			}
			if (name === 'rssp1') {
				pokemon.addVolatile('speedboostinnate', pokemon);
			}
			if (name === 'scythernoswiping') {
				pokemon.addVolatile('mountaineerinnate', pokemon);
			}
			if (name === 'sigilyph') {
				pokemon.addVolatile('samuraijack', pokemon);
			}
			if (name === 'sonired') {
				this.boost({def: -1, spd: -1, atk: 1, spe: 1}, pokemon, pokemon, 'Weak Skin');
			}
			if (name === 'snobalt') {
				pokemon.addVolatile('amityabsorb', pokemon);
			}
			if (name === 'spacebass') {
				pokemon.addVolatile('badtrip', pokemon);
			}
			if (name === 'sparktrain') {
				pokemon.addVolatile('refrigerateinnate', pokemon);
			}
			if (name === 'specsmegabeedrill') {
				pokemon.addVolatile('weed', pokemon);
			}
			if (name === 'starmei') {
				this.useMove('cosmicpower', pokemon);
			}
			if (name === 'talkingtree') {
				this.useMove('synthesis', pokemon);
				this.useMove('bulkup', pokemon);
			}
			if (name === 'teremiare') {
				pokemon.addVolatile('coinflip', pokemon);
			}
			if (name === 'trickster' || name === 'blitzamirin') {
				let target = pokemon.battle[pokemon.side.id === 'p1' ? 'p2' : 'p1'].active[0];
				let targetBoosts = {};
				let sourceBoosts = {};
				for (let i in target.boosts) {
					targetBoosts[i] = target.boosts[i];
					sourceBoosts[i] = pokemon.boosts[i];
				}
				target.setBoost(sourceBoosts);
				pokemon.setBoost(targetBoosts);
				this.add('-swapboost', pokemon, target);
			}
			if (name === 'unfixable') {
				pokemon.addVolatile('ironbarbsinnate', pokemon);
			}
			if (name === 'urkerab') {
				pokemon.addVolatile('focusenergy', pokemon);
				this.useMove('magnetrise', pokemon);
			}
			if (name === 'uselesstrainer') {
				pokemon.addVolatile('ninja', pokemon);
			}
			if (name === 'winry') {
				pokemon.addVolatile('hellacute', pokemon);
			}

			// Edgy switch-in sentences go here.
			// Sentences vary in style and how they are presented, so each Pokémon has its own way of sending them.
			let sentences = [];
			let sentence = '';

			if (name === 'acast') {
				this.add('c|%Acast|__A wild Castform appeared!__');
			}
			if (name === 'ace') {
				this.add('c|@Ace|Lmaonade');
			}
			if (name === 'aelita') {
				this.add('c|%Aelita|Transfer, Aelita. Scanner, Aelita. Virtualization!');
			}
			if (name === 'ajhockeystar') {
				this.add('c|+ajhockeystar|Here comes the greatest hockey player alive!');
			}
			if (name === 'albacore') {
				this.add('c|@Albacore|do I have to?');
			}
			if (name === 'albert') {
				this.add('c|+Albert|Art is risk.');
			}
			if (name === 'always') {
				sentence = (pokemon.side.foe.active.length && pokemon.side.foe.active[0].hp ? pokemon.side.foe.active[0].name : "... ohh nobody's there...");
				this.add('c|+Always|Oh it\'s ' + sentence);
			}
			if (name === 'am') {
				this.add('c|+AM|Lucky and Bad');
			}
			if (name === 'andy') {
				this.add('c|%Andy|:I');
			}
			if (name === 'antemortem') {
				this.add('c|&antemortem|I Am Here To Oppress Users');
			}
			if (name === 'anttya') {
				this.add('c|+Anttya|Those crits didn\'t even matter');
			}
			if (name === 'anty') {
				this.add('c|+Anty|mhm');
			}
			if (name === 'articuno') {
				this.add('c|%Articuno|Abolish the patriarchy!');
			}
			if (name === 'ascriptmaster') {
				this.add("c|@Ascriptmaster|It's time for a hero to take the stage!");
			}
			if (name === 'astara') {
				this.add('c|%Ast☆arA|I\'d rather take a nap, I hope you won\'t be a petilil shit, Eat some rare candies and get on my level.');
			}
			if (name === 'asty') {
				this.add('c|@Asty|Top kek :^)');
			}
			if (name === 'atomicllamas') {
				this.add('c|&atomicllamas|(celebrate)(dog)(celebrate)');
			}
			if (name === 'aurora') {
				this.add('c|@Aurora|Best of luck to all competitors!');
			}
			if (name === 'reisen') {
				this.add('c|%Reisen|Fite me irl bruh.');
			}
			if (name === 'beowulf') {
				this.add('c|@Beowulf|Grovel peasant, you are in the presence of the RNGesus');
			}
			if (name === 'biggie') {
				sentences = ["Now I'm in the limelight cause I rhyme tight", "HAPPY FEET! WOMBO COMBO!", "You finna mess around and get dunked on"];
				this.add('c|@biggie|' + sentences[this.random(3)]);
			}
			if (name === 'blastchance') {
				this.add("c|+Blast Chance|MAN BALAMAR");
			}
			if (name === 'blitzamirin') {
				this.add('c|@Blitzamirin|How Can Mirrors Be Real If Our Eyes Aren\'t Real? ╰( ~ ◕ ᗜ ◕ ~ )੭━☆ﾟ.*･｡ﾟ');
			}
			if (name === 'bludz') {
				this.add('c|+bludz|420 blaze it');
			}
			if (name === 'bondie') {
				this.add('c|+Bondie|__(\\/) snip snip (\\/)__');
			}
			if (name === 'bottt') {
				this.add('c|boTTT|Beep, boop');
			}
			if (name === 'brandon') {
				this.add("c|+Brrandon|Life's too short to take it seriously ALL the time.");
			}
			if (name === 'bumbadadabum') {
				this.add('c|@bumbadadabum|Time for card games on motorcycles!');
				if (pokemon.side.foe.active.length && pokemon.side.foe.active[0].name === 'Scotteh') this.add('c|@bumbadadabum|Also, fuck you Scotteh');
			}
			if (name === 'bummer') {
				this.add("c|&Bummer|Oh hi.");
			}
			if (name === 'chaos') {
				this.add("c|~chaos|I always win");
			}
			if (name === 'ciran') {
				this.add("c|+Ciran|You called?");
			}
			if (name === 'clefairy') {
				this.add('c|+Clefairy|google "dj clefairyfreak" now');
			}
			if (name === 'coolstorybrobat') {
				sentence = [
					"Time to GET SLAYED", "BRUH!", "Ahem! Gentlemen...", "I spent 6 months training in the mountains for this day!",
					"Shoutout to all the pear...",
				][this.random(5)];
				this.add('c|@CoolStoryBrobat|' + sentence);
			}
			if (name === 'crestfall') {
				this.add('c|%Crestfall|To say that we\'re in love is dangerous');
			}
			if (name === 'deathonwings') {
				this.add('c|+Death on Wings|rof');
			}
			if (name === 'dirpz') {
				this.add('c|+Dirpz|IT\'S A WATER/FAIRY TYPE!!11!');
			}
			if (name === 'dmt') {
				this.add('c|+DMT|DMT');
			}
			if (name === 'dreameatergengar') {
				this.add('c|+Dream Eater Gengar|Goodnight sweet prince.');
			}
			if (name === 'duck') {
				this.add('c|@Duck|Don\'t duck with me!');
			}
			if (name === 'e4flint') {
				this.add('c|+E4 Flint|hf lul');
			}
			if (name === 'eeveegeneral') {
				sentences = ['yo', 'anyone seen goku?'];
				this.add('c|~Eevee General|' + sentences[this.random(2)]);
			}
			if (name === 'eyan') {
				this.add('c|@Eyan|░░░░░░░░▄▄▄▀▀▀▄▄███▄░░░░░░░░░░░░░░░░░');
				this.add('c|@Eyan|░░░░░▄▀▀░░░░░░░▐░▀██▌░░░░░░░░░░░░░░░░');
				this.add('c|@Eyan|░░░▄▀░░░░▄▄███░▌▀▀░▀█░░░░░░░░░░░░░░░░');
				this.add('c|@Eyan|░░▄█░░▄▀▀▒▒▒▒▒▄▐░░░░█▌░░░░░░░░░░░░░░░ ');
				this.add('c|@Eyan|░▐█▀▄▀▄▄▄▄▀▀▀▀▌░░░░░▐█▄░░░░░░░░░░░░░░');
				this.add('c|@Eyan|░▌▄▄▀▀░░░░░░░░▌░░░░▄███████▄░░░░░░░░░');
				this.add('c|@Eyan|░░░░░░░░░░░░░▐░░░░▐███████████▄░░░░░░');
				this.add('c|@Eyan|░░░░░le░░░░░░░▐░░░░▐█████████████▄░░░');
				this.add('c|@Eyan|░░░░toucan░░░░░░▀▄░░░▐██████████████▄');
				this.add('c|@Eyan|░░░░░░has░░░░░░░░▀▄▄████████████████▄');
				this.add('c|@Eyan|░░░░░arrived░░░░░░░░░░░░█▀██████░░░░░');
				this.add('c|@Eyan|WELCOME TO COMPETITIVE TOUCANNING');
			}
			if (name === 'feliburn') {
				this.add('c|@Feliburn|you don\'t go hand to hand with a fighter noob');
			}
			if (name === 'fireburn') {
				this.add('c|+Fireburn|:V');
			}
			if (name === 'flyingkebab') {
				this.add("c|+Flying Kebab|Kebab > Pizza");
			}
			if (name === 'formerhope') {
				this.add('c|@Former Hope|I have Hope');
			}
			if (name === 'freeroamer') {
				this.add('c|%Freeroamer|lol this is a wrap');
			}
			if (name === 'frysinger') {
				this.add("c|+Frysinger|Nice boosts kid.");
			}
			if (name === 'fx') {
				this.add("c|+f(x)|love is 4 wawawawawawawalls");
			}
			if (name === 'galbia') {
				this.add('c|@galbia|(dog)');
			}
			if (name === 'galom') {
				this.add('c|+Galom|To the end.');
			}
			if (name === 'rodan') { // don't delete
				this.add("c|+RODAN|Here I Come, Rougher Than The Rest of 'Em.");
			}
			if (name === 'geoffbruedly') {
				this.add("c|%GeoffBruedly|FOR WINRY");
			}
			if (name === 'giagantic') {
				this.add("c|%Giagantic|e.e");
			}
			if (name === 'golui') {
				this.add("c|+Golui|Golly gee");
			}
			if (name === 'goodmorningespeon') {
				this.add("c|+GoodMorningEspeon|type /part to continue participating in this battle :)");
			}
			if (name === 'grimauxiliatrix') {
				this.add("c|%grimAuxiliatrix|ᕕ( ᐛ )ᕗ");
			}
			if (name === 'halite') {
				this.add('c|@Halite|You’re gonna get haxxed kid :^)');
			}
			if (name === 'hannah') {
				this.add('c|+Hannahh|♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥');
			}
			if (name === 'hashtag') {
				this.add("c|#Hashtag|hey opponent, you get 5 hashtag points if you forfeit right now ;}");
			}
			if (name === 'haund') {
				this.add('c|%Haund|le balanced normal flying bird has arrived');
			}
			if (name === 'healndeal') {
				this.add('c|+HeaLnDeaL|screw clerics');
			}
			if (name === 'himynamesl') {
				this.add('c|@HiMyNamesL|There’s no such thing as winning or losing. There is won and there is lost, there is victory and defeat. There are absolutes. Everything in between is still left to fight for.');
				this.add('c|@HiMyNamesL|' + pokemon.side.foe.name + ' will have won only when there is no one left to stand against them. Until then, there is only the struggle, because tides do what tides do – they turn.');
			}
			if (name === 'hippopotas') {
				this.add('-message', '@Hippopotas\'s Sand Stream whipped up a sandstorm!');
			}
			if (name === 'hollywood') {
				this.add('c|+hollywood|Kappa');
			}
			if (name === 'ih8ih8sn0w') {
				this.add('c|+ih8ih8sn0w|*sips tea*');
			}
			if (name === 'imanalt') {
				this.add('c|+imanalt|muh bulk');
			}
			if (name === 'imas234') {
				this.add('c|@imas234|hlo');
			}
			if (name === 'innovamania') {
				sentences = ['Don\'t take this seriously', 'These Black Glasses sure look cool', 'Ready for some fun?( ͡° ͜ʖ ͡°)', '( ͡° ͜ʖ ͡°'];
				this.add('c|@innovamania|' + sentences[this.random(4)]);
			}
			if (name === 'iplaytennislol') {
				this.add('c|%iplaytennislol|KACAW');
			}
			if (name === 'iyarito') {
				this.add('c|+Iyarito|Welp');
			}
			if (name === 'jackhiggins') {
				this.add("c|+Jack Higgins|Ciran was right, fun deserved to be banned");
			}
			if (name === 'jasmine') {
				this.add("c|+Jasmine|I'm still relevant!");
			}
			if (name === 'jdarden') {
				this.add('c|@jdarden|Did someone call for some BALK?');
			}
			if (name === 'jetpack') {
				this.add('c|+Jetpack|You\'ve met with a terrible fate, haven\'t you?');
			}
			if (name === 'joim') {
				let dice = this.random(8);
				if (dice === 1) {
					this.add('c|~Joim|░░░░░░░░░░░░▄▐');
					this.add('c|~Joim|░░░░░░▄▄▄░░▄██▄');
					this.add('c|~Joim|░░░░░▐▀█▀▌░░░░▀█▄');
					this.add('c|~Joim|░░░░░▐█▄█▌░░░░░░▀█▄');
					this.add('c|~Joim|░░░░░░▀▄▀░░░▄▄▄▄▄▀▀');
					this.add('c|~Joim|░░░░▄▄▄██▀▀▀▀');
					this.add('c|~Joim|░░░█▀▄▄▄█░▀▀');
					this.add('c|~Joim|░░░▌░▄▄▄▐▌▀▀▀');
					this.add('c|~Joim|▄░▐░░░▄▄░█░▀▀ U HAVE BEEN SPOOKED');
					this.add('c|~Joim|▀█▌░░░▄░▀█▀░▀');
					this.add('c|~Joim|░░░░░░░▄▄▐▌▄▄ BY THE');
					this.add('c|~Joim|░░░░░░░▀███▀█░▄');
					this.add('c|~Joim|░░░░░░▐▌▀▄▀▄▀▐▄ SPOOKY SKILENTON');
					this.add('c|~Joim|░░░░░░▐▀░░░░░░▐▌');
					this.add('c|~Joim|░░░░░░█░░░░░░░░█');
					this.add('c|~Joim|░░░░░▐▌░░░░░░░░░█');
					this.add('c|~Joim|░░░░░█░░░░░░░░░░▐▌ SEND THIS TO 7 PPL OR SKELINTONS WILL EAT YOU');
				} else {
					sentences = [
						"Finally a good reason to punch a teenager in the face!", "WUBBA LUBBA DUB DUB",
						"``So here we are again, it's always such a pleasure.``", "My ex-wife still misses me, BUT HER AIM IS GETTING BETTER!",
						"A man chooses, a slave obeys.", "You're gonna have a bad time.", "Would you kindly let me win?",
						"I'm sorry, but I only enjoy vintage memes from the early 00's.",
					];
					sentence = sentences[this.random(8)];
					this.add('c|~Joim|' + sentence);
				}
			}
			if (name === 'juanma') {
				this.add("c|+Juanma|Okay, well, sometimes, science is more art than science, " + pokemon.side.name + ". A lot of people don't get that.");
			}
			if (name === 'kalalokki') {
				this.add('c|+Kalalokki|(•_•)');
				this.add('c|+Kalalokki|( •_•)>⌐■-■');
				this.add('c|+Kalalokki|(⌐■_■)');
			}
			if (name === 'kidwizard') {
				this.add('c|+Kid Wizard|Eevee General room mod me.');
			}
			if (name === 'layell') {
				this.add('c|@Layell|Enter stage left');
			}
			if (name === 'legitimateusername') {
				sentence = ["This isn't my fault.", "I'm not sorry."][this.random(2)];
				this.add('c|@LegitimateUsername|``' + sentence + '``');
			}
			if (name === 'lemonade') {
				this.add('c|+Lemonade|Pasta');
			}
			if (name === 'level51') {
				this.add('c|@Level 51|n_n!');
			}
			if (name === 'lj') {
				this.add('c|%LJDarkrai|Powerfulll');
			}
			if (name === 'lyto') {
				sentences = ["This is divine retribution!", "I will handle this myself!", "Let battle commence!"];
				this.add('c|@Lyto|' + sentences[this.random(3)]);
			}
			if (name === 'macle') {
				this.add("c|+macle|Follow the Frog Blog");
			}
			if (name === 'manu11') {
				this.add("c|@manu 11|/me is pet by ihateyourpancreas");
			}
			if (name === 'marshmallon') {
				this.add("c|%Marshmallon|Marshtomb be like");
				this.add("c|%Marshmallon|- He sees you when you're sleeping -");
				this.add("c|%Marshmallon|- He knows when you're awake -");
				this.add("c|%Marshmallon|- He knows if you've been bad or good -");
				this.add("c|%Marshmallon|- So be good for goodness sake -");
			}
			if (name === 'mattl') {
				this.add('c|+MattL|If you strike me down, I shall become more powerful than you can possibly imagine.');
			}
			if (name === 'mcmeghan') {
				this.add("c|&McMeghan|A Game of Odds");
			}
			if (name === 'megazard') {
				this.add('c|+Megazard|New tricks');
			}
			if (name === 'mizuhime') {
				this.add('c|+Mizuhime|Thou Shalt Double Laser From The Edge');
			}
			if (name === 'nv') {
				this.add('c|+nv|Who tf is nv?');
			}
			if (name === 'omegaxis') {
				this.add('c|+Omega-Xis|lol this isn’t even my final form');
			}
			if (name === 'orday') {
				this.add('c|%Orda-Y|❄');
			}
			if (name === 'overneat') {
				this.add('c|+Overneat|tsk, tsk, is going to be funny');
			}
			if (name === 'paradise') {
				this.add('c|%Paradise~|I sexually identify as a hazard setter');
			}
			if (name === 'pikachuun') {
				sentences = ['Reisen is best waifu', 'Hey look I coded myself into the game', 'sup (\'.w.\')'];
				this.add('c|+Pikachuun|' + sentences[this.random(3)]);
			}
			if (name === 'pluviometer') {
				this.add('c|+pluviometer|p^2laceholder');
			}
			if (name === 'qtrx') {
				sentences = ["cutie are ex", "q-trix", "quarters", "cute T-rex", "Qatari", "random letters", "spammy letters", "asgdf"];
				this.add("c|@qtrx|omg DONT call me '" + sentences[this.random(8)] + "' pls respect my name its very special!!1!");
			}
			if (name === 'quitequiet') {
				this.add("c|@Quite Quiet|I'll give it a shot.");
			}
			if (name === 'raseri') {
				this.add('c|&Raseri|gg');
			}
			if (name === 'raven') {
				this.add('c|&Raven|Are you ready? Then let the challenge... Begin!');
			}
			if (name === 'rekeri') {
				this.add('c|@rekeri|Get Rekeri\'d :]');
			}
			if (name === 'rosiethevenusaur') {
				sentences = ['!dt party', 'Are you Wifi whitelisted?', 'Read the roomintro!'];
				this.add('c|@RosieTheVenusaur|' + sentences[this.random(3)]);
			}
			if (name === 'rssp1') {
				this.add('c|+rssp1|Witness the power of the almighty Rufflet!');
			}
			if (name === 'sailorcosmos') {
				this.add("c|+SailorCosmos|Cosmos Prism Power Make Up!");
			}
			if (name === 'scotteh') {
				this.add('c|&Scotteh|─────▄▄████▀█▄');
				this.add('c|&Scotteh|───▄██████████████████▄');
				if (pokemon.side.foe.active.length && pokemon.side.foe.active[0].name === 'bumbadadabum') this.add('c|@bumbadadabum|Fuck you Scotteh');
				this.add('c|&Scotteh|─▄█████.▼.▼.▼.▼.▼.▼.▼');
			}
			if (name === 'scpinion') {
				this.add('c|@scpinion|/me welcomes funbro');
			}
			if (name === 'scythernoswiping') {
				this.add('c|%Scyther NO Swiping|/me prepares to swipe victory');
			}
			if (name === 'shrang') {
				this.add('raw| [15:30] @<b>Scrappie</b>: It is I, the great and powerful shrang, who is superior to you proles in every conceivable way.');
			}
			if (name === 'sigilyph') {
				this.add('c|@Sigilyph|Prepare to feel the mighty power of an exploding star!');
			}
			if (name === 'sirdonovan') {
				this.add('c|&sirDonovan|Oh, a battle? Let me finish my tea and crumpets');
			}
			if (name === 'skitty') {
				this.add('c|@Skitty|\\_$-_-$_/');
			}
			if (name === 'snobalt') {
				this.add('c|+Snobalt|By the power vested in me from the great Lord Tomohawk...');
			}
			if (name === 'snowy') {
				this.add('c|+Snowy|Why do a lot of black people call each other monica?');
			}
			if (name === 'solarisfox') {
				this.add('raw|<div class="chat chatmessage-solarisfox"><small>%</small><b><font color="#2D8F1E"><span class="username" data-name="SolarisFox">SolarisFox</span>:</font></b> <em><marquee behavior="alternate" scrollamount=3 scrolldelay="60" width="108">[Intense vibrating]</marquee></em></div>');
			}
			if (name === 'sonired') {
				this.add('c|+Sonired|~');
			}
			if (name === 'spacebass') {
				this.add('c|@SpaceBass|He aims his good ear best he can towards conversation and sometimes leans in awkward toward your seat');
				this.add('c|@SpaceBass|And if by chance one feels their space too invaded, then try your best to calmly be discreet');
				this.add('c|@SpaceBass|Because this septic breathed man that stands before you is a champion from days gone by');
			}
			if (name === 'sparktrain') {
				this.add('c|+sparktrain|hi');
			}
			if (name === 'specsmegabeedrill') {
				this.add('c|+SpecsMegaBeedrill|(◕‿◕✿)');
			}
			if (name === 'spy') {
				sentences = ['curry consumer', 'try to keep up', 'fucking try to knock me down', 'Sometimes I slather myself in vasoline and pretend I\'m a slug', 'I\'m really feeling it!'];
				this.add('c|+Spy|' + sentences[this.random(5)]);
			}
			if (name === 'starmei') {
				this.add('c|+Starmei|Starmei wins again');
			}
			if (name === 'starry') {
				this.add('c|%starry|oh');
			}
			if (name === 'steamroll') {
				this.add('c|@Steamroll|Banhammer ready!');
			}
			if (name === 'sunfished') {
				this.add('c|+Sunfished|*raptor screeches*');
			}
			if (name === 'sweep') {
				this.add('c|&Sweep|(ninjacat)(beer)');
			}
			if (name === 'talkingtree') {
				this.add('c|+talkingtree|I am Groot n_n');
			}
			if (name === 'teg') {
				this.add("c|+TEG|It's __The__ Eevee General");
			}
			if (name === 'temporaryanonymous') {
				sentences = ['Hey, hey, can I gently scramble your insides (just for laughs)? ``hahahaha``', 'check em', 'If you strike me down, I shall become more powerful than you can possibly imagine! I have a strong deathrattle effect and I cannot be silenced!'];
				this.add('c|@Temporaryanonymous|' + sentences[this.random(3)]);
			}
			if (name === 'teremiare') {
				this.add('c|%Teremiare|I like to call it skill');
			}
			if (name === 'theimmortal') {
				this.add('c|~The Immortal|Give me my robe, put on my crown!');
			}
			if (name === 'tone114') {
				this.add('c|+TONE114|Haven\'t you heard the new sensation sweeping the nation?');
			}
			if (name === 'trickster') {
				sentences = ["heh….watch out before you get cut on my edge", "AaAaAaAAaAaAAa"];
				this.add('c|@Trickster|' + sentences[this.random(2)]);
			}
			if (name === 'unfixable') {
				this.add('c|+unfixable|eevee general sucks lol');
			}
			if (name === 'urkerab') {
				this.add('j|urkerab');
			}
			if (name === 'uselesstrainer') {
				sentences = ['huehuehuehue', 'PIZA', 'SPAGUETI', 'RAVIOLI RAVIOLI GIVE ME THE FORMUOLI', 'get ready for PUN-ishment', 'PIU\' RUSPE PER TUTTI, E I MARO\'???'];
				this.add('c|@useless trainer|' + sentences[this.random(6)]);
			}
			if (name === 'vapo') {
				this.add('c|%Vapo|/me vapes');
			}
			if (name === 'vexeniv') {
				this.add('c|+Vexen IV|The Arcana is the means by which all is revealed.');
			}
			if (name === 'winry') {
				this.add('c|@Winry|fight me irl');
			}
			if (name === 'xfix') {
				if (this.random(2)) {
					// The classic one
					const hazards = {stealthrock: 1, spikes: 1, toxicspikes: 1, burnspikes: 1, stickyweb: 1};
					let hasHazards = false;
					for (const hazard in hazards) {
						if (pokemon.side.getSideCondition(hazard)) {
							hasHazards = true;
							break;
						}
					}
					if (hasHazards) {
						this.add('c|+xfix|(no haz... too late)');
					} else {
						this.add('c|+xfix|(no hazards, attacks only, final destination)');
					}
				} else {
					this.add("c|+xfix|//starthunt 1 + 1 | 2 | 2 + 2 | 4 | Opponent's status soon (answer with three letters) | FNT :)");
				}
			}
			if (name === 'xjoelituh') {
				this.add("c|%xJoelituh|I won't be haxed again, you will be the next one. UUUUUU");
			}
			if (name === 'xshiba') { // dd
				this.add("c|+xShiba|LINDA IS INDA");
			}
			if (name === 'zarel') {
				this.add('c|~Zarel|Your mom');
			}
			if (name === 'zebraiken') {
				pokemon.phraseIndex = this.random(3);
				//  Zeb's faint and entry phrases correspond to each other.
				if (pokemon.phraseIndex === 2) {
					this.add('c|&Zebraiken|bzzt n_n');
				} else if (pokemon.phraseIndex === 1) {
					this.add('c|&Zebraiken|bzzt *_*');
				} else {
					this.add('c|&Zebraiken|bzzt o_o');
				}
			}
			if (name === 'zeroluxgiven') {
				this.add('c|%Zero Lux Given|This should be an electrifying battle!');
			}
			if (name === 'zodiax') {
				this.add('c|%Zodiax|Introducing 7 time Grand Champion to the battle!');
			}
		},
		onFaint: function (pokemon, source, effect) {
			let name = toId(pokemon.name);

			if (name === 'innovamania') {
				pokemon.side.addSideCondition('healingwish', pokemon, this);
			}
			// Add here salty tears, that is, custom faint phrases.
			let sentences = [];
			// This message is different from others, as it triggers when
			// opponent faints
			if (source && source.name === 'galbia') {
				this.add('c|@galbia|literally 2HKOged');
			}
			// Actual faint phrases
			if (name === 'acast') {
				this.add('c|%Acast|If only I had more screens...');
			}
			if (name === 'ace') {
				this.add('c|@Ace|inhale all of this');
			}
			if (name === 'aelita') {
				this.add('c|%Aelita|CODE: LYOKO. Tower deactivated...');
			}
			if (name === 'ajhockeystar') {
				this.add('c|+ajhockeystar|You may have beaten me in battle, but never in hockey.');
			}
			if (name === 'albacore') {
				this.add('c|@Albacore|Joke\'s on you, I was just testing!');
			}
			if (name === 'albert') {
				this.add("c|+Albert|You may be good looking, but you're not a piece of art.");
			}
			if (name === 'always') {
				this.add('c|+Always|i swear to fucking god how can a single person be this lucky after getting played all the fucking way. you are a mere slave you glorified heap of trash.');
			}
			if (name === 'am') {
				this.add('c|+AM|RIP');
			}
			if (name === 'andy') {
				this.add('c|%Andy|wow r00d! :c');
			}
			if (name === 'antemortem') {
				this.add('c|&antemortem|FUCKING CAMPAIGNERS');
			}
			if (name === 'anttya') {
				this.add('c|+Anttya|Can\'t beat hax ¯\\_(ツ)_/¯');
			}
			if (name === 'anty') {
				this.add('c|+Anty|k');
			}
			if (name === 'articuno') {
				this.add('c|%Articuno|This is why you don\'t get any girls.');
			}
			if (name === 'ascriptmaster') {
				this.add('c|@Ascriptmaster|Farewell, my friends. May we meet another day...');
			}
			if (name === 'astara') {
				sentences = ['/me twerks into oblivion', 'good night ♥', 'Astara Vista Baby'];
				this.add('c|%Ast☆arA|' + sentences[this.random(3)]);
			}
			if (name === 'asty') {
				this.add('c|@Asty|Bottom kek :^(');
			}
			if (name === 'atomicllamas') {
				this.add('c|&atomicllamas|(puke)');
			}
			if (name === 'aurora') {
				this.add('c|@Aurora|are you serious you\'re so bad oh my god haxed ughhhhh');
			}
			if (name === 'reisen') {
				this.add("c|%Reisen|No need for goodbye. I'll see you on the flip side.");
			}
			if (name === 'beowulf') {
				this.add('c|@Beowulf|There is no need to be mad');
			}
			if (name === 'biggie') {
				sentences = ['It was all a dream', 'It\'s gotta be the shoes', 'ヽ༼ຈل͜ຈ༽ﾉ RIOT ヽ༼ຈل͜ຈ༽ﾉ'];
				this.add('c|@biggie|' + sentences[this.random(3)]);
			}
			if (name === 'blastchance') {
				this.add("c|+Blast Chance|**oh no!**");
			}
			if (name === 'blitzamirin') {
				this.add('c|@Blitzamirin|The Mirror Can Lie It Doesn\'t Show What\'s Inside ╰( ~ ◕ ᗜ ◕ ~ )੭━☆ﾟ.*･｡ﾟ');
			}
			if (name === 'bludz') {
				this.add('c|+bludz|zzz');
			}
			if (name === 'bondie') {
				this.add('c|+Bondie|Sigh...');
			}
			if (name === 'bottt') {
				this.add("c| boTTT|No longer being maintained...");
			}
			if (name === 'brandon') {
				this.add("c|+Brrandon|Always leave the crowd wanting more~");
			}
			if (name === 'bumbadadabum') {
				this.add("c|@bumbadadabum|Find another planet make the same mistakes.");
			}
			if (name === 'bummer') {
				this.add('c|&Bummer|Thanks for considering me!');
			}
			if (name === 'chaos') {
				this.add('c|~chaos|//forcewin chaos');
				if (this.random(1000) === 420) {
					// Shouldn't happen much, but if this happens it's hilarious.
					this.add('c|~chaos|actually');
					this.add('c|~chaos|//forcewin ' + pokemon.side.name);
					this.win(pokemon.side);
				}
			}
			if (name === 'ciran') {
				this.add("c|+Ciran|Fun is still banned in the Wi-Fi room!");
			}
			if (name === 'clefairy') {
				this.add('c|+Clefairy|flex&no flex zone nightcore remix dj clefairyfreak 2015');
			}
			if (name === 'coolstorybrobat') {
				let sentence = [
					"Lol I got slayed", "BRUH!", "I tried", "Going back to those mountains to train brb", "I forgot what fruit had... tasted like...",
				][this.random(5)];
				this.add('c|@CoolStoryBrobat|' + sentence);
			}
			if (name === 'crestfall') {
				this.add("c|%Crestfall|Her pistol go (bang bang, boom boom, pop pop)");
			}
			if (name === 'deathonwings') {
				this.add('c|+Death on Wings|DEG\'s a nub');
			}
			if (name === 'dirpz') {
				this.add('c|+Dirpz|sylveon is an eeeveeeeeeelutioooooon....');
			}
			if (name === 'dmt') {
				this.add('c|+DMT|DMT');
			}
			if (name === 'dreameatergengar') {
				this.add('c|+Dream Eater Gengar|In the darkness I fade. Remember ghosts don\'t die!');
			}
			if (name === 'duck') {
				this.add('c|@Duck|Duck you!');
			}
			if (name === 'e4flint') {
				this.add('c|#E4 Flint|+n1');
				this.add('c|+sparkyboTTT|nice 1');
			}
			if (name === 'eeveegeneral') {
				sentences = ["bye room, Electrolyte is in charge", "/me secretly cries", "inap!"];
				this.add("c|~Eevee General|" + sentences[this.random(3)]);
			}
			if (name === 'eyan') {
				this.add("c|@Eyan|;-;7");
			}
			if (name === 'feliburn') {
				this.add('c|@Feliburn|gg la verga de tu madre');
			}
			if (name === 'fireburn') {
				this.add('c|+Fireburn|>:Y');
			}
			if (name === 'flyingkebab') {
				this.add("c|+Flying Kebab|" + ["I\'ll see you in hell!", "/me vanishes to the depths of hell"][this.random(2)]);
			}
			if (name === 'formerhope') {
				this.add('c|@Former Hope|Now I have Former Hope.');
			}
			if (name === 'freeroamer') {
				this.add('c|%Freeroamer|how do people get these matchups...');
			}
			if (name === 'frysinger') {
				this.add("c|+Frysinger|/me teleports away from the battle and eats a senzu bean");
			}
			if (name === 'fx') {
				this.add("c|+f(x)|mirror, mirror");
			}
			if (name === 'galbia') {
				this.add('c|@galbia|(dog)');
			}
			if (name === 'galom') {
				this.add('c|+Galom|GAME OVER.');
			}
			if (name === 'rodan') {
				this.add("c|+RODAN|The Great Emeralds power allows me to feel... ");
			}
			if (name === 'geoffbruedly') {
				this.add("c|%GeoffBruedly|IM SORRY WINRY");
			}
			if (name === 'giagantic') {
				this.add("c|%Giagantic|x.x");
			}
			if (name === 'golui') {
				this.add("c|+Golui|Freeze in hell");
			}
			if (name === 'goodmorningespeon') {
				this.add("c|+GoodMorningEspeon|gg wp good hunt would scavenge again");
			}
			if (name === 'grimauxiliatrix') {
				this.add("c|%grimAuxiliatrix|∠( ᐛ 」∠)_");
			}
			if (name === 'halite') {
				this.add('c|@Halite|Today was your lucky day...');
			}
			if (name === 'hannah') {
				this.add('c|+Hannahh|Nooo! ;~;');
			}
			if (name === 'hashtag') {
				this.add("c|#Hashtag|fukn immigrants,,, slash me spits");
			}
			if (name === 'haund') {
				this.add('c|%Haund|omg noob team report');
			}
			if (name === 'healndeal') {
				this.add('c|+HeaLnDeaL|sadface I should have been a Sylveon');
			}
			if (name === 'himynamesl') {
				this.add('c|@HiMyNamesL|hey ' + pokemon.side.name + ', get good');
			}
			if (name === 'hippopotas') {
				this.add('-message', 'The sandstorm subsided.');
			}
			if (name === 'hollywood') {
				this.add('c|+hollywood|BibleThump');
			}
			if (name === 'ih8ih8sn0w') {
				this.add('c|+ih8ih8sn0w|nice hax :(');
			}
			if (name === 'imanalt') {
				this.add('c|+imanalt|bshax imo');
			}
			if (name === 'imas234') {
				this.add('c|@imas234|bg no re');
			}
			if (name === 'innovamania') {
				sentences = ['Did you rage quit?', 'How\'d you lose with this set?'];
				this.add('c|@innovamania|' + sentences[this.random(2)]);
			}
			if (name === 'iplaytennislol') {
				this.add('c|%iplaytennislol|/me des');
			}
			if (name === 'iyarito') {
				this.add('c|+Iyarito|Owwnn ;_;');
			}
			if (name === 'jackhiggins') {
				this.add("c|+Jack Higgins|I blame HiMyNamesL");
			}
			if (name === 'jasmine') {
				this.add("raw|<div class=\"broadcast-red\"><b>The server is restarting soon.</b><br />Please finish your battles quickly. No new battles can be started until the server resets in a few minutes.</div>");
			}
			if (name === 'jdarden') {
				this.add('c|@jdarden|;-;7');
			}
			if (name === 'jetpack') {
				this.add('c|+Jetpack|You shouldn\'t of done that. ;_;');
			}
			if (name === 'joim') {
				sentences = ['AVENGE ME, KIDS! AVEEEENGEEE MEEEEEE!!', 'OBEY!', '``This was a triumph, I\'m making a note here: HUGE SUCCESS.``', '``Remember when you tried to kill me twice? Oh how we laughed and laughed! Except I wasn\'t laughing.``', '``I\'m not even angry, I\'m being so sincere right now, even though you broke my heart and killed me. And tore me to pieces. And threw every piece into a fire.``'];
				this.add('c|~Joim|' + sentences[this.random(4)]);
			}
			if (name === 'juanma') {
				this.add("c|+Juanma|I guess you were right, now you must be the happiest person in the world, " + pokemon.side.name + "! You get to be major of 'I-told-you-so' town!");
			}
			if (name === 'kalalokki') {
				this.add('c|+Kalalokki|(⌐■_■)');
				this.add('c|+Kalalokki|( •_•)>⌐■-■');
				this.add('c|+Kalalokki|(x_x)');
			}
			if (name === 'kidwizard') {
				this.add('c|+Kid Wizard|Go to hell.');
			}
			if (name === 'layell') {
				this.add('c|@Layell|' + ['Alas poor me', 'Goodnight sweet prince'][this.random(2)]);
			}
			if (name === 'legitimateusername') {
				this.add('c|@LegitimateUsername|``This isn\'t brave. It\'s murder. What did I ever do to you?``');
			}
			if (name === 'lemonade') {
				this.add('c|+Lemonade|Pasta');
			}
			if (name === 'level51') {
				this.add('c|@Level 51|u_u!');
			}
			if (name === 'lj') {
				this.add('c|%LJDarkrai|.Blast');
			}
			if (name === 'lyto') {
				this.add('c|@Lyto|' + ['Unacceptable!', 'Mrgrgrgrgr...'][this.random(2)]);
			}
			if (name === 'macle') {
				this.add("c|+macle|Follow the Frog Blog - https://gonefroggin.wordpress.com/");
			}
			if (name === 'manu11') {
				this.add("c|@manu 11|so much hax, why do I even try");
			}
			if (name === 'marshmallon') {
				this.add("c|%Marshmallon|Shoutouts to sombolo and Rory Mercury ... for this trash set -_-");
			}
			if (name === 'mattl') {
				this.add('c|+MattL|Forgive me. I feel it again... the call from the light.');
			}
			if (name === 'mcmeghan') {
				this.add("c|&McMeghan|Out-odded");
			}
			if (name === 'megazard') {
				this.add('c|+Megazard|Old dog');
			}
			if (name === 'mizuhime') {
				this.add('c|+Mizuhime|I got Gimped.');
			}
			if (name === 'nv') {
				this.add('c|+nv|Too cute for this game ;~;');
			}
			if (name === 'omegaxis') {
				this.add('c|+Omega-Xis|bull shit bull sHit thats ✖️ some bullshit rightth ere right✖️there ✖️✖️if i do ƽaү so my selｆ ‼️ i say so ‼️ thats what im talking about right there right there (chorus: ʳᶦᵍʰᵗ ᵗʰᵉʳᵉ) mMMMMᎷМ‼️ HO0ОଠＯOOＯOОଠଠOoooᵒᵒᵒᵒᵒᵒᵒᵒᵒ ‼️ Bull shit');
			}
			if (name === 'orday') {
				this.add('c|%Orda-Y|❄_❄');
			}
			if (name === 'overneat') {
				this.add('c|+Overneat|Ugh! I failed you Iya-sama');
			}
			if (name === 'paradise') {
				this.add('c|%Paradise~|RIP THE DREAM');
			}
			if (name === 'pikachuun') {
				sentences = ['press f to pay respects ;_;7', 'this wouldn\'t have happened in my version', 'wait we were battling?'];
				this.add('c|+Pikachuun|' + sentences[this.random(3)]);
			}
			if (name === 'pluviometer') {
				this.add('c|+pluviometer|GP 2/2');
			}
			if (name === 'qtrx') {
				sentences = ['Keyboard not found; press **Ctrl + W** to continue...', 'hfowurfbiEU;DHBRFEr92he', 'At least my name ain\'t asgdf...'];
				this.add('c|@qtrx|' + sentences[this.random(3)]);
			}
			if (name === 'quitequiet') {
				this.add('c|@Quite Quiet|Well, I tried at least.');
			}
			if (name === 'raseri') {
				this.add('c|&Raseri|you killed a mush :(');
			}
			if (name === 'raven') {
				this.add('c|&Raven|I failed the challenge, and for that, I must lose a life. At least I had one to lose in the first place, nerd.');
			}
			if (name === 'rekeri') {
				this.add('c|@rekeri|lucky af :[');
			}
			if (name === 'rssp1') {
				this.add('c|+rssp1|Witness the power of the almighty Rufflet!');
			}
			if (name === 'rosiethevenusaur') {
				this.add('c|@RosieTheVenusaur|' + ['SD SKARM SHALL LIVE AGAIN!!!', 'Not my WiFi!'][this.random(2)]);
			}
			if (name === 'sailorcosmos') {
				this.add("c|+SailorCosmos|Cosmos Gorgeous Retreat!");
			}
			if (name === 'scotteh') {
				this.add('c|&Scotteh|▄███████▄.▲.▲.▲.▲.▲.▲');
				this.add('c|&Scotteh|█████████████████████▀▀');
			}
			if (name === 'scpinion') {
				this.add("c|@scpinion|guys, I don't even know how to pronounce scpinion");
			}
			if (name === 'scythernoswiping') {
				this.add('c|%Scyther NO Swiping|Aww man!');
			}
			if (name === 'shrang') {
				this.add('c|@shrang|FUCKING 2 YO KID');
			}
			if (name === 'sigilyph') {
				this.add('c|@Sigilyph|FROM THE BACK FROM THE BACK FROM THE BACK FROM THE BACK **ANDD**');
			}
			if (name === 'sirdonovan') {
				this.add('-message', 'RIP sirDonovan');
			}
			if (name === 'skitty') {
				this.add('c|@Skitty|!learn skitty, roleplay');
				this.add('raw|<div class="infobox">In Gen 6, Skitty <span class="message-learn-cannotlearn">can\'t</span> learn Role Play</div>');
			}
			if (name === 'solarisfox') {
				this.add('c|%SolarisFox|So long, and thanks for all the fish.');
			}
			if (name === 'sonired') {
				this.add('c|+Sonired|sigh lucky players.');
			}
			if (name === 'sparktrain') {
				this.add('c|+sparktrain|nice');
			}
			if (name === 'spy') {
				sentences = ['lolhax', 'crit mattered', 'bruh cum @ meh', '>thinking Pokemon takes any skill'];
				this.add('c|+Spy|' + sentences[this.random(4)]);
			}
			if (name === 'snobalt') {
				this.add('c|+Snobalt|Blasphemy!');
			}
			if (name === 'snowy') {
				this.add('c|+Snowy|i never understood this i always hear them be like "yo whats up monica" "u tryna blaze monica"');
			}
			if (name === 'spacebass') {
				this.add('c|@SpaceBass|And the tales of whales and woe off his liquored toungue will flow, the light will soft white twinkle off the cataracts in his eye');
				this.add("c|@SpaceBass|So if by chance you're cornered near the bathroom, or he blocks you sprawled in his aisle seat");
				this.add("c|@SpaceBass|Embrace the chance to hear some tales of greatness, 'cause he's the most interesting ball of toxins you're ever apt to meet");
			}
			if (name === 'specsmegabeedrill') {
				this.add('c|+SpecsMegaBeedrill|Tryhard.');
			}
			if (name === 'starmei') {
				this.add('c|+Starmei|//message AM, must be nice being this lucky');
			}
			if (name === 'starry') {
				this.add('c|%starry|o-oh');
			}
			if (name === 'steamroll') {
				this.add('c|@Steamroll|Not my problem anymore!');
			}
			if (name === 'sunfished') {
				this.add('c|+Sunfished|*raptor screeches*');
			}
			if (name === 'sweep') {
				this.add('c|&Sweep|You offended :C');
			}
			if (name === 'talkingtree') {
				this.add('c|+talkingtree|I am Groot u_u');
			}
			if (name === 'teg') {
				sentences = ['Save me, Joim!', 'Arcticblast is the worst OM leader in history'];
				this.add('c|+TEG|' + sentences[this.random(2)]);
			}
			if (name === 'temporaryanonymous') {
				sentences = [';_;7', 'This kills the tempo', 'I\'m kill. rip.', 'S-senpai! Y-you\'re being too rough! >.<;;;;;;;;;;;;;;;;;', 'A-at least you checked my dubs right?', 'B-but that\'s impossible! This can\'t be! AAAAAAAAAAAAAAAAAAAAAAAAAAAAAHHHHHHHHHHHHHHHHGH'];
				this.add('c|@Temporaryanonymous|' + sentences[this.random(6)]);
			}
			if (name === 'teremiare') {
				this.add('c|%Teremiare|sigh...');
			}
			if (name === 'theimmortal') {
				this.add('c|~The Immortal|Oh how wrong we were to think immortality meant never dying.');
			}
			if (name === 'tone114') {
				this.add('c|+TONE114|I don\'t have to take this. I\'m going for a walk.');
			}
			if (name === 'trickster') {
				this.add('c|@Trickster|UPLOADING VIRUS.EXE \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588] 99% COMPLETE');
			}
			if (name === 'unfixable') {
				this.add('c|+unfixable|i may be dead but my eyebrows are better than yours will ever be');
			}
			if (name === 'urkerab') {
				this.add('l|urkerab');
			}
			if (name === 'uselesstrainer') {
				sentences = ['TIME TO SET UP', 'One day I\'ll become a beautiful butterfly'];
				this.add('c|@useless trainer|' + sentences[this.random(2)]);
			}
			if (name === 'vapo') {
				this.add('c|%Vapo|( ; _> ;)');
			}
			if (name === 'vexeniv') {
				this.add('c|+Vexen IV|brb burning my dread');
			}
			if (name === 'winry') {
				this.add('c|@Winry|I AM NOT A WEEB');
			}
			if (name === 'xfix') {
				const foe = pokemon.side.foe.active[0];
				if (foe.name === 'xfix') {
					this.add("c|+xfix|(I won. I lost. I... huh... ~~can somebody tell me what actually happened?~~)");
				} else if (foe.ability === 'magicbounce') {
					this.add('c|+xfix|(How do mirrors work... oh right, when you use a mirror, your opponent has a mirror as well... or something, ~~that\'s how you "balance" this game~~)');
				} else {
					this.add('c|+xfix|~~That must have been a glitch. Hackers.~~');
				}
			}
			if (name === 'xjoelituh') {
				this.add("c|%xJoelituh|THAT FOR SURE MATTERED. Blame Nayuki. I'm going to play CSGO then.");
			}
			if (name === 'xshiba') {
				this.add("c|+xShiba|Lol that feeling when you just win but get haxed..");
			}
			if (name === 'zarel') {
				this.add('c|~Zarel|your mom');
				// Followed by the usual '~Zarel fainted'.
				this.add('-message', '~Zarel used your mom!');
			}
			if (name === 'zebraiken') {
				if (pokemon.phraseIndex === 2) {
					this.add('c|&Zebraiken|bzzt u_u');
				} else if (pokemon.phraseIndex === 1) {
					this.add('c|&Zebraiken|bzzt ._.');
				} else {
					// Default faint.
					this.add('c|&Zebraiken|bzzt x_x');
				}
			}
			if (name === 'zeroluxgiven') {
				this.add('c|%Zero Lux Given|I\'ve been beaten, what a shock!');
			}
			if (name === 'zodiax') {
				this.add('c|%Zodiax|We need to go full out again soon...');
			}
		},
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview'],
		requirePentagon: true,
	},
	{
		name: "Triples Custom Game",
		section: "ORAS Triples",

		gameType: 'triples',
		searchShow: false,
		canUseRandomTeam: true,
		maxLevel: 9999,
		defaultLevel: 100,
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},

	// Other Metagames
	///////////////////////////////////////////////////////////////////

	{
		name: "Enchanted Items",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3570431/\">Enchanted Items</a>"],
		section: "OM of the Month",
		column: 2,

		mod: 'enchanteditems',
		ruleset: ['OU'],
		banlist: ['Kyurem-Black', 'Manaphy', 'Shedinja', 'Togekiss', 'Chatter',
			'Bug Gem', 'Dark Gem', 'Dragon Gem', 'Electric Gem', 'Fairy Gem', 'Fire Gem',
			'Ice Gem', 'Poison Gem', 'Poke Ball', 'Psychic Gem', 'Steel Gem', 'Wave Incense',
		],
		onValidateSet: function (set) {
			let ability = this.getAbility(set.ability);
			let item = this.getItem(set.item);
			if (ability.item && ability.item === item.id) {
				return ["You are not allowed to have " + ability.name + " and " + item.name + " on the same Pokémon."];
			}
		},
		onValidateTeam: function (team) {
			let abilityTable = {};
			for (let i = 0; i < team.length; i++) {
				let ability = this.getAbility(team[i].ability);
				if (!abilityTable[ability.id]) abilityTable[ability.id] = 0;
				if (++abilityTable[ability.id] > 2) {
					return ["You are limited to two of each ability by Ability Clause.", "(You have more than two of " + ability.name + " or " + this.getItem(ability.item).name + ")"];
				}
				let item = toId(team[i].item);
				if (!item) continue;
				item = this.getItem(item);
				ability = item.ability;
				if (!ability) continue;
				if (!abilityTable[ability]) abilityTable[ability] = 0;
				if (++abilityTable[ability] > 2) {
					return ["You are limited to two of each ability by Ability Clause.", "(You have more than two of " + this.getAbility(ability).name + " or " + item.name + ")"];
				}
			}
		},
		onFaint: function (pokemon) {
			this.singleEvent('End', this.getItem(pokemon.item), pokemon.itemData, pokemon);
		},
		onSwitchOut: function (pokemon) {
			this.singleEvent('End', this.getItem(pokemon.item), pokemon.itemData, pokemon);
		},
	},
	{
		name: "AAA Ubers",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/posts/6007526/\">AAA Ubers</a>"],
		section: "OM of the Month",

		ruleset: ['Ubers'],
		banlist: ['Ignore Illegal Abilities', 'Shedinja'],
		onValidateSet: function (set) {
			let bannedAbilities = {'Arena Trap': 1, 'Huge Power': 1, 'Imposter': 1, 'Parental Bond': 1, 'Pure Power': 1, 'Shadow Tag': 1, 'Simple': 1, 'Wonder Guard': 1};
			if (set.ability in bannedAbilities) {
				let template = this.getTemplate(set.species || set.name);
				let legalAbility = false;
				for (let i in template.abilities) {
					if (set.ability === template.abilities[i]) legalAbility = true;
				}
				if (!legalAbility) return ["The ability " + set.ability + " is banned on Pok\u00e9mon that do not naturally have it."];
			}
		},
	},
	{
		name: "Anything Goes",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3523229/\">Anything Goes</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3548945/\">AG Resources</a>",
		],
		section: "Other Metagames",
		column: 2,

		ruleset: ['Pokemon', 'Endless Battle Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod'],
		banlist: ['Illegal', 'Unreleased'],
	},
	{
		name: "Balanced Hackmons",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3489849/\">Balanced Hackmons</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3566051/\">BH Suspects and Bans</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3571384/\">BH Resources</a>",
		],
		section: "Other Metagames",

		ruleset: ['Pokemon', 'Ability Clause', '-ate Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Endless Battle Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod'],
		banlist: ['Groudon-Primal', 'Kyogre-Primal', 'Arena Trap', 'Huge Power', 'Moody', 'Parental Bond', 'Protean', 'Pure Power', 'Shadow Tag', 'Wonder Guard', 'Assist', 'Chatter'],
	},
	{
		name: "1v1",
		desc: [
			"Bring three Pok&eacute;mon to Team Preview and choose one to battle.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3496773/\">1v1</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3536109/\">1v1 Resources</a>",
		],
		section: 'Other Metagames',

		teamLength: {
			validate: [1, 3],
			battle: 1,
		},
		ruleset: ['Pokemon', 'Moody Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Swagger Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview'],
		banlist: ['Illegal', 'Unreleased', 'Arceus', 'Blaziken', 'Darkrai', 'Deoxys', 'Deoxys-Attack', 'Dialga',
			'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-White', 'Lugia', 'Mewtwo',
			'Palkia', 'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Xerneas', 'Yveltal', 'Zekrom',
			'Focus Sash', 'Kangaskhanite', 'Salamencite', 'Soul Dew', 'Perish Song', 'Chansey + Charm + Seismic Toss',
		],
	},
	{
		name: "Monotype",
		desc: [
			"All Pok&eacute;mon on a team must share a type.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3544507/\">Monotype</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3565113/\">Monotype Viability Ranking</a>",
		],
		section: "Other Metagames",

		ruleset: ['Pokemon', 'Standard', 'Baton Pass Clause', 'Swagger Clause', 'Same Type Clause', 'Team Preview'],
		banlist: ['Aegislash', 'Arceus', 'Blaziken', 'Darkrai', 'Deoxys', 'Deoxys-Attack', 'Dialga', 'Genesect', 'Giratina', 'Giratina-Origin', 'Greninja', 'Groudon',
			'Ho-Oh', 'Kyogre', 'Kyurem-White', 'Lugia', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Talonflame', 'Xerneas', 'Yveltal', 'Zekrom',
			'Altarianite', 'Charizardite X', 'Damp Rock', 'Gengarite', 'Kangaskhanite', 'Lucarionite', 'Mawilite', 'Metagrossite', 'Sablenite', 'Salamencite', 'Slowbronite', 'Smooth Rock', 'Soul Dew',
		],
	},
	{
		name: "Almost Any Ability",
		desc: [
			"Pok&eacute;mon can use any ability, barring the few that are banned.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3528058/\">Almost Any Ability</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3551063/\">AAA Viability Ranking</a>",
		],
		section: "Other Metagames",

		ruleset: ['Pokemon', 'Standard', 'Ability Clause', 'Baton Pass Clause', 'Swagger Clause', 'Team Preview'],
		banlist: ['Ignore Illegal Abilities',
			'Arceus', 'Archeops', 'Bisharp', 'Chatot', 'Darkrai', 'Deoxys', 'Deoxys-Attack', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon',
			'Ho-Oh', 'Hoopa-Unbound', 'Keldeo', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Mamoswine', 'Mewtwo', 'Palkia', 'Rayquaza',
			'Regigigas', 'Reshiram', 'Shaymin-Sky', 'Shedinja', 'Slaking', 'Smeargle', 'Terrakion', 'Weavile', 'Xerneas', 'Yveltal', 'Zekrom',
			'Blazikenite', 'Gengarite', 'Kangaskhanite', 'Lucarionite', 'Mawilite', 'Salamencite', 'Soul Dew', 'Shadow Tag',
		],
		onValidateSet: function (set) {
			let bannedAbilities = {'Aerilate': 1, 'Arena Trap': 1, 'Contrary': 1, 'Fur Coat': 1, 'Huge Power': 1, 'Illusion': 1, 'Imposter': 1, 'Parental Bond': 1, 'Protean': 1, 'Pure Power': 1, 'Simple':1, 'Speed Boost': 1, 'Wonder Guard': 1};
			if (set.ability in bannedAbilities) {
				let template = this.getTemplate(set.species || set.name);
				let legalAbility = false;
				for (let i in template.abilities) {
					if (set.ability === template.abilities[i]) legalAbility = true;
				}
				if (!legalAbility) return ['The ability ' + set.ability + ' is banned on Pok\u00e9mon that do not naturally have it.'];
			}
		},
	},
	{
		name: "STABmons",
		desc: [
			"Pok&eacute;mon can use any move of their typing, in addition to the moves they can normally learn.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3547279/\">STABmons</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3558034/\">STABmons Viability Ranking</a>",
		],
		section: "Other Metagames",

		ruleset: ['OU'],
		banlist: ['Ignore STAB Moves', 'Diggersby', 'Kyurem-Black', 'Porygon-Z', 'Aerodactylite', 'Altarianite', "King's Rock", 'Metagrossite', 'Razor Fang'],
	},
	{
		name: "Tier Shift",
		desc: [
			"Pok&eacute;mon below OU/BL get all their stats boosted. UU/BL2 get +5, RU/BL3 get +10, NU/BL4 get +15, and PU or lower get +20.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3554765/\">Tier Shift</a>",
		],
		section: "Other Metagames",

		mod: 'tiershift',
		ruleset: ['OU'],
		banlist: ['Damp Rock'],
	},
	{
		name: "Inverse Battle",
		desc: [
			"Battle with an inverted type chart.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3518146/\">Inverse Battle</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3526371/\">Inverse Battle Viability Ranking</a>",
		],
		section: "Other Metagames",

		ruleset: ['Pokemon', 'Standard', 'Baton Pass Clause', 'Swagger Clause', 'Team Preview'],
		banlist: ['Arceus', 'Blaziken', 'Darkrai', 'Deoxys', 'Deoxys-Attack', 'Deoxys-Defense', 'Deoxys-Speed', 'Diggersby', 'Giratina-Origin', 'Groudon',
			'Ho-Oh', 'Hoopa-Unbound', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Serperior',
			'Shaymin-Sky', 'Snorlax', 'Xerneas', 'Yveltal', 'Zekrom', 'Gengarite', 'Kangaskhanite', 'Salamencite', 'Soul Dew', 'Shadow Tag',
		],
		onNegateImmunity: false,
		onEffectiveness: function (typeMod, target, type, move) {
			// The effectiveness of Freeze Dry on Water isn't reverted
			if (move && move.id === 'freezedry' && type === 'Water') return;
			if (move && !this.getImmunity(move, type)) return 1;
			return -typeMod;
		},
	},
	{
		name: "LC UU",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3523929/\">LC UU</a>"],
		section: "Other Metagames",

		maxLevel: 5,
		ruleset: ['LC'],
		banlist: ['Abra', 'Aipom', 'Anorith', 'Archen', 'Bunnelby', 'Carvanha', 'Chinchou', 'Cottonee', 'Croagunk', 'Diglett',
			'Drifloon', 'Drilbur', 'Dwebble', 'Elekid', 'Ferroseed', 'Fletchling', 'Foongus', 'Gastly', 'Gothita', 'Hippopotas',
			'Honedge', 'Larvesta', 'Magnemite', 'Mienfoo', 'Munchlax', 'Omanyte', 'Onix', 'Pawniard', 'Ponyta', 'Porygon', 'Scraggy',
			'Shellder', 'Snivy', 'Snubbull', 'Spritzee', 'Staryu', 'Stunky', 'Surskit', 'Timburr', 'Tirtouga', 'Torchic', 'Vullaby',
			'Corphish', 'Houndour', 'Pancham', 'Skrelp', 'Vulpix', 'Zigzagoon', 'Shell Smash', 'Sticky Web',
		],
	},
	{
		name: "2v2 Doubles",
		desc: [
			"Double battle where you bring four Pok&eacute;mon to Team Preview and choose only two.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3547040/\">2v2 Doubles</a>",
		],
		section: "Other Metagames",

		gameType: 'doubles',
		searchShow: false,
		teamLength: {
			validate: [2, 4],
			battle: 2,
		},
		ruleset: ['Doubles OU'],
		banlist: ['Kangaskhanite', 'Perish Song'],
	},
	{
		name: "Averagemons",
		desc: [
			"Every Pok&eacute;mon has a stat spread of 100/100/100/100/100/100.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3526481/\">Averagemons</a>",
		],
		section: "Other Metagames",

		searchShow: false,
		mod: 'averagemons',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Baton Pass Clause', 'Swagger Clause', 'Team Preview'],
		banlist: ['Smeargle', 'Gengarite', 'Kangaskhanite', 'Mawilite', 'Medichamite', 'Sableye + Prankster',
			'DeepSeaScale', 'DeepSeaTooth', 'Eviolite', 'Light Ball', 'Soul Dew', 'Thick Club', 'Arena Trap', 'Huge Power', 'Pure Power', 'Shadow Tag', 'Chatter',
		],
	},
	{
		name: "Trademarked",
		section: "Other Metagames",

		mod: 'trademark',
		ruleset: ['OU'],
		banlist: ['Ignore Illegal Abilities', 'Slaking', 'Regigigas'],

		onValidateSet: function (set) {
			let move = this.getMove(set.ability);
			if (!move.exists) {
				let abilities = this.getTemplate(set.species).abilities;
				let legalAbility = false;
				for (let a in abilities) {
					if (abilities[a] === set.ability) {
						legalAbility = true;
					}
				}
				return !legalAbility ? ['' + set.species + ' cannot have ' + set.ability] : [];
			}
			if (move.name === 'Roar' || move.name === 'Whirlwind') return ['' + set.species + ' has an illegal trademark ability', '(' + move.name + ' is not allowed as a trademark ability)'];
			if (move.category !== 'Status') return ['You can only trademark status moves', '(' + set.species + '\'s trademark is ' + move.name + ')'];
			if (set.moves.indexOf(move.name) >= 0) return ['You cannot use a move that is trademarked', '(' + set.species + ' has ' + move.name + ' as ability and a move)'];

			let template = this.getTemplate(set.species);
			let added = {};
			let canLearn = set.species === 'Smeargle';
			do {
				// We don't care for how it obtains the move as long as the Pokemon learns it
				added[template.species] = true;
				if (template.learnset[move.id]) {
					canLearn = true;
					break;
				}
				if (template.prevo) {
					template = this.getTemplate(template.prevo);
				}
			} while (template && template.species && !added[template.species]);
			if (!canLearn) {
				return ['' + set.species + ' cannot learn ' + move.name];
			}
		},
	},
	{
		name: "OU Theorymon",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3559611/\">OU Theorymon</a>"],
		section: "Other Metagames",

		mod: 'theorymon',
		searchShow: false,
		ruleset: ['OU'],
	},
	{
		name: "Gen-NEXT OU",
		section: "Other Metagames",

		mod: 'gennext',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard NEXT', 'Team Preview'],
		banlist: ['Uber'],
	},

	// Randomized Metas
	///////////////////////////////////////////////////////////////////

	{
		name: "[Seasonal] Fireworks Frenzy",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3491902/\">Seasonal Ladder</a>"],
		section: "Randomized Metas",
		column: 2,

		team: 'randomSeasonalFireworks',
		ruleset: ['Sleep Clause Mod', 'Freeze Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
		onBegin: function () {
			this.add('message', "A fireworks show is starting!");
			// this.add('-weather', 'Fireworks'); // un-comment when the client supports custom named weathers
		},
		onResidual: function () {
			if (this.isWeather('')) this.eachEvent('Weather');
		},
		onWeather: function (target) {
			if (!target.hasType('Fire')) this.damage(target.maxhp / 16, target, null, 'exploding fireworks');
		},
	},
	{
		name: "Battle Factory",
		section: "Randomized Metas",

		team: 'randomFactory',
		ruleset: ['Pokemon', 'Sleep Clause Mod', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Mega Rayquaza Clause'],
	},
	{
		name: "Challenge Cup 1v1",
		section: "Randomized Metas",

		team: 'randomCC',
		teamLength: {
			battle: 1,
		},
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview'],
	},
	{
		name: "Monotype Random Battle",
		section: "Randomized Metas",

		team: 'random',
		searchShow: false,
		ruleset: ['Pokemon', 'Same Type Clause', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "Hackmons Cup",
		desc: ["Randomized teams of level-balanced Pok&eacute;mon with absolutely any ability, moves, and item."],
		section: "Randomized Metas",

		team: 'randomHC',
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "Doubles Hackmons Cup",
		section: "Randomized Metas",

		gameType: 'doubles',
		team: 'randomHC',
		searchShow: false,
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "Triples Hackmons Cup",
		section: "Randomized Metas",

		gameType: 'triples',
		team: 'randomHC',
		searchShow: false,
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod'],
	},

	// RoA Spotlight
	///////////////////////////////////////////////////////////////////

	{
		name: "[Gen 1] UU",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3573896/\">RBY UU</a>"],
		section: "RoA Spotlight",
		column: 3,

		mod: 'gen1',
		ruleset: ['[Gen 1] OU'],
		banlist: ['OU'],
	},

	{
		name: "Mix and Mega",
		section: "Other Metagames",
		column: 2,

		mod: 'mixandmega',
		ruleset: ['Ubers'],
		banlist: ['Gengarite', 'Shadow Tag', 'Dynamic Punch', 'Zap Cannon', 'Electrify'],
		onValidateTeam: function (team, format) {
			let itemTable = {};
			for (let i = 0; i < team.length; i++) {
				let item = this.getItem(team[i].item);
				if (!item) continue;
				if (itemTable[item] && item.megaStone) return ["You are limited to one of each Mega Stone.", "(You have more than one " + this.tools.getItem(item).name + ")"];
				if (itemTable[item] && (item.id === 'redorb' || item.id === 'blueorb')) return ["You are limited to one of each Primal Orb.", "(You have more than one " + this.tools.getItem(item).name + ")"];
				itemTable[item] = true;
			}
		},
		onValidateSet: function (set) {
			let template = this.getTemplate(set.species || set.name);
			let item = this.getItem(set.item);
			if (!item.megaEvolves && item.id !== 'blueorb' && item.id !== 'redorb') return;
			if (template.baseSpecies === item.megaEvolves || (item.id === 'redorb' && template.baseSpecies === 'Groudon') || (item.id === 'blueorb' && template.baseSpecies === 'Kyogre')) return;
			if (template.evos.length) return ["" + template.species + " is not allowed to hold " + item.name + " because it's not fully evolved."];
			if (template.tier === 'Uber') return ["" + template.species + " is not allowed to hold " + item.name + " because it's in the Uber tier."];
			if (template.species === 'Shuckle' && ['abomasite', 'aggronite', 'audinite', 'cameruptite', 'charizarditex', 'charizarditey', 'galladite', 'gyaradosite', 'heracronite', 'houndoominite', 'latiasite', 'mewtwonitey', 'sablenite', 'salamencite', 'scizorite', 'sharpedonite', 'slowbronite', 'steelixite', 'tyranitarite', 'venusaurite'].indexOf(item.id) >= 0) {
				return ["" + template.species + " is not allowed to hold " + item.name + "."];
			}
			let bannedMons = {'Cresselia':1, 'Dragonite':1, 'Kyurem-Black':1, 'Lucario':1, 'Slaking':1, 'Smeargle':1, 'Regigigas':1};
			if (template.species in bannedMons) {
				return ["" + template.species + " is not allowed to hold a Mega Stone."];
			}
			let powerAbilities = {'Huge Power':1, 'Pure Power':1};
			let allowedPower = false;
			switch (item.id) {
			case 'beedrillite': case 'kangaskhanite':
				return ["" + item.name + " can only allowed be held by " + item.megaEvolves + "."];
			case 'blazikenite':
				if (set.ability !== 'Speed Boost') return ["" + template.species + " is not allowed to hold " + item.name + "."];
				break;
			case 'mawilite': case 'medichamite':
				if (powerAbilities.hasOwnProperty(set.ability)) break;
				if (!template.otherFormes) return ["" + template.species + " is not allowed to hold " + item.name + "."];
				for (let i = 0; i < template.otherFormes.length; i++) {
					let altTemplate = this.getTemplate(template.otherFormes[i]);
					if ((altTemplate.isMega || altTemplate.isPrimal) && powerAbilities.hasOwnProperty(altTemplate.abilities['0'])) {
						allowedPower = true;
						break;
					}
				}
				if (!allowedPower) return ["" + template.species + " is not allowed to hold " + item.name + "."];
				break;
			case 'mewtwonitey':
				if (template.baseStats.def <= 20) return ["" + template.species + " does not have enough Defense to hold " + item.name + "."];
				break;
			case 'diancite':
				if (template.baseStats.def <= 40 || template.baseStats.spd <= 40) return ["" + template.species + " does not have enough Def. or Sp. Def. to hold " + item.name + "."];
				break;
			case 'slowbronite':
				if (template.baseStats.def > 185) return ["" + template.species + " is not allowed to hold " + item.name + "."];
				break;
			case 'ampharosite': case 'garchompite': case 'heracronite':
				if (template.baseStats.spe <= 10) return ["" + template.species + " does not have enough Speed to hold " + item.name + "."];
				break;
			case 'cameruptite':
				if (template.baseStats.spe <= 20) return ["" + template.species + " does not have enough Speed to hold " + item.name + "."];
				break;
			case 'abomasite': case 'sablenite':
				if (template.baseStats.spe <= 30) return ["" + template.species + " does not have enough Speed to hold " + item.name + "."];
				break;
			}
		},
		onBegin: function () {
			let allPokemon = this.p1.pokemon.concat(this.p2.pokemon);
			for (let i = 0, len = allPokemon.length; i < len; i++) {
				let pokemon = allPokemon[i];
				pokemon.originalSpecies = pokemon.baseTemplate.species;
			}
		},
		onSwitchInPriority: -6,
		onSwitchIn: function (pokemon) {
			let item = pokemon.getItem();
			if (pokemon.isActive && !pokemon.template.isMega && !pokemon.template.isPrimal && (item.id === 'redorb' || item.id === 'blueorb') && pokemon.baseTemplate.tier !== 'Uber' && !pokemon.template.evos.length) {
				// Primal Reversion
				let bannedMons = {'Cresselia':1, 'Dragonite':1, 'Kyurem-Black':1, 'Lucario':1, 'Regigigas':1, 'Slaking':1, 'Smeargle':1};
				if (!(pokemon.baseTemplate.baseSpecies in bannedMons)) {
					let template = this.getMixedTemplate(pokemon.originalSpecies, item.id === 'redorb' ? 'Groudon-Primal' : 'Kyogre-Primal');
					pokemon.formeChange(template);
					pokemon.baseTemplate = template;

					// Do we have a proper sprite for it?
					if (pokemon.originalSpecies === (item.id === 'redorb' ? 'Groudon' : 'Kyogre')) {
						pokemon.details = template.species + (pokemon.level === 100 ? '' : ', L' + pokemon.level) + (pokemon.gender === '' ? '' : ', ' + pokemon.gender) + (pokemon.set.shiny ? ', shiny' : '');
						this.add('detailschange', pokemon, pokemon.details);
					} else {
						let oTemplate = this.getTemplate(pokemon.originalSpecies);
						this.add('-formechange', pokemon, oTemplate.species, template.requiredItem);
						this.add('-start', pokemon, this.getTemplate(template.originalMega).requiredItem, '[silent]');
						if (oTemplate.types.length !== pokemon.template.types.length || oTemplate.types[1] !== pokemon.template.types[1]) {
							this.add('-start', pokemon, 'typechange', pokemon.template.types.join('/'), '[silent]');
						}
					}
					this.add('message', pokemon.name + "'s " + pokemon.getItem().name + " activated!");
					this.add('message', pokemon.name + "'s Primal Reversion! It reverted to its primal form!");
					pokemon.setAbility(template.abilities['0']);
					pokemon.baseAbility = pokemon.ability;
					pokemon.canMegaEvo = false;
				}
			} else {
				let oMegaTemplate = this.getTemplate(pokemon.template.originalMega);
				if (oMegaTemplate.exists && pokemon.originalSpecies !== oMegaTemplate.baseSpecies) {
					// Place volatiles on the Pokémon to show its mega-evolved condition and details
					this.add('-start', pokemon, oMegaTemplate.requiredItem || oMegaTemplate.requiredMove, '[silent]');
					let oTemplate = this.getTemplate(pokemon.originalSpecies);
					if (oTemplate.types.length !== pokemon.template.types.length || oTemplate.types[1] !== pokemon.template.types[1]) {
						this.add('-start', pokemon, 'typechange', pokemon.template.types.join('/'), '[silent]');
					}
				}
			}
		},
		onSwitchOut: function (pokemon) {
			let oMegaTemplate = this.getTemplate(pokemon.template.originalMega);
			if (oMegaTemplate.exists && pokemon.originalSpecies !== oMegaTemplate.baseSpecies) {
				this.add('-end', pokemon, oMegaTemplate.requiredItem || oMegaTemplate.requiredMove, '[silent]');
			}
		},
	},

	{
		name: "Type Omelette",
		section: "Other Metagames",

		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Swagger Clause', 'Baton Pass Clause'],
		banlist: [],
		mod: 'typeomelette',
		//Since this metagame uses custom types, let's make the types known to the players.
		onSwitchIn: function (pokemon) {
			let typeStr = pokemon.types[0];
			if (pokemon.types[1]) typeStr += '/' + pokemon.types[1];
			this.add('-start', pokemon, 'typechange', typeStr);
		},
	},

	{
		name: "Accessorize",
		desc: ["&bullet; <a href=\"http://www.smogon.com/forums/threads/3546902/\">Accessorize</a>"],
		section: "Other Metagames",

		mod: 'accessorize',
		ruleset: ['Ubers'],
		onValidateSet: function (set) {
			let template = this.getTemplate(set.species || set.name);
			let item = this.getItem(set.item);
			switch (item.id) {
			case 'charcoal': case 'spelltag': case 'magnet': case 'sharpbeak': case 'dragonfang': case 'nevermeltice':
				if (template.baseStats.def <= 5 || template.baseStats.spd <= 5) return ["" + template.species + " does not have enough Def. or Sp. Def. to hold " + item.name + "."];
				break;
			case 'mysticwater': case 'hardstone': case 'cherishball': case 'metalcoat': case 'miracleseed': case 'poisonbarb':
				if (template.baseStats.spe <= 10) return ["" + template.species + " does not have enough Speed to hold " + item.name + "."];
				break;
			case 'twistedspoon': case 'silkscarf': case 'blackglasses':
				if (template.baseStats.def <= 10) return ["" + template.species + " does not have enough Defense to hold " + item.name + "."];
				break;
			case 'silverpowder': case 'softsand': case 'blackbelt':
				if (template.baseStats.spd <= 10) return ["" + template.species + " does not have enough Special Defense to hold " + item.name + "."];
				break;
			}
		},
	},
	{
		name: "Protean Palace",
		section: "Other Metagames",

		ruleset: ['Pokemon', 'Standard', 'Team Preview'],
		banlist: ['Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite', 'Lucarionite'],
		onBeforeMove: function (pokemon, target, move) {
			if (!move) return;
			let moveType = '';
			if (move.id === 'hiddenpower') {
				moveType = pokemon.hpType;
			} else if (move.type === 'Normal' && (pokemon.ignore ? !pokemon.ignore['Ability'] : true)) {
				switch (pokemon.ability) {
				case 'aerilate':
					moveType = 'Flying';
					break;
				case 'pixilate':
					moveType = 'Fairy';
					break;
				case 'refrigerate':
					moveType = 'Ice';
					break;
				default:
					moveType = 'Normal';
				}
			} else {
				moveType = move.type;
			}
			if (pokemon.getTypes().join() !== moveType) {
				this.add('-start', pokemon, 'typechange', moveType);
				pokemon.setType(moveType);
			}
		},
	},
	// BW2 Singles
	///////////////////////////////////////////////////////////////////

	{
		name: "[Gen 5] OU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3551993/\">BW2 OU Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431094/\">BW2 Sample Teams</a>",
		],
		section: "BW2 Singles",
		column: 3,

		mod: 'gen5',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Baton Pass Clause', 'Swagger Clause', 'Team Preview'],
		banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Drought ++ Chlorophyll', 'Sand Stream ++ Sand Rush', 'Soul Dew'],
	},
	{
		name: "[Gen 5] Ubers",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3550881/\">BW2 Ubers Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6446463/\">BW2 Ubers Sample Teams</a>",
		],
		section: "BW2 Singles",

		mod: 'gen5',
		ruleset: ['Pokemon', 'Team Preview', 'Standard Ubers'],
		banlist: [],
	},
	{
		name: "[Gen 5] UU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3474024/\">BW2 UU Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431094/\">BW2 Sample Teams</a>",
		],
		section: "BW2 Singles",

		mod: 'gen5',
		ruleset: ['[Gen 5] OU'],
		banlist: ['OU', 'BL', 'Drought', 'Sand Stream', 'Snow Warning'],
	},
	{
		name: "[Gen 5] RU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3473124/\">BW2 RU Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431094/\">BW2 Sample Teams</a>",
		],
		section: "BW2 Singles",

		mod: 'gen5',
		ruleset: ['[Gen 5] UU'],
		banlist: ['UU', 'BL2', 'Shell Smash + Baton Pass', 'Snow Warning'],
	},
	{
		name: "[Gen 5] NU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3484121/\">BW2 NU Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431094/\">BW2 Sample Teams</a>",
		],
		section: "BW2 Singles",

		mod: 'gen5',
		ruleset: ['[Gen 5] RU'],
		banlist: ['RU', 'BL3', 'Prankster + Assist'],
	},
	{
		name: "[Gen 5] LC",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3485860/\">BW2 LC Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431094/\">BW2 Sample Teams</a>",
		],
		section: "BW2 Singles",

		mod: 'gen5',
		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
		banlist: ['Berry Juice', 'Soul Dew', 'Dragon Rage', 'Sonic Boom', 'LC Uber', 'Gligar', 'Murkrow', 'Scyther', 'Sneasel', 'Tangela'],
	},
	{
		name: "[Gen 5] GBU Singles",
		section: "BW2 Singles",

		mod: 'gen5',
		searchShow: false,
		maxForcedLevel: 50,
		teamLength: {
			validate: [3, 6],
			battle: 3,
		},
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview'],
		banlist: ['Dark Void', 'Sky Drop'],
	},
	{
		name: "[Gen 5] Random Battle",
		section: "BW2 Singles",

		mod: 'gen5',
		searchShow: false,
		team: 'random',
		ruleset: ['Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 5] Custom Game",
		section: "BW2 Singles",

		mod: 'gen5',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},

	// BW2 Doubles
	///////////////////////////////////////////////////////////////////

	{
		name: "[Gen 5] Doubles OU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3533424/\">BW2 Doubles Metagame Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3533421/\">BW2 Doubles Viability Ranking</a>",
		],
		section: 'BW2 Doubles',
		column: 3,

		mod: 'gen5',
		gameType: 'doubles',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Arceus', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-White', 'Jirachi',
			'Lugia', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Zekrom', 'Soul Dew', 'Dark Void', 'Sky Drop',
		],
	},
	{
		name: "[Gen 5] GBU Doubles",
		section: 'BW2 Doubles',

		mod: 'gen5',
		gameType: 'doubles',
		searchShow: false,
		maxForcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview'],
		banlist: ['Dark Void', 'Sky Drop'],
	},
	{
		name: "[Gen 5] Doubles Custom Game",
		section: 'BW2 Doubles',

		mod: 'gen5',
		gameType: 'doubles',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},

	// DPP Singles
	///////////////////////////////////////////////////////////////////

	{
		name: "[Gen 4] OU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3551992/\">DPP OU Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431088/\">DPP Sample Teams</a>",
		],
		section: "DPP Singles",
		column: 4,

		mod: 'gen4',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause'],
		banlist: ['Uber'],
	},
	{
		name: "[Gen 4] Ubers",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3505128/\">DPP Ubers Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6446464/\">DPP Ubers Sample Teams</a>",
		],
		section: "DPP Singles",

		mod: 'gen4',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Arceus'],
	},
	{
		name: "[Gen 4] UU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3503638/\">DPP UU Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431088/\">DPP Sample Teams</a>",
		],
		section: "DPP Singles",

		mod: 'gen4',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber', 'OU', 'BL'],
	},
	{
		name: "[Gen 4] LC",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/dp/articles/little_cup_guide\">DPP LC Guide</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431088/\">DPP Sample Teams</a>",
		],
		section: "DPP Singles",

		mod: 'gen4',
		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Little Cup'],
		banlist: ['Berry Juice', 'DeepSeaTooth', 'Dragon Rage', 'Sonic Boom', 'Meditite', 'Misdreavus', 'Murkrow', 'Scyther', 'Sneasel', 'Tangela', 'Yanma'],
	},
	{
		name: "[Gen 4] Custom Game",
		section: "DPP Singles",

		mod: 'gen4',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions
		ruleset: ['Cancel Mod'],
	},

	// DPP Doubles
	///////////////////////////////////////////////////////////////////

	{
		name: "[Gen 4] Doubles Custom Game",
		section: "DPP Doubles",
		column: 4,

		mod: 'gen4',
		gameType: 'doubles',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions
		ruleset: ['Cancel Mod'],
	},

	// Past Generations
	///////////////////////////////////////////////////////////////////

	{
		name: "[Gen 3] OU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3503019/\">ADV OU Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431087/\">ADV Sample Teams</a>",
		],
		section: "Past Generations",
		column: 4,

		mod: 'gen3',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber', 'Smeargle + Ingrain'],
	},
	{
		name: "[Gen 3] Ubers",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3536426/\">ADV Ubers Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6446466/\">ADV Ubers Sample Teams</a>",
		],
		section: "Past Generations",

		mod: 'gen3',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Wobbuffet + Leftovers'],
	},
	{
		name: "[Gen 3] Custom Game",
		section: "Past Generations",

		mod: 'gen3',
		searchShow: false,
		debug: true,
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 2] OU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3503082/\">GSC OU Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431086/\">GSC Sample Teams</a>",
		],
		section: "Past Generations",

		mod: 'gen2',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber'],
	},
	{
		name: "[Gen 2] Ubers",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3507552/\">GSC Ubers Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431086/\">GSC Sample Teams</a>",
		],
		section: "Past Generations",

		mod: 'gen2',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard'],
	},
	{
		name: "[Gen 2] Random Battle",
		section: "Past Generations",

		mod: 'gen2',
		searchShow: false,
		team: 'random',
		ruleset: ['Pokemon', 'Standard'],
	},
	{
		name: "[Gen 2] Custom Game",
		section: "Past Generations",

		mod: 'gen2',
		searchShow: false,
		debug: true,
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 1] OU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3486845/\">RBY OU Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431045/\">RBY Sample Teams</a>",
		],
		section: "Past Generations",

		mod: 'gen1',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber'],
	},
	{
		name: "[Gen 1] Ubers",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3541329/\">RBY Ubers Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431045/\">RBY Sample Teams</a>",
		],
		section: "Past Generations",

		mod: 'gen1',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard'],
		banlist: [],
	},
	{
		name: "[Gen 1] OU (tradeback)",
		section: "Past Generations",

		mod: 'gen1',
		searchShow: false,
		ruleset: ['Pokemon', 'Sleep Clause Mod', 'Freeze Clause Mod', 'Species Clause', 'OHKO Clause', 'Evasion Moves Clause', 'HP Percentage Mod', 'Cancel Mod'],
		banlist: ['Allow Tradeback', 'Uber', 'Unreleased', 'Illegal',
			'Nidoking + Fury Attack + Thrash', 'Exeggutor + Poison Powder + Stomp', 'Exeggutor + Sleep Powder + Stomp',
			'Exeggutor + Stun Spore + Stomp', 'Jolteon + Focus Energy + Thunder Shock', 'Flareon + Focus Energy + Ember',
		],
	},
	{
		name: "[Gen 1] Random Battle",
		section: "Past Generations",

		mod: 'gen1',
		team: 'random',
		ruleset: ['Pokemon', 'Sleep Clause Mod', 'Freeze Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 1] Challenge Cup",
		section: "Past Generations",

		mod: 'gen1',
		team: 'randomCC',
		searchShow: false,
		ruleset: ['Pokemon', 'Sleep Clause Mod', 'Freeze Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 1] Stadium",
		section: "Past Generations",

		mod: 'stadium',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard', 'Team Preview'],
		banlist: ['Uber',
			'Nidoking + Fury Attack + Thrash', 'Exeggutor + Poison Powder + Stomp', 'Exeggutor + Sleep Powder + Stomp',
			'Exeggutor + Stun Spore + Stomp', 'Jolteon + Focus Energy + Thunder Shock', 'Flareon + Focus Energy + Ember',
		],
	},
	{
		name: "[Gen 1] Custom Game",
		section: "Past Generations",

		mod: 'gen1',
		searchShow: false,
		debug: true,
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod'],
	},

	// TPP League exclusives
	{
		name: "TPPLA",
		section: "TPP",
		mod: 'tppla',
		column: 4,

		ruleset: ['Custom Game', 'Sleep Clause Mod', 'HP Percentage Mod'],
	},
	{
		name: "TPPLA Doubles",
		section: "TPP",
		mod: 'tppla',

		gameType: 'doubles',
		ruleset: ['Custom Game', 'Sleep Clause Mod', 'HP Percentage Mod'],
	},
	{
		name: "TPPLA Triples",
		section: "TPP",
		mod: 'tppla',

		gameType: 'triples',
		ruleset: ['Custom Game', 'Sleep Clause Mod', 'HP Percentage Mod'],
	},
	{
		name: "Super TPPL Bros.",
		section: "STPPLB",
		column: 4,

		mod: 'stpplb',
		searchShow: true,
		team: 'randomtpplb',
		ruleset: ['Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
		onUpdate: function (pokemon) { // called whenever a pokemon changes
			let name = toId(pokemon.name);
			if (pokemon.template.isMega) { // some foolery to give megas their proper ability
				if (name === 'darkfiregamer' && pokemon.getAbility().id === 'solarpower') {
					pokemon.setAbility('darkaura');
				}
				if (name === 'dictatormantis' && pokemon.getAbility().id === 'technician') {
					pokemon.setAbility('Technicality');
				}
				if (name === 'hazorex' && pokemon.getAbility().id !== 'physicalakazam') {
					pokemon.setAbility('Physicalakazam');
				}
			}
		},
		onSwitchInPriority: 1,
		onSwitchIn: function (pokemon) {
			let name = toId(pokemon.illusion ? pokemon.illusion.name : pokemon.name);
			if (pokemon.template.isMega) { // more hackery for mega abilities.
				if (name === 'darkfiregamer' && pokemon.getAbility().id === 'solarpower') {
					pokemon.setAbility('darkaura');
				}
				if (name === 'dictatormantis' && pokemon.getAbility().id === 'technician') {
					pokemon.setAbility('Technicality');
				}
				if (name === 'hazorex' && pokemon.getAbility().id !== 'physicalakazam') {
					pokemon.setAbility('Physicalakazam');
				}
			} else {
				pokemon.canMegaEvo = this.canMegaEvo(pokemon); // Bypass one mega limit.
			}
			if (name === 'somasghost' && !pokemon.illusion) {
				this.add('-start', pokemon, 'typechange', 'Normal/Ghost');
				pokemon.types = ['Normal', 'Ghost'];
			}
			if (name === 'pikalaxalt') {
				this.boost({def:1, spd:1}, pokemon);
			}
			if (name === 'xfix') {
				this.add("c|xfix|YayBot will be updated soon, okay?");
			} else if (name === 'azum4roll') {
				this.add("c|azum4roll|What? I'm just a normal Azumarill.");
			} else if (name === 'lasszeowx') {
				this.add("c|Lass zeowx|Oh, a new challenger?");
			} else if (name === 'kapnkooma') {
				this.add("c|Kap'n Kooma|Hoist the black flag lads!");
			} else if (name === 'kooma9') {
				this.add("c|Kooma9|ello");
			} else if (name === 'best') {
				this.add("raw|<big>GO AWAY</big>");
			} else if (name === 'poomph') {
				this.add("c|Poomph|I'm sure I'll win this time!");
			} else if (name === 'tadpole_0f_doom') {
				this.add("c|Tadpole_0f_Doom|I'm not racist. I own Pokemon Black. TriHard");
			} else if (name === 'trollkitten') {
				this.add("c|TrollKitten|Have time to listen to my lore?");
			} else if (name === 'bigfatmantis') {
				this.add("c|BigFatMantis|gldhf");
			} else if (name === 'nofunmantis') {
				this.add("c|NoFunMantis|gldhf");
			} else if (name === 'dictatormantis') {
				this.add("c|DictatorMantis|Do you even have enough yays to be battling?");
			} else if (name === 'xinc') {
				this.add("c|Xinc|Iwa took Gengar. DansGame");
			} else if (name === 'natsugan') {
				this.add('c|Natsugan|Flygonite when');
			} else if (name === 'pikalaxalt') {
				this.add('c|PikalaxALT|ヽ༼ຈل͜ຈ༽ﾉ RIOT ヽ༼ຈل͜ຈ༽ﾉ');
			} else if (name === 'colewalski') {
				this.add('c|ColeWalski|Allons-y and GERONIMOOO!');
			} else if (name === 'liria10') {
				this.add("c|Liria_10|let's draw all night!");
			} else if (name === 'speedypokson') {
				this.add("c|Speedy Pokson|YOU'RE TOO SLOW!");
			} else {
				this.add('c|' + (pokemon.illusion ? pokemon.illusion.name : pokemon.name) + '|PLACEHOLDER MESSAGE PLEASE CONTACT TIESOUL');
			}
			let item = pokemon.getItem();
			if (pokemon.isActive && !pokemon.template.isMega && !pokemon.template.isPrimal && (item.id === 'redorb' || item.id === 'blueorb') && pokemon.baseTemplate.tier !== 'Uber' && !pokemon.template.evos.length) {
				// Primal Reversion
				let bannedMons = {'Kyurem-Black':1, 'Slaking':1, 'Regigigas':1, 'Cresselia':1, 'Shuckle':1};
				if (!(pokemon.baseTemplate.baseSpecies in bannedMons)) {
					let template = this.getMixedTemplate(pokemon.originalSpecies, item.id === 'redorb' ? 'Groudon-Primal' : 'Kyogre-Primal');
					pokemon.formeChange(template);
					pokemon.baseTemplate = template;

					// Do we have a proper sprite for it?
					if (pokemon.originalSpecies === (item.id === 'redorb' ? 'Groudon' : 'Kyogre')) {
						pokemon.details = template.species + (pokemon.level === 100 ? '' : ', L' + pokemon.level) + (pokemon.gender === '' ? '' : ', ' + pokemon.gender) + (pokemon.set.shiny ? ', shiny' : '');
						this.add('detailschange', pokemon, pokemon.details);
					} else {
						let oTemplate = this.getTemplate(pokemon.originalSpecies);
						this.add('-formechange', pokemon, oTemplate.species, template.requiredItem);
						this.add('-start', pokemon, this.getTemplate(template.originalMega).requiredItem, '[silent]');
						if (oTemplate.types.length !== pokemon.template.types.length || oTemplate.types[1] !== pokemon.template.types[1]) {
							this.add('-start', pokemon, 'typechange', pokemon.template.types.join('/'), '[silent]');
						}
					}
					this.add('message', pokemon.name + "'s " + pokemon.getItem().name + " activated!");
					this.add('message', pokemon.name + "'s Primal Reversion! It reverted to its primal form!");
					pokemon.setAbility(template.abilities['0']);
					pokemon.baseAbility = pokemon.ability;
					pokemon.canMegaEvo = false;
				}
			} else {
				let oMegaTemplate = this.getTemplate(pokemon.template.originalMega);
				if (oMegaTemplate.exists && pokemon.originalSpecies !== oMegaTemplate.baseSpecies) {
					// Place volatiles on the Pokémon to show its mega-evolved condition and details
					this.add('-start', pokemon, oMegaTemplate.requiredItem || oMegaTemplate.requiredMove, '[silent]');
					let oTemplate = this.getTemplate(pokemon.originalSpecies);
					if (oTemplate.types.length !== pokemon.template.types.length || oTemplate.types[1] !== pokemon.template.types[1]) {
						this.add('-start', pokemon, 'typechange', pokemon.template.types.join('/'), '[silent]');
					}
				}
			}
		},

		onSwitchOut: function (pokemon) {
			let oMegaTemplate = this.getTemplate(pokemon.template.originalMega);
			if (oMegaTemplate.exists && pokemon.originalSpecies !== oMegaTemplate.baseSpecies) {
				this.add('-end', pokemon, oMegaTemplate.requiredItem || oMegaTemplate.requiredMove, '[silent]');
			}
		},

		onFaint: function (pokemon) { // PJSalt-y faint messages go here.
			let name = toId(pokemon.name);
			if (name === 'xfix') {
				this.add("c|xfix|I'm not going to update YayBot if you defeat me like that...");
			} else if (name === 'azum4roll') {
				this.add("c|azum4roll|This game doesn't have enough glitches!");
			} else if (name === 'lasszeowx') {
				this.add("c|Lass zeowx|When can I beat TPPLA BibleThump");
			} else if (name === 'kapnkooma') {
				this.add("c|Kap'n Kooma|Avast! I be needing a pint of grog after this.");
			} else if (name === 'kooma9') {
				this.add("c|Kooma9|Most Disappointing Player 2015");
			} else if (name === 'best') {
				this.add("raw|<big>BEST? FALLED</big>");
			} else if (name === 'poomph') {
				this.add("c|Poomph|0/4 again. DansGame");
			} else if (name === 'tadpole_0f_doom') {
				this.add("c|Tadpole_0f_Doom|You'll never take me alive!");
			} else if (name === 'trollkitten') {
				this.add("c|TrollKitten|I need time away from the sub to clear my head after this.");
			} else if (name === 'bigfatmantis') {
				this.add("c|BigFatMantis|GGioz");
			} else if (name === 'nofunmantis') {
				this.add("c|NoFunMantis|GGCtrl27");
			} else if (name === 'dictatormantis') {
				this.add("c|DictatorMantis|bg DansGame");
			} else if (name === 'xinc') {
				this.add("c|Xinc|Bruh");
			} else if (name === 'natsugan') {
				this.add('c|Natsugan|hax imo');
			} else if (name === 'pikalaxalt') {
				this.add('c|PikalaxALT|Wow Deku OneHand');
			} else if (name === 'colewalski') {
				this.add('c|ColeWalski|Dced again');
			} else if (name === 'liria10') {
				this.add('c|Liria_10|why is art so difficult ;_;');
			} else if (name === 'speedypokson') {
				this.add("c|Speedy Pokson|C'MON, STEP IT UP!");
			}
		},
		onBegin: function () {
			// Mix and Mega stuff
			let allPokemon = this.p1.pokemon.concat(this.p2.pokemon);
			for (let i = 0, len = allPokemon.length; i < len; i++) {
				let pokemon = allPokemon[i];
				pokemon.originalSpecies = pokemon.baseTemplate.species;
			}
			this.add('-message', "STPPLB wiki with all Pokemon descriptions: https://www.reddit.com/r/TPPLeague/wiki/stpplb");
		},
	},

	{
		name: 'Super Glitch',
		section: 'STPPLB',
		column: 2,
		searchShow: true,
		mod: 'stpplb',
		ruleset: ['Super Glitch Clause', 'HP Percentage Mod', 'Species Clause', 'Cancel Mod', 'No Switching Clause', 'No Recycle Clause', 'Ability Clause', 'Team Preview'],
		banlist: ['No Fun Allowed', 'Wonder Guard', 'Physicalakazam', 'Defiant Plus', 'Messiah', 'Cursed Body', 'Moody', 'Little Engine', 'Unnerve', 'Magician', 'Pickpocket', 'Imposter', 'Iron Barbs', 'Rough Skin'],
		maxLevel: 100,
		defaultLevel: 100,

		onSwitchInPriority: 1,
		onSwitchIn: function (pokemon) {
			let item = pokemon.getItem();
			if (pokemon.isActive && !pokemon.template.isMega && !pokemon.template.isPrimal && (item.id === 'redorb' || item.id === 'blueorb') && pokemon.baseTemplate.tier !== 'Uber' && !pokemon.template.evos.length) {
				// Primal Reversion
				let bannedMons = {'Kyurem-Black':1, 'Slaking':1, 'Regigigas':1, 'Cresselia':1, 'Shuckle':1};
				if (!(pokemon.baseTemplate.baseSpecies in bannedMons)) {
					let template = this.getMixedTemplate(pokemon.originalSpecies, item.id === 'redorb' ? 'Groudon-Primal' : 'Kyogre-Primal');
					pokemon.formeChange(template);
					pokemon.baseTemplate = template;

					// Do we have a proper sprite for it?
					if (pokemon.originalSpecies === (item.id === 'redorb' ? 'Groudon' : 'Kyogre')) {
						pokemon.details = template.species + (pokemon.level === 100 ? '' : ', L' + pokemon.level) + (pokemon.gender === '' ? '' : ', ' + pokemon.gender) + (pokemon.set.shiny ? ', shiny' : '');
						this.add('detailschange', pokemon, pokemon.details);
					} else {
						let oTemplate = this.getTemplate(pokemon.originalSpecies);
						this.add('-formechange', pokemon, oTemplate.species, template.requiredItem);
						this.add('-start', pokemon, this.getTemplate(template.originalMega).requiredItem, '[silent]');
						if (oTemplate.types.length !== pokemon.template.types.length || oTemplate.types[1] !== pokemon.template.types[1]) {
							this.add('-start', pokemon, 'typechange', pokemon.template.types.join('/'), '[silent]');
						}
					}
					this.add('message', pokemon.name + "'s " + pokemon.getItem().name + " activated!");
					this.add('message', pokemon.name + "'s Primal Reversion! It reverted to its primal form!");
					pokemon.setAbility(template.abilities['0']);
					pokemon.baseAbility = pokemon.ability;
					pokemon.canMegaEvo = false;
				}
			} else {
				let oMegaTemplate = this.getTemplate(pokemon.template.originalMega);
				if (oMegaTemplate.exists && pokemon.originalSpecies !== oMegaTemplate.baseSpecies) {
					// Place volatiles on the Pokémon to show its mega-evolved condition and details
					this.add('-start', pokemon, oMegaTemplate.requiredItem || oMegaTemplate.requiredMove, '[silent]');
					let oTemplate = this.getTemplate(pokemon.originalSpecies);
					if (oTemplate.types.length !== pokemon.template.types.length || oTemplate.types[1] !== pokemon.template.types[1]) {
						this.add('-start', pokemon, 'typechange', pokemon.template.types.join('/'), '[silent]');
					}
				}
			}
		},

		onBegin: function () {
			// Mix and Mega stuff
			let allPokemon = this.p1.pokemon.concat(this.p2.pokemon);
			for (let i = 0, len = allPokemon.length; i < len; i++) {
				let pokemon = allPokemon[i];
				pokemon.originalSpecies = pokemon.baseTemplate.species;
			}
			this.add('-message', "STPPLB wiki with all ability descriptions: https://www.reddit.com/r/TPPLeague/wiki/stpplb");
		},
	},

	{
		name: 'Snowball Fight',
		section: 'TPP League',
		column: 4,
		ruleset: ['Ubers'],
		banlist: [],
		mod: 'snowballfight',
		onValidateSet: function (set) {
			set.moves.push('fling');
		},
		onBeforeTurn: function () {
			if (!this.p1.snowballs) {
				this.p1.snowballs = 0;
			}
			if (!this.p2.snowballs) {
				this.p2.snowballs = 0;
			}
		},
		onFaintPriority: 100,
		onFaint: function (pokemon) {
			if (pokemon.side.pokemonLeft === 1) {
				if (this.p1.snowballs > this.p2.snowballs) {
					this.win(this.p1);
				} else if (this.p2.snowballs > this.p1.snowballs) {
					this.win(this.p2);
				}
			}
		},
	},

	{
		name: "Uber Tier Shift",
		desc: [
			"Pok&eacute;mon get all their stats boosted/nerfed according to tiers. Uber get -5, UU/BL2 get +5, RU/BL3 get +10, NU/BL4 get +15, PU get +20, and FU and lower get +25.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3554765/\">Tier Shift</a>",
		],
		section: "Kappa Cup Season 3",
		column: 4,

		mod: 'ubertiershift',
		ruleset: ['Ubers'],
		banlist: [],
	},
	{
		name: "Mix and Mega Doubles",
		section: "Kappa Cup Season 3",

		mod: 'mixandmega',
		gameType: 'doubles',
		ruleset: ['Doubles Ubers'],
		banlist: ['Gengarite', 'Shadow Tag', 'Dynamic Punch', 'Zap Cannon', 'Electrify'],
		onValidateTeam: function (team, format) {
			let itemTable = {};
			for (let i = 0; i < team.length; i++) {
				let item = this.getItem(team[i].item);
				if (!item) continue;
				if (itemTable[item] && item.megaStone) return ["You are limited to one of each Mega Stone.", "(You have more than one " + this.tools.getItem(item).name + ")"];
				if (itemTable[item] && (item.id === 'redorb' || item.id === 'blueorb')) return ["You are limited to one of each Primal Orb.", "(You have more than one " + this.tools.getItem(item).name + ")"];
				itemTable[item] = true;
			}
		},
		onValidateSet: function (set) {
			let template = this.getTemplate(set.species || set.name);
			let item = this.getItem(set.item);
			if (!item.megaEvolves && item.id !== 'blueorb' && item.id !== 'redorb') return;
			if (template.baseSpecies === item.megaEvolves || (item.id === 'redorb' && template.baseSpecies === 'Groudon') || (item.id === 'blueorb' && template.baseSpecies === 'Kyogre')) return;
			if (template.evos.length) return ["" + template.species + " is not allowed to hold " + item.name + " because it's not fully evolved."];
			if (template.tier === 'Uber') return ["" + template.species + " is not allowed to hold " + item.name + " because it's in the Uber tier."];
			if (template.species === 'Shuckle' && ['abomasite', 'aggronite', 'audinite', 'cameruptite', 'charizarditex', 'charizarditey', 'galladite', 'gyaradosite', 'heracronite', 'houndoominite', 'latiasite', 'mewtwonitey', 'sablenite', 'salamencite', 'scizorite', 'sharpedonite', 'slowbronite', 'steelixite', 'tyranitarite', 'venusaurite'].indexOf(item.id) >= 0) {
				return ["" + template.species + " is not allowed to hold " + item.name + "."];
			}
			let bannedMons = {'Cresselia':1, 'Dragonite':1, 'Kyurem-Black':1, 'Lucario':1, 'Slaking':1, 'Smeargle':1, 'Regigigas':1};
			if (template.species in bannedMons) {
				return ["" + template.species + " is not allowed to hold a Mega Stone."];
			}
			let powerAbilities = {'Huge Power':1, 'Pure Power':1};
			let allowedPower = false;
			switch (item.id) {
			case 'beedrillite': case 'kangaskhanite':
				return ["" + item.name + " can only allowed be held by " + item.megaEvolves + "."];
			case 'blazikenite':
				if (set.ability !== 'Speed Boost') return ["" + template.species + " is not allowed to hold " + item.name + "."];
				break;
			case 'mawilite': case 'medichamite':
				if (powerAbilities.hasOwnProperty(set.ability)) break;
				if (!template.otherFormes) return ["" + template.species + " is not allowed to hold " + item.name + "."];
				for (let i = 0; i < template.otherFormes.length; i++) {
					let altTemplate = this.getTemplate(template.otherFormes[i]);
					if ((altTemplate.isMega || altTemplate.isPrimal) && powerAbilities.hasOwnProperty(altTemplate.abilities['0'])) {
						allowedPower = true;
						break;
					}
				}
				if (!allowedPower) return ["" + template.species + " is not allowed to hold " + item.name + "."];
				break;
			case 'mewtwonitey':
				if (template.baseStats.def <= 20) return ["" + template.species + " does not have enough Defense to hold " + item.name + "."];
				break;
			case 'diancite':
				if (template.baseStats.def <= 40 || template.baseStats.spd <= 40) return ["" + template.species + " does not have enough Def. or Sp. Def. to hold " + item.name + "."];
				break;
			case 'slowbronite':
				if (template.baseStats.def > 185) return ["" + template.species + " is not allowed to hold " + item.name + "."];
				break;
			case 'ampharosite': case 'garchompite': case 'heracronite':
				if (template.baseStats.spe <= 10) return ["" + template.species + " does not have enough Speed to hold " + item.name + "."];
				break;
			case 'cameruptite':
				if (template.baseStats.spe <= 20) return ["" + template.species + " does not have enough Speed to hold " + item.name + "."];
				break;
			case 'abomasite': case 'sablenite':
				if (template.baseStats.spe <= 30) return ["" + template.species + " does not have enough Speed to hold " + item.name + "."];
				break;
			}
		},
		onBegin: function () {
			let allPokemon = this.p1.pokemon.concat(this.p2.pokemon);
			for (let i = 0, len = allPokemon.length; i < len; i++) {
				let pokemon = allPokemon[i];
				pokemon.originalSpecies = pokemon.baseTemplate.species;
			}
		},
		onSwitchInPriority: -6,
		onSwitchIn: function (pokemon) {
			let item = pokemon.getItem();
			if (pokemon.isActive && !pokemon.template.isMega && !pokemon.template.isPrimal && (item.id === 'redorb' || item.id === 'blueorb') && pokemon.baseTemplate.tier !== 'Uber' && !pokemon.template.evos.length) {
				// Primal Reversion
				let bannedMons = {'Cresselia':1, 'Dragonite':1, 'Kyurem-Black':1, 'Lucario':1, 'Regigigas':1, 'Slaking':1, 'Smeargle':1};
				if (!(pokemon.baseTemplate.baseSpecies in bannedMons)) {
					let template = this.getMixedTemplate(pokemon.originalSpecies, item.id === 'redorb' ? 'Groudon-Primal' : 'Kyogre-Primal');
					pokemon.formeChange(template);
					pokemon.baseTemplate = template;

					// Do we have a proper sprite for it?
					if (pokemon.originalSpecies === (item.id === 'redorb' ? 'Groudon' : 'Kyogre')) {
						pokemon.details = template.species + (pokemon.level === 100 ? '' : ', L' + pokemon.level) + (pokemon.gender === '' ? '' : ', ' + pokemon.gender) + (pokemon.set.shiny ? ', shiny' : '');
						this.add('detailschange', pokemon, pokemon.details);
					} else {
						let oTemplate = this.getTemplate(pokemon.originalSpecies);
						this.add('-formechange', pokemon, oTemplate.species, template.requiredItem);
						this.add('-start', pokemon, this.getTemplate(template.originalMega).requiredItem, '[silent]');
						if (oTemplate.types.length !== pokemon.template.types.length || oTemplate.types[1] !== pokemon.template.types[1]) {
							this.add('-start', pokemon, 'typechange', pokemon.template.types.join('/'), '[silent]');
						}
					}
					this.add('message', pokemon.name + "'s " + pokemon.getItem().name + " activated!");
					this.add('message', pokemon.name + "'s Primal Reversion! It reverted to its primal form!");
					pokemon.setAbility(template.abilities['0']);
					pokemon.baseAbility = pokemon.ability;
					pokemon.canMegaEvo = false;
				}
			} else {
				let oMegaTemplate = this.getTemplate(pokemon.template.originalMega);
				if (oMegaTemplate.exists && pokemon.originalSpecies !== oMegaTemplate.baseSpecies) {
					// Place volatiles on the Pokémon to show its mega-evolved condition and details
					this.add('-start', pokemon, oMegaTemplate.requiredItem || oMegaTemplate.requiredMove, '[silent]');
					let oTemplate = this.getTemplate(pokemon.originalSpecies);
					if (oTemplate.types.length !== pokemon.template.types.length || oTemplate.types[1] !== pokemon.template.types[1]) {
						this.add('-start', pokemon, 'typechange', pokemon.template.types.join('/'), '[silent]');
					}
				}
			}
		},
		onSwitchOut: function (pokemon) {
			let oMegaTemplate = this.getTemplate(pokemon.template.originalMega);
			if (oMegaTemplate.exists && pokemon.originalSpecies !== oMegaTemplate.baseSpecies) {
				this.add('-end', pokemon, oMegaTemplate.requiredItem || oMegaTemplate.requiredMove, '[silent]');
			}
		},
	},
	{
		name: "Uber Alphabet Cup",
		section: "Kappa Cup Season 3",

		searchShow: false,
		ruleset: ['Pokemon', 'Team Preview', 'Standard'],
		banlist: ['Swoobat', 'Ignore Alphabet Moves'],
		onValidateTeam: function (team, format) {
			let letters = {};
			let letter = '';
			for (let i = 0; i < team.length; i++) {
				letter = Tools.getTemplate(team[i]).species.slice(0, 1).toUpperCase();
				if (letter in letters) return ['Your team cannot have more that one Pokémon starting with the letter "' + letter + '".'];
				letters[letter] = 1;
			}
		},
	},
	{
		name: "Ubers Got Talent",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3569554/\">Got Talent</a>"],
		section: "Kappa Cup Season 3",

		mod: 'gottalent',
		ruleset: ['Ubers'],
		banlist: ['Shuckle', 'Speed Boost'],
	},
	{
		name: "Cross Evolution+",
		section: "Kappa Cup Season 3",

		mod: 'crossevolution',
		ruleset: ['Sleep Clause Mod', 'Species Clause', 'OHKO Clause', 'Moody Clause', 'Evasion Moves Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview'],
		banlist: ['Unreleased', 'Shadow Tag', 'Soul Dew'],
		onValidateTeam: function (team) {
			let nameTable = {};
			for (let i = 0; i < team.length; i++) {
				let name = team[i].name;
				if (name) {
					if (name === team[i].species) continue;
					// This also takes care of cross-evolving to the same target more than once
					if (nameTable[name]) {
						return ["Your Pok&eacute;mon must have different nicknames.", "(You have more than one " + name + ")"];
					}
					nameTable[name] = true;
				}
			}
		},
		onValidateSet: function (set) {
			if (!set.name || set.name === set.species) return;
			if (toId(set.name) === 'gyarados' || toId(set.name) === 'shedinja') return ["Cross evolution with " + set.name + " is banned."];
			if (set.species === 'Scyther' || set.species === 'Sneasel' || set.species === 'Archen') return ["" + set.species + " cannot cross evolve."];

			// That was the easy checks done
			let template = this.getTemplate(set.species);
			template = this.getTemplate(template.baseSpecies);
			if (!template.evos.length) return ["" + set.species + " cannot cross evolve because it doesn't evolve."];
			let crossTemplate = this.getTemplate(set.name);
			if (!crossTemplate.exists) return;
			let crossPrevoTemplate = this.getTemplate(crossTemplate.prevo);

			// Figure out which stage evolution we're dealing with (how many pre-evolution stages are there)
			let setStage = 1, crossStage = 1;
			if (template.prevo) {
				setStage++;
				if (this.getTemplate(template.prevo).prevo) {
					setStage++;
				}
			}
			if (crossTemplate.prevo) {
				crossStage++;
				if (crossPrevoTemplate.prevo) {
					crossStage++;
				}
			}
			if (setStage + 1 !== crossStage) return ["Cross evolution must follow evolutionary stages.", "(" + set.species + " is Stage " + setStage + " and can only cross evolve to Stage " + (setStage + 1) + ")"];

			// Make sure no stat is too high/low to cross evolve to
			let stats = {'hp': 'HP', 'atk': 'Attack', 'def': 'Defense', 'spa': 'Special Attack', 'spd': 'Special Defense', 'spe': 'Speed'};
			let statDelta = 0, evoStat = 0;
			for (let statid in crossTemplate.baseStats) {
				statDelta = crossTemplate.baseStats[statid] - crossPrevoTemplate.baseStats[statid];
				evoStat = template.baseStats[statid] + statDelta;
				if (evoStat < 1) {
					return ["" + set.species + " cannot cross evolve to " + set.name + " because its " + stats[statid] + " is too low."];
				} else if (evoStat > 255) {
					return ["" + set.species + " cannot cross evolve to " + set.name + " because its " + stats[statid] + " is too high."];
				}
			}

			// Ability test
			let canHaveAbility = false;
			for (let a in crossTemplate.abilities) {
				if (crossTemplate.abilities[a] === set.ability) {
					canHaveAbility = true;
				}
			}
			let restrictedAbilities = ['Huge Power', 'Pure Power'];
			for (let i = 0; i < restrictedAbilities.length; i++) {
				let restrictedAbility = restrictedAbilities[i];
				if (set.ability === restrictedAbility) {
					// Retest for illegal ability
					canHaveAbility = false;
					let abilities = Object.keys(template.abilities);
					for (let i in abilities) {
						if (template.abilities[i] === restrictedAbility) {
							canHaveAbility = true;
						}
					}
				}
			}
			if (!canHaveAbility) return ["" + set.species + " cannot use " + set.ability + " when cross evolved."];

			// Movepool (We can't rely on 'Illegal' learnset for the learnset test)
			// This test isn't reliable for compability, but we can't rely on it anyway
			// because ability incompabilities. So we end up with a fairly poor test that makes
			// sure that the Pokemon at least learn the moves it doesn't inherit `sometime`.

			let added = {};
			// These will have loads of duplicates, but it's okay
			let standardMovepool = [];
			let crossMovepool = [];
			do {
				added[template.species] = true;
				standardMovepool = standardMovepool.concat(Object.keys(template.learnset));
				if (template.prevo) {
					template = this.getTemplate(template.prevo);
				}
			} while (template && template.species && !added[template.species]);
			do {
				added[crossTemplate.species] = true;
				crossMovepool = crossMovepool.concat(Object.keys(crossTemplate.learnset));
				if (crossTemplate.prevo) {
					crossTemplate = this.getTemplate(crossTemplate.prevo);
				}
			} while (crossTemplate && crossTemplate.species && !added[crossTemplate.species]);
			let problems = [];
			let newMoves = 0;
			for (let i in set.moves) {
				let move = toId(set.moves[i]);
				if (move.substr(0, 11) === 'hiddenpower') move = 'hiddenpower'; // Really big hack :(
				if (crossMovepool.indexOf(move) >= 0 && standardMovepool.indexOf(move) < 0) {
					newMoves++;
				} else if (standardMovepool.indexOf(move) < 0) {
					problems.push(set.species + " cannot learn " + set.moves[i] + ".");
				}
			}
			if (newMoves > 2) return ["You can only gain 2 Moves from the cross evolution.", "(" + set.species + " has gained " + newMoves + " moves.)"];
			if (problems) return problems;
		},
		onSwitchInPriority: 1,
		onSwitchIn: function (pokemon) {
			if (pokemon.crossEvolved) {
				this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
			}
		},
	},
	{
		name: "Trademarked-EX",
		section: "Kappa Cup Season 3",

		mod: 'trademark',
		ruleset: ['Ubers'],
		banlist: ['Ignore Illegal Abilities'],

		onValidateSet: function (set) {
			let bannedTrademarks = [
				'Block', 'Mean Look', 'Spider Web', 'Nature Power', 'Heal Pulse', 'Confuse Ray',
				'Flatter', 'Swagger', 'Teeter Dance', 'Supersonic', 'Sweet Kiss', 'Detect', 'Copycat',
				'Destiny Bond', 'Me First', 'Mimic', 'Mirror Move', 'Sketch',
			];
			let move = this.getMove(set.ability);
			if (!move.exists) {
				let abilities = this.getTemplate(set.species).abilities;
				let legalAbility = false;
				for (let a in abilities) {
					if (abilities[a] === set.ability) {
						legalAbility = true;
					}
				}
				return !legalAbility ? ['' + set.species + ' cannot have ' + set.ability] : [];
			}
			if (bannedTrademarks.includes(move.name)) {
				return [move.name + ' is a banned trademark.', '(' + set.species + ' has ' + move.name + ' as a trademark.)'];
			}
			if (set.species === 'Slaking' || set.species === 'Regigigas' || this.getTemplate(set.species).tier === 'Uber') {
				return [set.species + ' can\'t use trademarked moves.', '(' + set.species + ' has ' + move.name + '.)'];
			}
			if (move.name === 'Roar' || move.name === 'Whirlwind') return ['' + set.species + ' has an illegal trademark ability', '(' + move.name + ' is not allowed as a trademark ability)'];
			if (move.category !== 'Status') return ['You can only trademark status moves', '(' + set.species + '\'s trademark is ' + move.name + ')'];
			if (set.moves.indexOf(move.name) >= 0) return ['You cannot use a move that is trademarked', '(' + set.species + ' has ' + move.name + ' as ability and a move)'];

			let template = this.getTemplate(set.species);
			template = this.getTemplate(template.baseSpecies);
			let added = {};
			let canLearn = set.species === 'Smeargle';
			do {
				// We don't care for how it obtains the move as long as the Pokemon learns it
				added[template.species] = true;
				if (template.learnset[move.id]) {
					canLearn = true;
					break;
				}
				if (template.prevo) {
					template = this.getTemplate(template.prevo);
				}
			} while (template && template.species && !added[template.species]);
			if (!canLearn) {
				return ['' + set.species + ' cannot learn ' + move.name];
			}
		},
	},
	{
		name: 'Classic Stat Switch',
		section: 'Kappa Cup Season 3',

		mod: 'classicstatswitch',
		ruleset: ['Ubers'],
		banlist: ['Azumarill', 'Regirock', 'Regice', 'Mawilite', 'Diancite'],
		onModifyMove: function (move) {
			let physicalTypes = [
				'Normal', 'Fighting', 'Flying', 'Ground', 'Rock', 'Bug',
				'Ghost', 'Poison', 'Steel',
			];
			if (physicalTypes.includes(move.type)) {
				move.category = "Physical";
			} else {
				move.category = "Special";
			}
		},
		onModifyMovePriority: -100,
	},
	{
		name: "Hidden Type",
		desc: [
			"Pok&eacute;mon have an added type determined by their IVs. Same as the Hidden Power type.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3516349/\">Hidden Type</a>",
		],
		section: "Kappa Cup Season 3",

		searchShow: false,
		mod: 'hiddentype',
		ruleset: ['OU'],
	},
];
let stpplb;
let stpplbi;
for (let i = 0; i < exports.Formats.length; i++) {
	if (exports.Formats[i].name === 'Super TPPL Bros.') {
		stpplb = exports.Formats[i];
		stpplbi = i;
	}
}
if (stpplb) {
	exports.Formats.splice(stpplbi + 1, 0, {
		name: "Super TPPL Bros. Plus",
		section: "STPPLB",

		mod: 'stpplb',
		searchShow: true,
		team: 'randomtpplbp',
		ruleset: ['Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
		onUpdate: stpplb.onUpdate,
		onModifyMove: stpplb.onModifyMove,
		onSwitchInPriority: 1,
		onSwitchIn: stpplb.onSwitchIn,
		onFaint: stpplb.onFaint,
		onBegin: stpplb.onBegin,
	}, {
		name: "Super TPP Bros.",
		section: "STPPLB",

		mod: 'stpplb',
		searchShow: true,
		team: 'randomtppb',
		ruleset: ['Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
		onUpdate: stpplb.onUpdate,
		onModifyMove: stpplb.onModifyMove,
		onSwitchInPriority: 1,
		onSwitchIn: stpplb.onSwitchIn,
		onFaint: stpplb.onFaint,
		onBegin: stpplb.onBegin,
	}, {
		name: "Super TPPL Bros. Testing",
		section: "STPPLB",

		mod: 'stpplb',
		searchShow: false,
		ruleset: ['Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview'],
		onUpdate: stpplb.onUpdate,
		onModifyMove: stpplb.onModifyMove,
		onSwitchInPriority: 1,
		onSwitchIn: stpplb.onSwitchIn,
		onFaint: stpplb.onFaint,
		onBegin: stpplb.onBegin,
	});
}
