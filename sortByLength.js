function sortByLength(str) {
	return str
		.split(' ')
		.sort((a, b) => a.length - b.length || a.toLowerCase().localeCompare(b.toLowerCase()))
		.join(' ');
}

console.log(sortByLength('To be or not to be, that is the question.'));
