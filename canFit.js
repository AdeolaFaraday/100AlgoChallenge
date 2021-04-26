function canFit(weights, bags) {
	return weights.reduce((a, b) => a + b) / bags <= 10;
}

console.log(canFit([4, 1, 2, 3, 5, 5, 1, 9], 3));
