function primesBelowNum(n) {
	let arr = [];
	for (let i = 2; i <= n; i++) {
		arr.push(i);
	}
	function isPrime(num) {
		for (let i = 2; i < arr.length; i++) {
			if (arr[i] % i !== 0) {
				return num;
			}
		}
	}
	return arr.filter(isPrime);
}
console.log(primesBelowNum(10));
