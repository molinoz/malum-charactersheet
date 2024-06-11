import { roll } from 'dnd5e-dice-roller';
import { pow } from '../../../components/baseSystem/pow';

export const malum = {
	roll: {
		d20: (mod) => {
			return roll("d20") + mod
		},
	},
	minRoll: {
		d20: (mod) => {
			let roll = roll("d20");
			roll = (roll<=5) ? roll=5 : roll;
			return roll + mod;
		}
	},
	feature: {
		add: (destination, feature) => {},
		remove: (destination, feature) => {},
	},
	collect: {
		values: (container, prop) => {},
		list: (container, prop) => {},
	},
	update: {
		info: {
			file: (character, updateCharacter, event) => {
				updateCharacter({...character, info: {...character.info, file: event.target.value}});
			},
			img: (character, updateCharacter, event) => {
				updateCharacter({...character, info: {...character.info, img: event.target.value}});
			},
			fullName: (character, updateCharacter, event) => {
				updateCharacter({...character, info: {...character.info, fullName: event.target.value}});
			},
			creator: (character, updateCharacter, event) => {
				updateCharacter({...character, info: {...character.info, creator: event.target.value}});
			},
			origin: (character, updateCharacter, event) => {
				updateCharacter({...character, info: {...character.info, choices:{...character.info.choices, origin: event.target.value}}});
			},
			history: (character, updateCharacter, event) => {
				updateCharacter({...character, info: {...character.info, choices:{...character.info.choices, history: event.target.value}}});
			},
			sign: (character, updateCharacter, event) => {
				updateCharacter({...character, info: {...character.info, choices:{...character.info.choices, sign: event.target.value}}});
			},
			card: (character, updateCharacter, event) => {
				updateCharacter({...character, info: {...character.info, choices:{...character.info.choices, card: event.target.value}}});
			},
			playerArchetype: (character, updateCharacter, event) => {
				updateCharacter({...character, info: {...character.info, choices:{...character.info.choices, playerArchetype: event.target.value}}});
			},
			classLvl: (character, updateCharacter, event) => {
				updateCharacter({...character, info: {...character.info, choices:{...character.info.choices, classLvl: event.target.value}}});
			},
			age: (character, updateCharacter, event) => {
				updateCharacter({...character, info: {...character.info, description:{...character.info.description, age: event.target.value}}});
			},
			height: (character, updateCharacter, event) => {
				updateCharacter({...character, info: {...character.info, description:{...character.info.description, height: event.target.value}}});
			},
			weight: (character, updateCharacter, event) => {
				updateCharacter({...character, info: {...character.info, description:{...character.info.description, weight: event.target.value}}});
			},
			organizations: (character, updateCharacter, event) => {
				updateCharacter({...character, info: {...character.info, relations:{...character.info.relations, organizations: event.target.value}}});
			},
			allies: (character, updateCharacter, event) => {
				updateCharacter({...character, info: {...character.info, relations:{...character.info.relations, allies: event.target.value}}});
			},
			enemies: (character, updateCharacter, event) => {
				updateCharacter({...character, info: {...character.info, relations:{...character.info.relations, enemies: event.target.value}}});
			},
			note: (character, updateCharacter, event) => {
				updateCharacter({...character, info: {...character.info, note: event.target.value}});
			},
		},
		attri:{
			stats:{
				inc: (character, value, stat) => {
					console.log('event value received:',value)
					return {...character, attri: {...character.attri, stats:{...character.attri.stats, [stat]: {...character.attri.stats[stat], inc: value}}}};
				},
				incCost: (character, value, stat) => {
					return {...character, attri: {...character.attri, stats:{...character.attri.stats, [stat]: {...character.attri.stats[stat], incCost: value}}}};
				},
				score: (character, value, stat) => {
					return {...character, attri: {...character.attri, stats:{...character.attri.stats, [stat]: {...character.attri.stats[stat], score: value}}}};
				},
				mod: (character, value, stat) => {
					return {...character, attri: {...character.attri, stats:{...character.attri.stats, [stat]: {...character.attri.stats[stat], mod: value}}}};
				},
				totalMod: (character, value, stat) => {
					return {...character, attri: {...character.attri, stats:{...character.attri.stats, [stat]: {...character.attri.stats[stat], totalMod: value}}}};
				}
			},
			skills: {
				level: (character, category, value, skill) => {
					let newChar = {...character};
					newChar.attri.skills[category][skill].level = value;
					return newChar;
				},
				mod: (character, category, value, skill) => {
					let newChar = {...character};
					newChar.attri.skills[category][skill].totalMod = value;
					return newChar;
				},
				cost: (character, category, value, skill) => {
					let newChar = {...character};
					newChar.attri.skills[category][skill].levelCost = value;
					return newChar;
				},
			}
		},
	},
	remove: {
		organizations: (event) => {},
		allies: (event) => {},
		enemies: (event) => {},
	},
	use: {
		stat: {
			mod: (character, stat) => {
				return character.attri.stats[stat].totalMod
			},
			full:  (character, stat) => {
				return character.attri.stats[stat].full
			},
			short:  (character, stat) => {
				return character.attri.stats[stat].short
			},
			score:  (character, stat) => {
				return character.attri.stats[stat].score
			},
		},
		training: {
			level: {
				"U": {
					full: "Untrained",
					mod: 0,
					cost: 0,
				},
				"T": {
					full: "Trained",
					mod: 0,
					cost: 0,
				},
				"N": {
					full: "Novice",
					mod: 1,
					cost: 2,
				},
				"A": {
					full: "Apprentice",
					mod: 2,
					cost: 4,
				},
				"I": {
					full: "Intermediate",
					mod: 3,
					cost: 6,
				},
				"E": {
					full: "Expert",
					mod: 4,
					cost: 8,
				},
				"M": {
					full: "Master",
					mod: 5,
					cost: 10,
				},
				"G": {
					full: "Grandmaster",
					mod: 6,
					cost: 12,
				},
			},
			numToLvl: (lvl) => {
				let training = '';
				switch (lvl) {
					case 0:
						training = 'U';
						break;
					case 1:
						training = 'T';
						break;
					case 2:
						training = 'N';
						break;
					case 3:
						training = 'A';
						break;
					case 4:
						training = 'I';
						break;
					case 5:
						training = 'E';
						break;
					case 6:
						training = 'M';
						break;
					case 7:
						training = 'G';
						break;
									
				}
				return training
			},
			full: (system, lvl) => {
				return this[system].rules.training.level[lvl].full
			},
			mod: (lvl) => {
				return malum.use.training.level[lvl].mod
			},
			roll: (system, lvl) => {
				return this[system].rules.training.level[lvl].roll
			},
			cost: (lvl) => {
				return malum.use.training.level[lvl].cost
			},
		},
	},
	get: {
		stats: {
			ASI: (character) => {
				let base = character.attri.baseASI;
				let spent = character.attri.stats;
				let gained = 0;
				return base + gained - spent;
			},
			score: (character,stat) => {
				let inc = character.attri.stats[stat].inc;
				let base = character.attri.stats[stat].baseScore;
				return base + inc;
			},
			incCost: (inc) => {
				inc = parseInt(inc)
				return inc<5?inc:(((inc-4)*2)+4);
			},
			baseMod: (character,stat) => {
				let score = character.attri.stats[stat].score;
				return Math.floor( (score - 10) / 2 );
			},
			mod: (character,stat) => {
				return character.attri.stats[stat].totalMod;
			},
			roll: (character,stat) => {
				let mod = character.attri.stats[stat].mod;
				return test.roll.d20(mod);
			}
		},
		skills: {
			SPI: (character) => {},
			totalMod: (character,skill) => {
				return character.attri.skills[skill].totalMod
			},
			trainingMod: (character, skill) => {
				let training = character.attri.skills[skill].training;
				return test.use.training.mod(training);
			},
			trainingFull: (character, skill) => {
				let training = character.attri.skills[skill].training;
				return test.use.training.full(training);
			},
			trainingCost: (character, skill) => {
				let training = character.attri.skills[skill].training;
				return test.use.training.cost(training);
			},
			learned: (skills) => {
				let count = 0;
				for (let skill in skills) {
					let subskills = skills[skill];
					for (let subskill in subskills) {
						if (subskills[subskill].trained === false && subskills[subskill].level > 0) {
							count++;
						}
					}
				}
				return count;
			},
			mod: (character,skill) => {},
			roll: (character,skill) => {},
		},
		resources: {
			turn: {
				actions: (character) => {
					let turnEco = 3;
					let roundSpent = 0;
				},
				fullActions: (character) => {
					let actions = character.turn.actions;
					return Math.floor(actions);
				},
				halfActions: (character) => {
					let actions = character.turn.actions;
					let fullActions = character.turn.fullActions;
					return Math.ceil(actions - fullActions);
				},
			},
			health: {
				current: (character) => {},
				max: (character) => {
					let baseHP = 0;
					let classHP = 0;
					return baseHP + classHP;
				},
				fieldMax: (character) => {
					let max = character.resources.health.max;
					let reduction = character.resources.health.wounds;
					return max - reduction;
				},
				proc: (character) => {
					let max = character.resources.health.max;
					return Math.floor(max/4)
				},
				wounds: (character) => {
					let dmg = 0;
					return Math.floor(dmg/2)
				},
				lgtWounds: (character) => {
					let wounds = character.resources.health.wounds;
					return Math.ceil(wounds/2)
				},
				dpWounds: (character) => {
					let wounds = character.resources.health.wounds;
					return Math.floor(wounds/2)
				},
			},
			defense: {
				base: (character) => {},
				deflect: (character) => {
					let items = character.inventory.containers.equipped.items
					let armor = test.find.values(items, 'armor');
					return test.props.sum(armor)
				},
				absorbtion: {
					min: (character) => {},
					max: (character) => {},
				},
				toughness: {
					min: (character) => {},
					max: (character) => {},
				},
				dr: (character) => {},
				total: (character) => {},
				protection: (character) => {},
			},
			morale: (character) => {},
			magic: {
				mana: {
					current: (character) => {},
					max: (character) => {},
					regen: (character) => {},
					charred: (character) => {},
				},
				slots: (character) => {},
			}
		},
		inventory: {
			weight: {
				current: (character) => {},
				capacity: (character) => {},
				encumberance: (character) => {},
				moveObject: (character) => {},
			}
		}
	},
	make: {
		character:(name) => {
			return {
				info: {
					system: "Malum.Test",
					series: "test",
					campaign: "",
					list: "Characters",
					type: "Player",
					creator: "",
					file: name,
					img: "",
					fullName: "",
					choices: {
						origin: '',
						history: '',
						sign: '',
						card: '',
						playerArchetype: '',
						classLvl: '',
					},
					description: {
						age: 0,
						height: 0,
						weight: 0,
					},
					relations: {
						organizations: [],
						allies: [],
						enemies: [],
					},
					note: '',
				},
				attri: {
					baseASI: 8,
					ASI: 0,
					baseSPI: 5,
					SPI: 0,
					SP: 0,
					spentSP: 0,
					skillsTrained: 0,
					stats: {
						STR: {
							full: "Strength",
							short: "STR",
							inc: 0,
							incCost: 0,
							baseScore: 10,
							score: 10,
							mod: 0,
							miscMod: {},
							totalMod: 0,
						},
						AGI: {
							full: "Agility",
							short: "AGI",
							inc: 0,
							incCost: 0,
							baseScore: 10,
							score: 10,
							mod: 0,
							miscMod: {},
							totalMod: 0,
						},
						CON: {
							full: "Constitution",
							short: "CON",
							inc: 0,
							incCost: 0,
							baseScore: 10,
							score: 10,
							mod: 0,
							miscMod: {},
							totalMod: 0,
						},
						INT: {
							full: "Intelligence",
							short: "INT",
							inc: 0,
							incCost: 0,
							baseScore: 10,
							score: 10,
							mod: 0,
							miscMod: {},
							totalMod: 0,
						},
						WIS: {
							full: "Wisdom",
							short: "WIS",
							inc: 0,
							incCost: 0,
							baseScore: 10,
							score: 10,
							mod: 0,
							miscMod: {},
							totalMod: 0,
						},
						WIL: {
							full: "Willpower",
							short: "WIL",
							inc: 0,
							incCost: 0,
							baseScore: 10,
							score: 10,
							mod: 0,
							miscMod: {},
							totalMod: 0,
						},
					},
					skills: {
						Combat: {
							Axes: {
								skillName: "Axes",
								category: 'Combat',
								description: "",
								baseMod: "AGI",
								trained: false,
								level: 0,
								levelCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							Blades: {
								skillName: "Blades",
								category: 'Combat',
								description: "",
								baseMod: "AGI",
								training: "U",
								trainingFull: "",
								trained: false,
								level: 0,
								levelCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							Blunts: {
								skillName: "Blunts",
								category: 'Combat',
								description: "",
								baseMod: "AGI",
								training: "U",
								trainingFull: "",
								trained: false,
								level: 0,
								levelCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							Bows: {
								skillName: "Bows",
								category: 'Combat',
								description: "",
								baseMod: "AGI",
								training: "U",
								trainingFull: "",
								trained: false,
								level: 0,
								levelCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							Heavies: {
								skillName: "Heavies",
								category: 'Combat',
								description: "",
								baseMod: "AGI",
								training: "U",
								trainingFull: "",
								trained: false,
								level: 0,
								levelCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							Pistols: {
								skillName: "Pistols",
								category: 'Combat',
								description: "",
								baseMod: "AGI",
								training: "U",
								trainingFull: "",
								trained: false,
								level: 0,
								levelCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							Rifles: {
								skillName: "Rifles",
								category: 'Combat',
								description: "",
								baseMod: "AGI",
								training: "U",
								trainingFull: "",
								trained: false,
								level: 0,
								levelCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							Shotguns: {
								skillName: "Shotguns",
								category: 'Combat',
								description: "",
								baseMod: "AGI",
								training: "U",
								trainingFull: "",
								trained: false,
								level: 0,
								levelCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							Spears: {
								skillName: "Spears",
								category: 'Combat',
								description: "",
								baseMod: "AGI",
								training: "U",
								trainingFull: "",
								trained: false,
								level: 0,
								levelCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							Unarmed: {
								skillName: "Unarmed",
								category: 'Combat',
								description: "",
								baseMod: "AGI",
								training: "U",
								trainingFull: "",
								trained: false,
								level: 0,
								levelCost: 0,
								miscMod: {},
								totalMod: 0,
							},
						},
						Utility: {
							Athletics: {
								skillName: "Athletics",
								category: 'Utility',
								description: "",
								baseMod: "STR",
								training: "U",
								trainingFull: "",
								trained: false,
								level: 0,
								levelCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							Dexterity: {
								skillName: "Dexterity",
								category: 'Utility',
								description: "",
								baseMod: "AGI",
								training: "U",
								trainingFull: "",
								trained: false,
								level: 0,
								levelCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							Nimble: {
								skillName: "Nimble",
								category: 'Utility',
								description: "",
								baseMod: "AGI",
								training: "U",
								trainingFull: "",
								trained: false,
								level: 0,
								levelCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							Stealth: {
								skillName: "Stealth",
								category: 'Utility',
								description: "",
								baseMod: "AGI",
								training: "U",
								trainingFull: "",
								trained: false,
								level: 0,
								levelCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							Endurance: {
								skillName: "Endurance",
								category: 'Utility',
								description: "",
								baseMod: "CON",
								training: "U",
								trainingFull: "",
								trained: false,
								level: 0,
								levelCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							Immunity: {
								skillName: "Immunity",
								category: 'Utility',
								description: "",
								baseMod: "CON",
								training: "U",
								trainingFull: "",
								trained: false,
								level: 0,
								levelCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							Arcana: {
								skillName: "Arcana",
								category: 'Utility',
								description: "",
								baseMod: "INT",
								training: "U",
								trainingFull: "",
								trained: false,
								level: 0,
								levelCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							Chemistry: {
								skillName: "Chemistry",
								category: 'Utility',
								description: "",
								baseMod: "INT",
								training: "U",
								trainingFull: "",
								trained: false,
								level: 0,
								levelCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							Computers: {
								skillName: "Computers",
								category: 'Utility',
								description: "",
								baseMod: "INT",
								training: "U",
								trainingFull: "",
								trained: false,
								level: 0,
								levelCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							Engineering: {
								skillName: "Engineering",
								category: 'Utility',
								description: "",
								baseMod: "INT",
								training: "U",
								trainingFull: "",
								trained: false,
								level: 0,
								levelCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							Knowledge: {
								skillName: "Knowledge",
								category: 'Utility',
								description: "",
								baseMod: "INT",
								training: "U",
								trainingFull: "",
								trained: false,
								level: 0,
								levelCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							Spellcraft: {
								skillName: "Spellcraft",
								category: 'Utility',
								description: "",
								baseMod: "INT",
								training: "U",
								trainingFull: "",
								trained: false,
								level: 0,
								levelCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							Theology: {
								skillName: "Theology",
								category: 'Utility',
								description: "",
								baseMod: "INT",
								training: "U",
								trainingFull: "",
								trained: false,
								level: 0,
								levelCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							Awareness: {
								skillName: "Awareness",
								category: 'Utility',
								description: "",
								baseMod: "WIS",
								training: "U",
								trainingFull: "",
								trained: false,
								level: 0,
								levelCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							Cooking: {
								skillName: "Cooking",
								category: 'Utility',
								description: "",
								baseMod: "WIS",
								training: "U",
								trainingFull: "",
								trained: false,
								level: 0,
								levelCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							Crafting: {
								skillName: "Crafting",
								category: 'Utility',
								description: "",
								baseMod: "WIS",
								training: "U",
								trainingFull: "",
								trained: false,
								level: 0,
								levelCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							Fabrication: {
								skillName: "Fabrication",
								category: 'Utility',
								description: "",
								baseMod: "WIS",
								training: "U",
								trainingFull: "",
								trained: false,
								level: 0,
								levelCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							Medical: {
								skillName: "Medical",
								category: 'Utility',
								description: "",
								baseMod: "WIS",
								training: "U",
								trainingFull: "",
								trained: false,
								level: 0,
								levelCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							Metalworking: {
								skillName: "Metalworking",
								category: 'Utility',
								description: "",
								baseMod: "WIS",
								training: "U",
								trainingFull: "",
								trained: false,
								level: 0,
								levelCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							Survival: {
								skillName: "Survival",
								category: 'Utility',
								description: "",
								baseMod: "WIS",
								training: "U",
								trainingFull: "",
								trained: false,
								level: 0,
								levelCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							Charisma: {
								skillName: "Charisma",
								category: 'Utility',
								description: "",
								baseMod: "WIL",
								training: "U",
								trainingFull: "",
								trained: false,
								level: 0,
								levelCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							Deception: {
								skillName: "Deception",
								category: 'Utility',
								description: "",
								baseMod: "WIL",
								training: "U",
								trainingFull: "",
								trained: false,
								level: 0,
								levelCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							Empathy: {
								skillName: "Empathy",
								category: 'Utility',
								description: "",
								baseMod: "WIL",
								training: "U",
								trainingFull: "",
								trained: false,
								level: 0,
								levelCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							Intimidation: {
								skillName: "Intimidation",
								category: 'Utility',
								description: "",
								baseMod: "WIL",
								training: "U",
								trainingFull: "",
								trained: false,
								level: 0,
								levelCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							Morale: {
								skillName: "Morale",
								category: 'Utility',
								description: "",
								baseMod: "WIL",
								training: "U",
								trainingFull: "",
								trained: false,
								level: 0,
								levelCost: 0,
								miscMod: {},
								totalMod: 0,
							},
						},
					},
				},
				resources: {
					turn: {
						actions: 0,
						fullActions: 0,
						halfActions: 0,
					},
					health: {
						current: 0,
						fieldMax: 0,
						max: 0,
						hpi: 0,
						proc: 0,
						lgtWounds: 0,
						dpWounds: 0,
						wounds: 0,
					},
					defense: {
						total: 0,
						base: 0,
						deflect: 0,
						absorbtion: 0,
						toughness: 0,
						protection: [],
						limit: 0,
						dr: 0,
					},
					morale: 0,
					magic: {
						mana: {
							current: 0,
							max: 0,
							regen: 0,
							charred: 0,
						},
						slots: {
							current: 0,
							max: 0,
						}
					}
				},
				feats: {
					background: {
						origin: {},
						history: {},
						card: {},
						sign: {}
					},
					additionals: {
						perk: {
							name: "Perks",
							description: "You can choose from the perk list",
							infoBlock: {
								type: "listShop",
								menu: "modal",
								title: ["name", "points"]
							},
							points: 1,
							chosen: [],
							choices: {list:"Perk"},
						},
						trait: {
							name: "Traits",
							description: "You can choose from the trait list",
							infoBlock: {
								type: "listShop",
								menu: "modal",
								title: ["name", "points"]
							},
							points: 1,
							chosen: [],
							choices: {list:"Perk"},
						},
					},
					archetype: {},
					subtype: {},
				},
				inventory: {
					currency: 0,
					weight: {
						weightedCurrency: false,
						current: 0,
						capacity: 0,
						encumberance: 0,
						moveObject: 0,
					},
					containers: {
						equiped: {
							character: "Equiped",
							weight: 0,
							items: [],
						},
						bag: {
							character: "Bag",
							weight: 0,
							capacity: 15,
							items: [],
						}
					},
					savedItems: {},
				},
				spells: []
			}
		},
		origin: (character) => {
			character = {
				character: character,
				resist: "",
				statBonus: {
					ATK: 1,
				},
				size: 0,
				baseSkills: [""],
				culture: [""],
				tags: [""],
				trait: {},
			}
		},
		history: (character) => {
			character = {
				character: character,
				baseSkills: [],
				trait: {},
			}
		},
		archetype: (character) => {
			character = {
				character: "",
				hpBonus: 0,
				baseSkills: "",
				LVL1: {},
				LVL2: {},
				LVL3: {},
				LVL4: {},
				LVL5: {},
				LVL6: {},
				LVL7: {},
				LVL8: {},
				LVL9: {},
			}
		},
		subtype: (character) => {
			character = {
				LVL1: {},
			}
		},
		item: (character) => {
			character = {}
		},
		additional: (character) => {
			character = {}
		},
	}
}