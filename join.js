function join(arr) {
	//["happythoneyelplank'']
	let word = '';
	let count = 0;
	const countArr = [];
	for (let i = 0; i <= arr.length - 2; i++) {
		for (let w = 0; w <= arr[i].length - 1; w++) {
			if (arr[i + 1][count] == arr[i][w]) {
				count += 1;
			} else {
				count = 0;
			}
		}
		countArr.push(count);
		const compare = i == 0 ? arr[i] : word;
		word = compare + arr[i + 1].substring(count);
	}
	const minVal = Math.min(...countArr);
	console.log(countArr);
	return [word, minVal];
}

console.log(join(['oven', 'envier', 'erase', 'serious']));

console.log(join(['happy', 'python', 'honey', 'yelp', 'plank', 'lanky']));
