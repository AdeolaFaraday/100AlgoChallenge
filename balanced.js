function balanced(arr) {
	let fArr = arr.slice(0, arr.length / 2);
	let sArr = arr.slice(arr.length / 2, arr.length);
	let sum1 = fArr.reduce((a, b) => a + b);
	let sum2 = sArr.reduce((a, b) => a + b);
	if (sum1 > sum2) {
		return fArr.concat(fArr);
	} else if (sum2 > sum1) {
		return sArr.concat(sArr);
	} else {
		return arr;
	}
}

console.log(balanced([1, 2, 4, 6, 3, 1]));
