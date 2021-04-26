function numToEng(n) {
	let str = String(n);
	let wArr = ['een', 'enty', 'fifty'];
	let wObj = {
		0: 'zero',
		1: 'one',
		2: 'two',
		3: 'three',
		4: 'four',
		5: 'five',
		6: 'six',
		7: 'seven',
		8: 'eight',
		9: 'nine',
	};
	if (str.length == 1) {
	} else if (str.length == 2) {
	} else {
		return `${wObj[str[0]]} hundred twenty ${wObj[str[2]]}`;
	}
}

console.log(numToEng(519));
