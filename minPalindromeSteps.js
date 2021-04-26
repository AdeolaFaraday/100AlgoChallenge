function minPalindromeSteps(str) {
	const checkPalindrome = (val) => {
		let count = 0;
		for (let i = 0; i <= Math.floor(val.length / 2) - 1; i++) {
			if (val[i] == val[val.length - (i + 1)]) {
				count++;
			}
		}
		return count == Math.floor(val.length / 2);
	};
	let count = 0;
	const wordArr = str.split('');
	for (let i = 0; i <= wordArr.length - 1; i++) {
		const word = wordArr.slice(i, wordArr.length);
		if (checkPalindrome(word)) {
			return count;
		} else if (word.length >= 2) {
			count++;
		}
	}
	return count;
}
console.log(minPalindromeSteps('mada'));
