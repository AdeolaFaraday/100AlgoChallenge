function leader(arr) {
	let newArr = [...arr, 0];
	let result = [];
	for (let i = 0; i <= newArr.length; i++) {
		if (newArr[i] > newArr[i + 1]) {
			result.push(newArr[i]);
		}
	}
	let newResult;
	for (let i = 0; i <= result.length; i++) {
		if (result[i] < result[i + 1]) {
			newResult = result[i];
		}
	}
	let index = result.findIndex((a) => a == newResult) + 1;
	return result.slice(index, result.length);
}

function leader(arr) {
	var a = arr.indexOf(Math.max(...arr));
	var b = arr.slice(a);
	for (let i = 0; i < b.length - 1; i++) {
		if (b[i] < b[i + 1]) {
			b.splice(1, i);
		}
	}
	return b;
}

console.log(leader([2, 3, 20, 15, 8, 25, 3]));
console.log(leader([2, 3, 20, 15, 8, 3]));
