function vowelLinks(str) {
	let strArr = str.split(' ');
	let vowel = 'aeiou'.split('');
	for (let i = 0; i <= strArr.length - 1; i++) {
		let elL = strArr[i].split('').length;
		let el = strArr[i].split('');
		let el2 = strArr[i + 1].split('');
		if (vowel.includes(el[elL - 1]) && vowel.includes(el2[0])) {
			return true;
		}
	}
}

console.log(vowelLinks('a very large appliance'));
