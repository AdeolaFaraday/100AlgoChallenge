const emailHelper = (str) => {
	let strArr = str.split('');
	let index = strArr.findIndex((a) => a == '@');
	return strArr.slice(0, index).join('');
};

console.log(emailHelper('adexconly@gmail.com'));
