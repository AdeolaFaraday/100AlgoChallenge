function arrow(n) {
	let arr = ['>'];
	for (let i = 0; i <= n - 2; i++) {
		arr.push('>' + arr[i]);
	}
	let newArr = [...arr];
	let aArr = newArr.sort((a, b) => b.length - a.length);
	let comArr = arr.concat(newArr);
	if (n % 2 !== 0) {
		comArr.splice(n, 1);
	}
	return comArr;
}

console.log(arrow(5));
