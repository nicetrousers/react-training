import c2f from './celsiusToFahrenheit'

it('freezing point of water', () => {
	let result = c2f(0);
	expect(result).toEqual(32);
});

it('boiling point of water', () => {
	let result = c2f(100);
	expect(result).toEqual(212);
});

it('body temp', () => {
	let result = c2f(37);
	expect(result).toBeGreaterThan(98.5);
	expect(result).toBeLessThan(98.7);
});