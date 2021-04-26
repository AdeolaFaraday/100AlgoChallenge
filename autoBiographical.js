function isAutobiographical(n) {
	let arr = n.toString().split('');
	let index = arr.map((a, i) => arr.filter((b) => b == i).length);
	return arr.join('') === index.join('');
}

console.log(isAutobiographical(1210));
