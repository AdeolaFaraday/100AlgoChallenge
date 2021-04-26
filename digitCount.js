function digitCount(num) {
	let strNum = num.toString().split('');
	let result = [];
	for (let i = 0; i <= strNum.length - 1; i++) {
		let res = strNum.filter((a) => a == strNum[i]);
		result.push(res);
	}
	return Number(result.map((a) => a.length).join(''));
}

console.log(digitCount(136116));
