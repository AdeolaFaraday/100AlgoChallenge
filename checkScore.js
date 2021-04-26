function checkScore(str) {
	let obj = { '#': 5, O: 3, X: 1, '!': -1, '!!': -3, '!!!': -5 };
	let arr = str
		.flat()
		.map((a) => a.replace(a, obj[a]))
		.map((a) => Number(a))
		.reduce((a, b) => a + b);
	return arr > 1 ? arr : 0;
}

console.log(
	checkScore([
		['!!!', 'O', '!'],
		['X', '#', '!!!'],
		['!!', 'X', 'O'],
	])
);
