function canFind(bigrams, words) {
	let arr = bigrams.map((a) => words.map((b) => b.includes(a)));
	let newArr = arr.map((a) => a.includes(true));
	if (newArr.includes(false)) {
		return false;
	} else {
		return true;
	}
}

console.log(canFind(['oo', 'mi', 'ki', 'la'], ['milk', 'chocolate', 'cooks']));
