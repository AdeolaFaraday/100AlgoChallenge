function buildStaircase(height, block) {
	let arr = [];
	let res = '_';
	for (let i = 1; i <= height; i++) {
		arr.push([block.repeat(i).split(''), Array.from(res.repeat(height - i))]);
	}
	return arr.map((a) => a.flat());
}

console.log(buildStaircase(3, '#'));
