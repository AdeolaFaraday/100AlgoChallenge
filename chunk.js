function chunk(array, size) {
	var results = [];
	for (var i = 0; i < array.length; i += size) {
		var slice = array.slice(i, i + size);
		results.push(slice);
	}
	return results;
}

function chunk(array, size) {
	let newArr = [];
	let checker = '';
	for (let i = 0; i <= size; i++) {
		if (newArr.length < 1) {
			let arr = array.slice(0, size);
			newArr.push(arr);
		} else if (newArr[newArr.length - 1].join('') == checker) {
			newArr.push(array.slice(newArr.flat().length));
		}
		let arr = array.slice(newArr[newArr.length - 1].length, size + size);
		newArr.push(arr);
		checker = arr.join('');
	}
	for (let i = 1; i <= newArr.length; i++) {
		if (newArr[i].length < newArr[i - 1].length) {
			return newArr.splice(0, i + 1).filter((a) => a.length !== 0);
		}
	}
}

console.log(chunk([1, 2, 3, 4, 5], 2));
