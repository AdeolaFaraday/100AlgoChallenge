function parseCode(str) {
	let arr = str.split('0').filter((a) => a !== '');
	return { firstName: arr[0], lastName: arr[1], id: arr[2] };
}

console.log(parseCode('John000Doe000123'));
