import React from 'react';
import { roll } from 'dnd5e-dice-roller';

export const pow = {
	dice: () => {},
	roll: {
		d20: (mod) => {
			return roll("d20") + mod
		},
	},
	minRoll: {
		d20: (mod) => {
			let rolled = roll("d20")
			rolled = rolled<=5 ? rolled=5 : rolled
			return rolled + mod
		}
	},
	feature: {
		add: (destination, feature) => {},
		remove: (destination, feature) => {},
	},
	find: {
		values: (container, prop) => {},
		list: (container, prop) => {},
	},
	props: {
		sum: (stats, key) => {
			let total = 0;
			Object.values(stats).forEach((stat) => {
				//console.log('Value is',stat.incCost)
				total += stat[key];
				//console.log('Total is',total)
			});
			
			return total;
		},
		count: () => {},
	},
	check: (val) => {
		if(val === undefined || val === null) {
			return "none";
		} else {
			return val;
		};
	},
}