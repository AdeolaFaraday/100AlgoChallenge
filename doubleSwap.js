function doubleSwap(str, c1, c2) {
	let strArr = str.split('');
	let array = [];
	for (let i = 0; i <= strArr.length - 1; i++) {
		if (strArr[i] == c1) {
			array.push(strArr[i].replace(strArr[i], c2));
		} else if (strArr[i] == c2) {
			array.push(strArr[i].replace(strArr[i], c1));
		} else {
			array.push(strArr[i]);
		}
	}
	return array.join('');
}

console.log(doubleSwap('aabbccc', 'a', 'b'));
