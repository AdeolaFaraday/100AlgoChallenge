function simplifyList(list) {
	let arr = list.map((a) => a.brand);
	let rDup = Array.from(new Set(arr));
	let newArr = [];
	for (let i = 0; i <= rDup.length - 1; i++) {
		let count = list.filter((a) => a.brand == rDup[i]).length;
		let val = list.find((a) => a.brand == rDup[i]);
		newArr.push({ ...val, count });
	}
	return newArr;
}

console.log(
	simplifyList([
		{ brand: 'NARS', name: 'Cosmetics Voyageur Pallete' },
		{ brand: 'NARS', name: 'Cosmetics Voyageur Pallete' },
		{ brand: 'Urban Decay', name: 'Naked Honey Pallete' },
		{ brand: 'Stila', name: 'Stay All Day Liquid Lipstick' },
		{ brand: 'Stila', name: 'Stay All Day Liquid Lipstick' },
		{ brand: 'Stila', name: 'Stay All Day Liquid Lipstick' },
	])
);
