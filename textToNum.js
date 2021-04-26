function textToNum(phone) {
	function textToNum(phone) {
		let phones = phone.split('');
		let arr = [[], [], ['ABC'], ['DEF'], ['GHI'], ['JKL'], ['MNO'], ['PQRS'], ['TUV'], ['WXYZ']];
		let newArr = '';
		for (let i = 0; i <= phones.length - 1; i++) {
			let num = arr.findIndex((a) => a.join('').split('').includes(phones[i]));
			if (num < 0) {
				newArr += phones[i];
			} else {
				newArr += num;
			}
		}
		return newArr;
	}
	let phones = phone.split('');
	let arr = [[], [], ['ABC'], ['DEF'], ['GHI'], ['JKL'], ['MNO'], ['PQRS'], ['TUV'], ['WXYZ']];
	let newArr = '';
	for (let i = 0; i <= phones.length - 1; i++) {
		let num = arr.findIndex((a) => a.join('').split('').includes(phones[i]));
		if (num < 0) {
			newArr += phones[i];
		} else {
			newArr += num;
		}
	}
	return newArr;
}

console.log(textToNum('123-647-EYES'));
