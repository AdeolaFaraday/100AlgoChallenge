function wordsToSentence(words) {
	if (words === null || words.length == 0) {
		return '';
	} else if (words.length == 1) {
		return words[0];
	} else if (words.length >= 2) {
		let filter = words.filter((a) => a !== '');
		newArr.splice(newArr.length - 1, 0, 'and');
		return newArr.join(', ').replace(', and,', ' and');
	}
}
console.log(wordsToSentence(null));
