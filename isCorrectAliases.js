function isCorrectAliases(names, aliases) {
	let arr = names.map((a, i) => a.split('')[0] == aliases[i].split('')[0]);
	let index = aliases.map((a) => a.split('').findIndex((a) => a == ' ')).map((a) => a + 1);
	let newArr = aliases.map((a, i) => a.split('')[0] == a.split('')[index[i]]);
	return arr.includes(false) || newArr.includes(false) ? false : true;
}

console.log(
	isCorrectAliases(
		['Adrian M.', 'Harriet S.', 'Mandy T.'],
		['Amazing Artichoke', 'Hopeful Hedgehog', 'Marvelous Mouse']
	)
);
