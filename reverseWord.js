function reverseWords(string) {
	return string
		.split(' ')
		.reverse()
		.filter((a) => a !== '')
		.join(' ');
}

console.log(reverseWords(' the sky is blue'));
