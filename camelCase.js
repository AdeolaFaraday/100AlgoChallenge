function camelCasing(str) {
	let arr = str.split('');
	let newArr = [];
	for (let i = 0; i <= arr.length - 1; i++) {
		if (arr[i] === '_') {
			newArr.push(' ');
		} else {
			newArr.push(arr[i]);
		}
	}
	return newArr
		.join('')
		.split(' ')
		.map((a, i) =>
			i == 0
				? a.charAt(0).toLowerCase() + a.slice(1).toLowerCase()
				: a.charAt(0).toUpperCase() + a.slice(1).toLowerCase()
		)
		.join('');
}

console.log(camelCasing('low high_HIGH'));
console.log(camelCasing('unEcEsSARilY_loNG_vArIablE_NaME'));
