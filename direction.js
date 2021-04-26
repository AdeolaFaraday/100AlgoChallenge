function direction(arr) {
	let obj = {
		e: ['w', 'W'],
		a: ['a', 'A'],
		s: ['s', 'S'],
		t: ['t', 'T'],
	};
	let newArr = arr.map((a) => a);
	return newArr;
}

console.log(direction(['east', 'EAST', 'eastEAST']));
