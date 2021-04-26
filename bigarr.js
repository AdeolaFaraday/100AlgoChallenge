function isOrdSub(smarr, bigarr) {
	let arr = [];
	for (let i = 0; i <= smarr.length; i++) {
		let index = bigarr.indexOf(smarr[0]);
		let newArr = bigarr.slice(index, bigarr.length);
		if (newArr.includes(smarr[i])) {
			arr.push(smarr[i]);
		}
	}
	return arr.length === smarr.length;
}

console.log(isOrdSub([1, 2, 3], [3, 2, 1, 2, 3]));
console.log(isOrdSub([5, 3, 1], [5, 4, 3, 2, 1]));
