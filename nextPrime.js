function nextPrime(num) {
	for (let i = 2; i < num; i++) {
		if (num % i === 0) {
			return nextPrime(num + 1);
		} else {
			return num;
		}
	}
}

console.log(nextPrime(24));
