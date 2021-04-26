function countBoomerangs(password) {
	let response = [];
	let result = password.split('  ');
	console.log;
	for (var i = 0; i <= result.length - 1; i++) {
		if (result[i] === result[i + 2] && arr[i] !== result[i + 1]) {
			response.push([result[i], result[i + 1], result[i + 2]]);
		}
	}
	return result;
}

console.log(countBoomerangs('namapasswordeee'));
