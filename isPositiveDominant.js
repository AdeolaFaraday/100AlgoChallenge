function isPositiveDominant(a) {
	let firstArr = a.filter((a) => Math.sign(a) == -1);

	let secondArr = a.filter((a) => Math.sign(a) == 1);
	let newArr = Array.from(new Set(secondArr));
	if (firstArr.length > newArr.length) {
		return false;
	} else if (firstArr.length < newArr.length) {
		return true;
	} else {
		return 1;
	}
}

console.log(isPositiveDominant([1, 1, 1, 1, -3, -4]));
