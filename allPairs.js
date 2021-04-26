// Create a function that returns all pairs of numbers in an array that sum to a target. Sort the pairs in ascending order with respect to the smaller number, then order each pair in this order: [smaller, larger].

// Examples

const allPairs = (arr, num) => {
	const newArr = arr
		.map((a, i) => {
			return [a, arr.findIndex((b) => b + a == num) != i && arr.find((b) => b + a == num)].sort();
		})
		.filter((c) => c.length == 2 && !c.includes(undefined) && !c.includes(false));
	return Array.from(new Set(newArr.map(JSON.stringify)), JSON.parse).sort();
};

console.log(allPairs([2, 4, 5, 3], 7));
console.log(allPairs([5, 3, 9, 2, 1], 3));
console.log(allPairs([8, 7, 7, 2, 4, 6], 14));
console.log(allPairs([4, 5, 1, 3, 6, 8], 9));
// allPairs([2, 4, 5, 3], 7) ➞ [[2, 5], [3, 4]]
// // 2 + 5 = 7, 3 + 4 = 7

// allPairs([5, 3, 9, 2, 1], 3) ➞ [[1, 2]]

// allPairs([4, 5, 1, 3, 6, 8], 9) ➞ [[1, 8], [3, 6], [4, 5]]
// Sorted: 1 < 3 < 4; each pair is ordered [smaller, larger]
