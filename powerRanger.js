function powerRanger(power, min, max) {
	let arr = [];
	for (let i = min; i <= max; i++) {
		arr.push(i);
	}
	let newArr = [];
	for (let i = 0; i <= max; i++) {
		if (arr.includes(Math.pow(i, power))) {
			newArr.push(i);
		}
	}
	return newArr.map((a) => Math.pow(a, power));
}

console.log(powerRanger(3, 1, 27));
