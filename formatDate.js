function formatDate(date) {
	let arr = String(date).split(' ');
	let subArr = String(date).split(' ')[4].split(':').join('');
	let newM = String(new Date(`${arr[1]} 20, 69 00:20:18`).getMonth() + 1);
	let aMon = newM.length == 1 ? '0' + newM : newM;
	let newDate = `${arr[3]}${aMon}${arr[2]}${subArr}`;
	return newDate;
}

console.log(formatDate(new Date(2020, 6, 4, 8, 0, 0)));
