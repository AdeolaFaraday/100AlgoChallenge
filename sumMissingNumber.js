function sumMissingNumbers(arr) {
	let sum = arr.reduce((a, b) => a + b);
	let result = [];
	for (let i = 10; i <= 60; i++) {
		result.push(i);
	}
	let res = result.reduce((a, b) => a + b);
	return res - sum;
}

console.log(sumMissingNumbers([10, 20, 30, 40, 50, 60]));
