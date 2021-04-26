function toArray(obj) {
	return Object.keys(obj).map((x) => [x, obj[x]]);
}

console.log(toArray({ a: 1, b: 2 }));
