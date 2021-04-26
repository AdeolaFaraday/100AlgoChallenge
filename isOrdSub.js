function isOrdSub(smarr, bigarr) {
	let index = bigarr.indexOf(smarr[0]);
	console.log(index);
	let arr = Array.from(new Set(bigarr.slice(index, bigarr.length)));
	let newArr = [];
	for (let i = 0; i < smarr.length; i++) {
		newArr.push(arr.indexOf(smarr[i]));
	}
	return newArr;
	//return newArr.join('').split('-1').join('').length == smarr.length
}
console.log(isOrdSub([0, 1, 0, 1], [1, 1, 1, 1, 0, 0, 0, 1, 1, 0]));
