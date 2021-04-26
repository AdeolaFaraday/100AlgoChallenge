function letterCombinations(digits) {
	map = [
		[],
		[],
		['a', 'b', 'c'],
		['d', 'e', 'f'],
		['g', 'h', 'i'],
		['j', 'k', 'l'],
		['m', 'n', 'o'],
		['p', 'q', 'r', 's'],
		['t', 'u', 'v'],
		['w', 'x', 'y', 'z'],
	];

	if (digits.length == 1) {
		return map[Number(digits)];
	}
	otherCombs = letterCombinations(digits.substring(1));
	totalCombs = [];
	for (i = 0; i < map[Number(digits[0])].length; i++) {
		for (j = 0; j < otherCombs.length; j++) {
			totalCombs.push(map[Number(digits[0])][i] + otherCombs[j]);
		}
	}
	return totalCombs;
}
console.log(letterCombinations('532'));
