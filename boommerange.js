function countBoomerangs(arr) {
	let result = [];
	for (var i = 0; i <= arr.length - 1; i++) {
		if (arr[i] === arr[i + 2] && arr[i] !== arr[i + 1]) {
			result.push([arr[i], arr[i + 1], arr[i + 2]]);
		}
	}
	console.log(result);
}

console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1]));
