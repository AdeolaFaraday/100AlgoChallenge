function findLongest(sentence) {
	let arr = sentence.split(' ').map((a) => a.length);
	let max = Math.max(...arr);
	let result = sentence
		.split(' ')
		.filter((a) => a.length == max)[0]
		.split('');
	let index = result.findIndex((a) => a.match(/[^a-zA-Z ]/g));
	return index >= 0 ? result.slice(0, index).join('').toLowerCase() : result.join('').toLowerCase('');
}

console.log(findLongest('Hello darkness my old friend.', "Yourself is your soul's captain and fate's master."));
