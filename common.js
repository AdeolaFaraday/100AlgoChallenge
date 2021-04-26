function commonElements(arr1, arr2) {
	let result = arr1.filter((a) => arr2.includes(a));
	console.log(result);
}

commonElements([-1, 3, 4, 6, 7, 9], [1, 3]);
