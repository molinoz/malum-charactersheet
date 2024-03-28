function createCharacter(name) {
	return {
		file: name,
		fullName: "",
		creator: "",
		choices: {
			origin: '',
			playerArchetype: '',
			classLvl: '',
		},
		turn: {
			Actions: 3,
			fullActions: math.floor(this.Actions),
			halfActions: () => { return this.Actions - this.fullActions}
		},
		attri: {
			stats: {
				ASI: 8,
				ATK: {
					full: "Attack",
					short: "ATK",
					inc: 0,
					incCost: incCost(this.inc),
					baseScore: 10,
					racialBonus: name.feats.background.origin.statBonus.ATK,
					score: this.baseScore + this.inc,
					mod: abilityMod(this.score),
					miscMod: {},
					totalMod: this.mod + addProps(this.miscMod),
					roll: roll.d20(this.totalMod),
				},
				DEF: {
					full: "Defense",
					short: "DEF",
					inc: 0,
					incCost: incCost(this.inc),
					baseScore: 10,
					racialBonus: name.feats.background.origin.statBonus.DEF,
					score: this.baseScore + this.inc,
					mod: abilityMod(this.score),
					miscMod: {},
					totalMod: this.mod + addProps(this.miscMod),
					roll: roll.d20(this.totalMod),
				},
			},
			skills: {
				hit: {
					skillname: "Hit",
					category: 'Offense',
					description: "",
					baseMod: name.attri.stats.ATK.totalMod,
					training: "U",
					trainingFull: test.rules.training.full(this.training),
					trainingMod: test.rules.training.mod(this.training),
					trainingCost: test.rules.training.cost(this.training),
					miscMod: {},
					totalMod: this.baseMod + this.trainingMod + addProps(this.miscMod),
					roll: test.rules.training.roll(this.training),
				},
				defense: {
					skillname: "Skill",
					category: 'Defense',
					description: "",
					baseMod: name.attri.stats.DEF.totalMod,
					training: "U",
					trainingFull: test.rules.training.full(this.training),
					trainingMod: test.rules.training.mod(this.training),
					trainingCost: test.rules.training.cost(this.training),
					miscMod: {},
					totalMod: this.baseMod + this.trainingMod + addProps(this.miscMod),
					roll: test.rules.training.roll(this.training),
				},
			},
		},
		feats: {
			background: {
				origin: {
					name: "",
					resist: "",
					statBonus: {
						ABI: 1,
					},
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
		inventory: {
			currency: 0,
			weight: {
				weightedCurrency: false,
				current: test.rules.carry.current(),
				capacity: test.rules.carry.capacity(),
				encumberance: test.rules.carry.encumberance(),
				moveObject: test.rules.carry.moveObject(),
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
	};
}

function sum(arr1, arr2){
	return arr1 + arr2;
}

function createObjects(objName) {
	return objName = {
		name: objName,
		number: sum(0, objName.additions.modifier),
		additions: {
			modifier: 1,
		}
	}
}