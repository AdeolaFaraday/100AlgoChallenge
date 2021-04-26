function isPandigital(num) {
	let strNum = Array.from(new Set(num.toString().split('')));
	let count = '0123456789'.split('');
	let arr = 0;
	for (let i = 0; i <= strNum.length; i++) {
		if (strNum.includes(count[i])) {
			arr += 1;
		}
	}
	return arr < count.length ? false : true;
}
console.log(isPandigital(98140723568910));
console.log(isPandigital(90864523148909));
console.log(isPandigital(112233445566778899));
