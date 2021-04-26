function countIdenticalArrays(arr1, arr2, arr3, arr4) {
	let arr = Array.from(new Set([arr1, arr2, arr3, arr4].map((a) => a.toString()))).length;
	return arr < 4 ? 4 - arr + 1 : 0;
}

console.log(countIdenticalArrays([0, 0, 0], [0, 1, 2], [0, 0, 0], [2, 1, 0]));
