function caesarCipher(text, key) {
	alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'.split('');
	return text
		.split(' ')
		.map((a) =>
			a
				.split('')
				.map((a) => alphabet[alphabet.indexOf(a) + key])
				.join('')
		)
		.join(' ');
}

console.log(caesarCipher('z', 2));
