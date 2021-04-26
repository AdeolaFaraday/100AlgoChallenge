function doubleChar(str) {
	let arr = str.split('');
	let strArr = arr.map((a) => a + a);
	return strArr.join('');
}

console.log(doubleChar('hello world'));
