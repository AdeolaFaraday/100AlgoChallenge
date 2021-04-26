function isZygodrome(num) {
	let arr = num.toString().split('');
	let newArr = [];
	for (let i = 0; i <= arr.length; i++) {
		if (arr[i] !== arr[i + 1] && arr[i] !== arr[i - 1]) {
			newArr.push(arr[i]);
		}
	}
	if (newArr.length !== 0 || arr.length == 1) {
		return false;
	} else {
		return true;
	}
}
console.log(isZygodrome(3));
