function findOutlier(integers) {
	let even = 0;
	let odd = 0;
	integers.forEach((el) => {
		if (el % 2 == 0) {
			even += 1;
		} else {
			odd += 1;
		}
	});
	return even > odd ? integers.find((a) => a % 2 !== 0) : integers.find((a) => a % 2 == 0);
}

console.log(findOutlier([2, 6, 8, 10, 3]));
