function missing(arr) {
	let diff = arr.map((a, i) => arr[i + 1] - a).splice(0, arr.length - 1);
	let diffN = Math.min(...diff);
	console.log(diffN);
	let sum = arr.reduce((a, b) => a + b);
	const rArr = (n) => {
		if (n < 1) {
			return 1;
		}
		return n + rArr(n - diffN);
	};
	let reRes = rArr(arr[arr.length - 1]) - 1;
	return reRes - sum;
}
console.log(missing([1, 3, 4, 5]));
console.log(missing([1.5, 2, 3]));
