function firstRepeat(chars) {
	for (let i = 0; i < chars.length; i++) {
		if (chars.slice(i + 1).indexOf(chars[i]) >= 0) {
			console.log(chars.slice(i + 1));
			return chars[i];
		}
	}

	return '-1';
}

console.log(firstRepeat('legolas'));
