function histogram(arr, char) {
	return arr
		.map((a) =>
			a == arr[arr.length - 1]
				? String(a).replace(String(a), char.repeat(a))
				: String(a).replace(String(a), char.repeat(a)) + '\n'
		)
		.join('');
}

console.log(histogram([1, 3, 4], '#'));
