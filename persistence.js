function additivePersistence(n) {
	let count = 0;
	const num = n.toString().split('');
	const sum = num.reduce((a, b) => +a + +b);
	if (num.length < 2) {
		return 0;
	}
	count++;
	count += additivePersistence(sum);
	return count;
}

function multiplicativePersistence(n) {
	let count = 0;
	let val = String(n).split('');
	while (val.length >= 2) {
		count++;
		val = val
			.reduce((a, b) => +a * +b)
			.toString()
			.split('');
	}
	return count;
}

console.log(multiplicativePersistence(123456));
console.log(multiplicativePersistence(77));
