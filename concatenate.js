function canConcatenate(arr, target) {
	let concatArr = arr.flat();
	let newVal = concatArr.filter((a) => target.includes(a));
	if (newVal.length == target.length) {
		return true;
	}
	return false;
}
console.log(canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [7, 6, 5, 4, 3, 2, 1]));
