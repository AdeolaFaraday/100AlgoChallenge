function missing(arr) {
	let diff = arr.map((a, i) => arr[i + 1] - a).splice(0, arr.length - 1);
	let diffN = Math.min(...diff);
	let fRes = 0;
	for (let i = 0; i <= arr.length; i++) {
		if (arr[i + 1] - arr[i] !== diffN) {
			let result = diffN + arr[i];
			return (fRes += result);
		}
	}
	return fRes;
}
console.log(missing([1, 3, 4, 5]));
console.log(missing([1.5, 2, 3]));
