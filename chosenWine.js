function chosenWine(wines) {
	let sort = wines.sort((a, b) => {
		return a.price - b.price;
	});
	if (wines.length == 1) {
		return wines[0].name;
	} else if (wines.length == 0) {
		return null;
	} else {
		let wName = sort[1].name;
		return wName;
	}
}
console.log(chosenWine([{ name: 'Wine A', price: 8.99 }]));
console.log(chosenWine([]));
console.log(
	chosenWine([
		{ name: 'Wine A', price: 8.99 },
		{ name: 'Wine 32', price: 13.99 },
		{ name: 'Wine 9', price: 10.99 },
	])
);
