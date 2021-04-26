function sumDigProd(...args) {
	const sum = args
		.reduce((a, b) => a + b)
		.toString()
		.split('');
	const recursive = (arr) => {
		if (arr.length < 2) return arr;
		const mul = arr
			.reduce((a, b) => +a * +b)
			.toString()
			.split('');
		return recursive(mul);
	};
	return +recursive(sum).pop();
}

console.log(sumDigProd(16, 28));
