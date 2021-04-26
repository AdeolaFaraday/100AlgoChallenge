function itemsPurchased(store, wallet) {
	let amt = Number(
		wallet
			.split('')
			.filter((b) => /\d/.test(b))
			.join('')
	);
	let result = Object.entries(store)
		.map((a) => [
			a[0],
			Number(
				a[1]
					.split('')
					.filter((b) => /\d/.test(b))
					.join('')
			),
		])
		.filter((a) => a[1] <= amt)
		.map((a) => a[0])
		.sort();
	return result == [] ? 'Nothing' : result;
}

console.log(itemsPurchased({ Water: '$1', Bread: '$3', TV: '$1,000', Fertilizer: '$20' }, '$300'));
