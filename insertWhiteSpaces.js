function insertWhitespace(s) {
	return s.replace(/([A-Z])/g, ' $1').trim();
}

console.log(insertWhitespace('SheWalkaToTheBeach'));
