import * as eases from 'svelte/easing';

const processed_eases = {};
console.log(eases.sineIn);
for (const ease in eases) {
	if (ease === "linear") {
		processed_eases.linear = eases.linear;
	} else {
		const name = ease.replace(/In$|InOut$|Out$/, '');
		const type = ease.match(/In$|InOut$|Out$/)[0];

		if (!(name in processed_eases)) processed_eases[name] = {};
		processed_eases[name][type] = {};
		processed_eases[name][type].fn = eases[ease];

		let shape = 'M0 1000';
		for (let i = 1; i <= 1000; i++) {
			shape = `${shape} L${(i / 1000) * 1000} ${1000 - eases[ease](i / 1000) * 1000} `;
			processed_eases[name][type].shape = shape;
		}
	}
}

const sorted_eases = new Map([['sine', processed_eases.sine]]);

export const types = ['Ease In', 'In'];

export { sorted_eases as eases };