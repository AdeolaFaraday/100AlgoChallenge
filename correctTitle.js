function correctTitle(str) {
	const constant = ['and', 'the', 'in', 'of'];
	const toUpper = (txt) => {
		if (constant.includes(txt.toLowerCase())) {
			return txt.toLowerCase();
		}
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	};
	const wordArr = str.split(' ').map((a) => {
		if (a.includes('-')) {
			return a
				.split('-')
				.map((b) => toUpper(b))
				.join('-');
		} else if (constant.includes(a.toLowerCase())) {
			return a.toLowerCase();
		} else {
			return toUpper(a);
		}
	});
	return wordArr.join(' ');
}

console.log(correctTitle('jOn-The-SnokINg, IN thE noRth.'));
