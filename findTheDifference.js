function findTheDifference(s, t) {
	let sSort = s.split('').sort();
	let sort = t.split('').sort();
	let newArr = [];
	for (let i = 0; i <= sort.length; i++) {
		if (sSort.indexOf(sort[i]) !== sSort.indexOf(sSort[i]) || sSort.indexOf(sSort[i]) == -1) {
			newArr.push(sort[i]);
		}
	}
	return newArr[0];
}

console.log(findTheDifference('abcd', 'abcde'));
