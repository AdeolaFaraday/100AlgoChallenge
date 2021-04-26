function password(str) {
	let response = '';
	let result = str.split('');
	for (var i = 0; i <= result.length - 1; i++) {
		if (
			result[i] === 'p' &&
			result[i + 1] === 'a' &&
			result[i + 2] === 's' &&
			result[i + 3] === 's' &&
			result[i + 4] === 'w' &&
			result[i + 5] === 'o' &&
			result[i + 6] === 'r' &&
			result[i + 7] === 'd'
		) {
			response = 'letter contain password';
		}
	}

	let string = str;

	let strUp = string.toLowerCase();

	if (str.length < 3) {
		return 'password must be 3 char or >';
	} else if (!/\d/.test(str)) {
		return 'password must contain a digit';
	} else if (!/[.,!?]/.test(str)) {
		return 'password must contain punction mark';
	} else if (string == strUp) {
		return 'password must have uppercase letter';
	} else if (response) {
		return 'password can not contain the word password';
	} else {
		return 'signup success';
	}
}

let result = password('loAh6.password');

console.log(result);
