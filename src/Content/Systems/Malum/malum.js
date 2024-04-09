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
				inc: (character, updateCharacter, event, stat) => {
					//console.log('event value received:',parseInt(event.target.value))
					updateCharacter({...character, attri: {...character.attri, stats:{...character.attri.stats, [stat]: {...character.attri.stats[stat], inc: parseInt(event.target.value)}}}});
					//console.log('inc is:', character.attri.stats[stat].inc)
				},
				incCost: (character, updateCharacter, value, stat) => {
					updateCharacter({...character, attri: {...character.attri, stats:{...character.attri.stats, [stat]: {...character.attri.stats[stat], incCost: value}}}});
				}
			},
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
				return character.attri.stats[stat].mod
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
			full: (system, lvl) => {
				return this[system].rules.training.level[lvl].full
			},
			mod: (system, lvl) => {
				return this[system].rules.training.level[lvl].mod
			},
			roll: (system, lvl) => {
				return this[system].rules.training.level[lvl].roll
			},
			cost: (system, lvl) => {
				return this[system].rules.training.level[lvl].cost
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
				let base = character.attri.stats[stat].baseMod;
				let misc = character.attri.stats[stat].miscMod;
				return base + pow.props.sum(misc);
			},
			roll: (character,stat) => {
				let mod = character.attri.stats[stat].mod;
				return test.roll.d20(mod);
			}
		},
		skills: {
			SPI: (character) => {},
			baseMod: (character,skill) => {
				return character.attri.stats[skill].totalMod
			},
			trainingMod: (character, skill) => {
				let training = character.attri.stats[skill].training;
				return test.use.training.mod(training);
			},
			trainingFull: (character, skill) => {
				let training = character.attri.stats[skill].training;
				return test.use.training.full(training);
			},
			trainingCost: (character, skill) => {
				let training = character.attri.stats[skill].training;
				return test.use.training.cost(training);
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
					file: name,
					img: "",
					fullName: "",
					creator: "",
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
					baseSPI: 0,
					SPI: 0,
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
						combat: {
							axes: {
								skillName: "Axes",
								category: 'Combat',
								description: "",
								baseMod: "AGI",
								training: "U",
								trainingFull: "",
								trainingMod: 0,
								trainingCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							blades: {
								skillName: "Blades",
								category: 'Combat',
								description: "",
								baseMod: "AGI",
								training: "U",
								trainingFull: "",
								trainingMod: 0,
								trainingCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							blunts: {
								skillName: "Blunts",
								category: 'Combat',
								description: "",
								baseMod: "AGI",
								training: "U",
								trainingFull: "",
								trainingMod: 0,
								trainingCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							bows: {
								skillName: "Bows",
								category: 'Combat',
								description: "",
								baseMod: "AGI",
								training: "U",
								trainingFull: "",
								trainingMod: 0,
								trainingCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							heavies: {
								skillName: "Heavies",
								category: 'Combat',
								description: "",
								baseMod: "AGI",
								training: "U",
								trainingFull: "",
								trainingMod: 0,
								trainingCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							pistols: {
								skillName: "Pistols",
								category: 'Combat',
								description: "",
								baseMod: "AGI",
								training: "U",
								trainingFull: "",
								trainingMod: 0,
								trainingCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							rifles: {
								skillName: "Rifles",
								category: 'Combat',
								description: "",
								baseMod: "AGI",
								training: "U",
								trainingFull: "",
								trainingMod: 0,
								trainingCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							shotguns: {
								skillName: "Shotguns",
								category: 'Combat',
								description: "",
								baseMod: "AGI",
								training: "U",
								trainingFull: "",
								trainingMod: 0,
								trainingCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							spears: {
								skillName: "Spears",
								category: 'Combat',
								description: "",
								baseMod: "AGI",
								training: "U",
								trainingFull: "",
								trainingMod: 0,
								trainingCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							unarmed: {
								skillName: "Unarmed",
								category: 'Combat',
								description: "",
								baseMod: "AGI",
								training: "U",
								trainingFull: "",
								trainingMod: 0,
								trainingCost: 0,
								miscMod: {},
								totalMod: 0,
							},
						},
						utility: {
							athletics: {
								skillName: "Athletics",
								category: 'Utility',
								description: "",
								baseMod: "STR",
								training: "U",
								trainingFull: "",
								trainingMod: 0,
								trainingCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							dexterity: {
								skillName: "Dexterity",
								category: 'Utility',
								description: "",
								baseMod: "AGI",
								training: "U",
								trainingFull: "",
								trainingMod: 0,
								trainingCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							nimble: {
								skillName: "Nimble",
								category: 'Utility',
								description: "",
								baseMod: "AGI",
								training: "U",
								trainingFull: "",
								trainingMod: 0,
								trainingCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							stealth: {
								skillName: "Stealth",
								category: 'Utility',
								description: "",
								baseMod: "AGI",
								training: "U",
								trainingFull: "",
								trainingMod: 0,
								trainingCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							endurance: {
								skillName: "Endurance",
								category: 'Utility',
								description: "",
								baseMod: "CON",
								training: "U",
								trainingFull: "",
								trainingMod: 0,
								trainingCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							immunity: {
								skillName: "Immunity",
								category: 'Utility',
								description: "",
								baseMod: "CON",
								training: "U",
								trainingFull: "",
								trainingMod: 0,
								trainingCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							arcana: {
								skillName: "Arcana",
								category: 'Utility',
								description: "",
								baseMod: "INT",
								training: "U",
								trainingFull: "",
								trainingMod: 0,
								trainingCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							chemistry: {
								skillName: "Chemistry",
								category: 'Utility',
								description: "",
								baseMod: "INT",
								training: "U",
								trainingFull: "",
								trainingMod: 0,
								trainingCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							computers: {
								skillName: "Computers",
								category: 'Utility',
								description: "",
								baseMod: "INT",
								training: "U",
								trainingFull: "",
								trainingMod: 0,
								trainingCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							engineering: {
								skillName: "Engineering",
								category: 'Utility',
								description: "",
								baseMod: "INT",
								training: "U",
								trainingFull: "",
								trainingMod: 0,
								trainingCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							knowledge: {
								skillName: "Knowledge",
								category: 'Utility',
								description: "",
								baseMod: "INT",
								training: "U",
								trainingFull: "",
								trainingMod: 0,
								trainingCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							spellcraft: {
								skillName: "Spellcraft",
								category: 'Utility',
								description: "",
								baseMod: "INT",
								training: "U",
								trainingFull: "",
								trainingMod: 0,
								trainingCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							theology: {
								skillName: "Theology",
								category: 'Utility',
								description: "",
								baseMod: "INT",
								training: "U",
								trainingFull: "",
								trainingMod: 0,
								trainingCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							awareness: {
								skillName: "Awareness",
								category: 'Utility',
								description: "",
								baseMod: "WIS",
								training: "U",
								trainingFull: "",
								trainingMod: 0,
								trainingCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							cooking: {
								skillName: "Cooking",
								category: 'Utility',
								description: "",
								baseMod: "WIS",
								training: "U",
								trainingFull: "",
								trainingMod: 0,
								trainingCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							crafting: {
								skillName: "Crafting",
								category: 'Utility',
								description: "",
								baseMod: "WIS",
								training: "U",
								trainingFull: "",
								trainingMod: 0,
								trainingCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							fabrication: {
								skillName: "Fabrication",
								category: 'Utility',
								description: "",
								baseMod: "WIS",
								training: "U",
								trainingFull: "",
								trainingMod: 0,
								trainingCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							medical: {
								skillName: "Medical",
								category: 'Utility',
								description: "",
								baseMod: "WIS",
								training: "U",
								trainingFull: "",
								trainingMod: 0,
								trainingCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							metalworking: {
								skillName: "Metalworking",
								category: 'Utility',
								description: "",
								baseMod: "WIS",
								training: "U",
								trainingFull: "",
								trainingMod: 0,
								trainingCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							survival: {
								skillName: "Survival",
								category: 'Utility',
								description: "",
								baseMod: "WIS",
								training: "U",
								trainingFull: "",
								trainingMod: 0,
								trainingCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							charisma: {
								skillName: "Charisma",
								category: 'Utility',
								description: "",
								baseMod: "WIL",
								training: "U",
								trainingFull: "",
								trainingMod: 0,
								trainingCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							deception: {
								skillName: "Deception",
								category: 'Utility',
								description: "",
								baseMod: "WIL",
								training: "U",
								trainingFull: "",
								trainingMod: 0,
								trainingCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							empathy: {
								skillName: "Empathy",
								category: 'Utility',
								description: "",
								baseMod: "WIL",
								training: "U",
								trainingFull: "",
								trainingMod: 0,
								trainingCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							intimidation: {
								skillName: "Intimidation",
								category: 'Utility',
								description: "",
								baseMod: "WIL",
								training: "U",
								trainingFull: "",
								trainingMod: 0,
								trainingCost: 0,
								miscMod: {},
								totalMod: 0,
							},
							morale: {
								skillName: "Morale",
								category: 'Utility',
								description: "",
								baseMod: "WIL",
								training: "U",
								trainingFull: "",
								trainingMod: 0,
								trainingCost: 0,
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
				feats: {
					background: {
						origin: {
							character: "",
							resist: "",
							statBonus: {
								ATK: 1,
							},
							size: 0,
							baseSkills: [""],
							culture: [""],
							tags: [""],
							trait: {},
						},
						sign: {
							character: "",
							element: "",
							suit: "",
							horseman: "",
							stone: "",
						},
					},
					additional: {},
					archetype: {
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
					},
					subtype: {
						LVL1: {},
					},
				},
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