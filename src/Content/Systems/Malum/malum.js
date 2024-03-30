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
	props: {
		sum: () => {},
		count: () => {},
	},
	update: () => {},
	use: {
		stat: {
			mod: (name, stat) => {
				return this[name].attri.stats[stat].mod
			},
			full:  (name, stat) => {
				return this[name].attri.stats[stat].full
			},
			short:  (name, stat) => {
				return this[name].attri.stats[stat].short
			},
			score:  (name, stat) => {
				return this[name].attri.stats[stat].score
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
			ASI: (name) => {
				let base = this[name].attri.baseASI;
				let spent = this[name].attri.stats;
				let gained = 0;
				return base + gained - spent;
			},
			score: (name,stat) => {
				let inc = this[name].attri.stats[stat].inc;
				let base = this[name].attri.stats[stat].baseScore;
				return base + inc;
			},
			inCost: (name,stat) => {
				let inc = this[name].attri.stats[stat].inc
				return inc<5?inc:(((inc-4)*2)+4);
			},
			baseMod: (name,stat) => {
				let score = this[name].attri.stats[stat].score;
				return Math.floor( (score - 10) / 2 );
			},
			mod: (name,stat) => {
				let base = this[name].attri.stats[stat].baseMod;
				let misc = this[name].attri.stats[stat].miscMod;
				return base + pow.props.sum(misc);
			},
			roll: (name,stat) => {
				let mod = this[name].attri.stats[stat].mod;
				return test.roll.d20(mod);
			}
		},
		skills: {
			SPI: (name) => {},
			baseMod: (name,skill) => {
				return this[name].attri.stats[skill].totalMod
			},
			trainingMod: (name, skill) => {
				let training = this[name].attri.stats[skill].training;
				return test.use.training.mod(training);
			},
			trainingFull: (name, skill) => {
				let training = this[name].attri.stats[skill].training;
				return test.use.training.full(training);
			},
			trainingCost: (name, skill) => {
				let training = this[name].attri.stats[skill].training;
				return test.use.training.cost(training);
			},
			mod: (name,skill) => {},
			roll: (name,skill) => {},
		},
		resources: {
			turn: {
				actions: (name) => {
					let turnEco = 3;
					let roundSpent = 0;
				},
				fullActions: (name) => {
					let actions = this[name].turn.actions;
					return Math.floor(actions);
				},
				halfActions: (name) => {
					let actions = this[name].turn.actions;
					let fullActions = this[name].turn.fullActions;
					return Math.ceil(actions - fullActions);
				},
			},
			health: {
				current: (name) => {},
				max: (name) => {
					let baseHP = 0;
					let classHP = 0;
					return baseHP + classHP;
				},
				fieldMax: (name) => {
					let max = this[name].resources.health.max;
					let reduction = this[name].resources.health.wounds;
					return max - reduction;
				},
				proc: (name) => {
					let max = this[name].resources.health.max;
					return Math.floor(max/4)
				},
				wounds: (name) => {
					let dmg = 0;
					return Math.floor(dmg/2)
				},
				lgtWounds: (name) => {
					let wounds = this[name].resources.health.wounds;
					return Math.ceil(wounds/2)
				},
				dpWounds: (name) => {
					let wounds = this[name].resources.health.wounds;
					return Math.floor(wounds/2)
				},
			},
			defense: {
				base: (name) => {},
				deflect: (name) => {
					let items = this[name].inventory.containers.equipped.items
					let armor = test.find.values(items, 'armor');
					return test.props.sum(armor)
				},
				absorbtion: {
					min: (name) => {},
					max: (name) => {},
				},
				toughness: {
					min: (name) => {},
					max: (name) => {},
				},
				dr: (name) => {},
				total: (name) => {},
				protection: (name) => {},
			},
			morale: (name) => {},
			magic: {
				mana: {
					current: (name) => {},
					max: (name) => {},
					regen: (name) => {},
					charred: (name) => {},
				},
				slots: (name) => {},
			}
		},
		inventory: {
			weight: {
				current: (name) => {},
				capacity: (name) => {},
				encumberance: (name) => {},
				moveObject: (name) => {},
			}
		}
	},
	create: {
		character:(name) => {
			this[name] = {
				info: {
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
				},
				attri: {
					baseASI: 8,
					ASI: 0,
					baseSPI: 0,
					SPI: 0,
					stats: {
						ATK: {
							full: "Attack",
							short: "ATK",
							inc: 0,
							incCost: 0,
							baseScore: 10,
							score: 10,
							mod: 0,
							miscMod: {},
							totalMod: 0,
						},
						DEF: {
							full: "Defense",
							short: "DEF",
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
						hit: {
							skillname: "Hit",
							category: 'Offense',
							description: "",
							baseMod: 0,
							training: "U",
							trainingFull: "",
							trainingMod: 0,
							trainingCost: 0,
							miscMod: {},
							totalMod: 0,
						},
						defense: {
							skillname: "Skill",
							category: 'Defense',
							description: "",
							baseMod: 0,
							training: "U",
							trainingFull: "",
							trainingMod: 0,
							trainingCost: 0,
							miscMod: {},
							totalMod: 0,
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
							name: "Equiped",
							weight: 0,
							items: [],
						},
						bag: {
							name: "Bag",
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
							name: "",
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
							name: "",
							element: "",
							suit: "",
							horseman: "",
							stone: "",
						},
					},
					additional: {},
					archetype: {
						name: "",
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
			return {name: name,}
		},
		origin: (name) => {
			this[name] = {
				name: name,
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
		history: (name) => {
			this[name] = {
				name: name,
				baseSkills: [],
				trait: {},
			}
		},
		archetype: (name) => {
			this[name] = {
				name: "",
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
		subtype: (name) => {
			this[name] = {
				LVL1: {},
			}
		},
		item: (name) => {
			this[name] = {}
		},
		additional: (name) => {
			this[name] = {}
		},
	}
}