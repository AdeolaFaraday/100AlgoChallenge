function twins(arr) {
	let count = 0;
	let newArr = arr.reduce((a, b) => a + b);
	for (let i = 0; i <= arr.length; i++) {
		count += arr[i];
		newArr -= arr[i];
		if (count == newArr) {
			return i + 1;
		}
	}
}

console.log(twins([10, 20, 30, 5, 40, 50, 40, 15]));
