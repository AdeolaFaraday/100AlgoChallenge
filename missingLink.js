function missingLetter(str) {
	const letters = 'abcdefghijklmnopqrstuvwxyz';
	const letArr = letters.split('');
	let strArr = str.split('');
	let firstIndex = strArr[0];
	let lastIndex = strArr[strArr.length - 1];
	let newIndex = letArr.findIndex((a) => a == firstIndex);
	let newIndex2 = letArr.findIndex((a) => a == lastIndex);
	let newArr = letArr.slice(newIndex, newIndex2 + 1);
	let num = [];
	for (let i = 0; i <= strArr.length; i++) {
		if (!strArr.includes(newArr[i])) {
			num.push(newArr[i]);
		}
	}
	console.log(num.length);
	return num[0] == null ? 'No missing link' : num[0];
}

console.log(missingLetter('mnopqs'));
