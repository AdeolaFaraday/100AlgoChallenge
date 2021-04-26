function sevenBoom(arr) {
	const str = arr.toString();

	const paragraph = str;
	const regex = /[7]/g;
	const found = paragraph.match(regex);
	if (found == null) {
		return 'there is no 7 in the array';
	} else {
		return 'Boom!';
	}
}
