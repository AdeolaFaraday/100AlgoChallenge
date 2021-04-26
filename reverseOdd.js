function reverseOdd(str) {
	let strArr = str.split(' ');
	let sTrim = strArr.map((s) => (s.length % 2 !== 0 ? s.split('').reverse().join('') : s));
	return sTrim.join(' ');
}

console.log(reverseOdd('Bananas'));
