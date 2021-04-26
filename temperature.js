function sumOfSlices(arr) {
	let newArray = [];
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (sum + arr[i] < 100) sum += arr[i];
		else {
			newArray.push(sum);
			sum = arr[i];
		}

		if (i + 1 === arr.length) newArray.push(sum);
	}

	return newArray;
}

console.log(sumOfSlices([10, 29, 13, 14, 15, 16, 17, 31, 20, 10, 29, 13, 14, 15, 16, 17, 31, 20, 100]));
