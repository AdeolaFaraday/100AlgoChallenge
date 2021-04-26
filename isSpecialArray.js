function isSpecialArray(arr) {
	let newArr = [];
	for (let i = 0; i <= arr.length; i++) {
		if (arr[i] % 2 == 0) {
			newArr.push(arr[i]);
		}
	}
	return newArr.length == arr.length / 2 ? true : false;
}
