function splitBunches(bunches) {
	let newArr = [];
	bunches.forEach((el) => {
		for (let i = 0; i <= el.quantity - 1; i++) {
			newArr.push({ name: el.name, quantity: 1 });
		}
	});
	return newArr;
}

console.log(splitBunches([{ name: 'grapes', quantity: 2 }]));
console.log(
	splitBunches([
		{ name: 'currants', quantity: 1 },
		{ name: 'grapes', quantity: 2 },
		{ name: 'bananas', quantity: 2 },
	])
);
