function join(arr) {
	//["ovenvieraserious", 2]
	let newArr = arr.map((a, i) => a.split('').map((b) => (a == arr[i + 1].charAt(0) ? a : i)));
	return newArr;
}

console.log(join(['oven', 'envier', 'erase', 'serious']));
