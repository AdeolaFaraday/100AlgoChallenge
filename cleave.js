function cleave(str, words) {
	let arr = [],
		tmp = '';
	while (str.length > 0) {
		tmp = '';
		words.forEach((x) => {
			if (str.startsWith(x)) tmp = x;
		});
		if (!tmp.length) return 'Cleaving stalled: Word not found';
		if (arr[arr.length - 1] == 'after') tmp = 'a';
		arr.push(tmp);
		str = str.slice(tmp.length);
	}
	return arr.join(' ');
}

console.log(
	cleave('solongandthanksforallthefish', [
		'a',
		'after',
		'all',
		'an',
		'and',
		'are',
		'as',
		'by',
		'continued',
		'deadlines',
		'doubly',
		'fish',
		'for',
		'go',
		'happen',
		'happened',
		'i',
		'illusion',
		'is',
		'long',
		'love',
		'lunchtime',
		'make',
		'moment',
		'noise',
		'nothing',
		'of',
		'or',
		'people',
		'problem',
		'second',
		'so',
		'summarize',
		'summary',
		'thanks',
		'the',
		'then',
		'they',
		'time',
		'to',
		'whooshing',
	])
);
