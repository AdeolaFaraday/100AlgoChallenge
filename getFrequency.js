function getFrequencies(arr) {
	let arrFrom = Array.from(new Set(arr));
	let arrNum = [];
	for (let i = 0; i <= arrFrom.length - 1; i++) {
		arrNum.push(arr.filter((a) => arr[i] == a).length);
	}
	let resArr = [];
	for (let i = 0; i <= arrFrom.length - 1; i++) {
		resArr.push([arrFrom[i] + ':' + arrNum[i]]);
	}
	return Object.fromEntries(resArr);
}

console.log(getFrequencies(['A', 'B', 'A', 'A', 'A']));
