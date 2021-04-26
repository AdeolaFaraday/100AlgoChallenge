function product(x, i) {
	return function (y, o) {
		return function (z, p) {
			return x * y * z + i * o * p;
		};
	};
}

console.log(product(1, 2)(1, 1)(2, 3));
