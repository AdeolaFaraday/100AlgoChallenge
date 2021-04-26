function countBoomerangs(arr) {
	let result = [];
	for (let i = 0; i <= arr.length - 1; i++) {
		if (arr[i] === arr[i + 2]) {
			return (result = [arr[i], arr[i + 1], arr[i + 2]]);
		}
	}
}

console.log(countBoomerangs([9, 5, 9, 5, 1, 5, 1, 1]));
