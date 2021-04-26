function signAll(obj, name) {
	let arr = Object.entries(obj).map(([a, i]) => [a, { ...i, signature: name }]);
	arr[arr.length - 1][1] = name;
	return Object.fromEntries(arr);
}

const obj = {
	kitchen: { painting: 100, piano: 1000, signature: '' },
	bathroom: { stereo: 220, signature: '' },
	signature: '',
};
console.log(signAll(obj, 'Rocky'));
