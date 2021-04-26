function uniqueAbbrev(abbs, words) {
	return words.every((w) => abbs.filter((a) => w.startsWith(a)).length < 2);
}
function uniqueAbbrev(abbs, words) {
	let result = words.map((a) => abbs.map((b) => a.startsWith(b)));
	let fRes = result.map((a) => a.filter((a) => a == true));
	return fRes.flat().length > 3 ? false : true;
}

console.log(uniqueAbbrev(['ho', 'h', 'ha'], ['house', 'hope', 'happy']));
