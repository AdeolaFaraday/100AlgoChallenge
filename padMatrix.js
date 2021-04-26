function padMatrix(arr) {
	//[ [0, 0, 0, 0], [0, "hi", True, 0], [0, 0, 0, 0] ]
	let newArr = [];
	for (let i = 0; i <= arr.length - 1; i++) {
		newArr.push([0, ...arr[i], 0]);
	}
	return newArr;
}

console.log(padMatrix([['hi', 'True']]));
