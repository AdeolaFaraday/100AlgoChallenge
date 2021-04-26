function encrypt(word) {
	let reverse = word.split('').reverse();
	let str = reverse.join('');
	let arr = reverse.map((a) =>
		a == 'a'
			? a.replace(a, 0)
			: a == 'e'
			? a.replace(a, 1)
			: a == 'i'
			? a.replace(a, 2)
			: a == 'o'
			? a.replace(a, 2)
			: a == 'u'
			? a.replace(a, 3)
			: a
	);
	let concat = arr.join('') + 'aca';
	return concat;
}

console.log(encrypt('banana'));

//a => 0 e => 1 i => 2 o => 2 u => 3

//0n0n0baca
//k0r3baca
