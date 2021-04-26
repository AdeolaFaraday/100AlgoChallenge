function validRondo(s) {
	let arr = s.split('');
	let sCount = 0;
	for (let i = 0; i <= arr.length - 1; i++) {
		if (arr[i] == arr[i + 1]) {
			sCount += 1;
		}
	}
	return arr[0] == 'A' && arr[arr.length - 1] == 'A' && sCount == 0;
}

console.log(validRondo('ABACADAEAFAGAHAIAJA'));
