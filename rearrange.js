function rearrange(sentence) {
	if (sentence == ' ') return '';
	const indexFunc = (index) => {
		return Number(
			index
				.split('')
				.filter((a) => /\d/.test(a))
				.join()
		);
	};
	let arr = sentence.split(' ');
	let newArr = arr.sort((a, b) => {
		if (indexFunc(a) - indexFunc(b) < 1) {
			return -1;
		} else {
			return 1;
		}
	});
	return newArr
		.map((a) =>
			a
				.split('')
				.filter((b) => !/\d/.test(b))
				.join('')
		)
		.join(' ');
}

console.log(rearrange(' '));
console.log(rearrange('is2 Thi1s T4est 3a'));
