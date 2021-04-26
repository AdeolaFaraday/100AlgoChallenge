// Create a recursive function that determines whether a word is a palindrome or not.
// const foundOtp = await Otp.findOne({ $and: [{ userId }, { code: otp }] });
// const date = new Date();
// const dataBaseDate = foundOtp.createdAt;
// //TODO: remind me, this value should be coming from the genereal configuration collection
// const TWO_MIN = 2 * 60 * 1000;

// if (date - new Date(dataBaseDate) > TWO_MIN) {
// 	//TODO: `delay for more that ${configDelay) mins`
// 	throw 'delayed by more than 2 mins';
// }
// Examples
// isPalindrome("madam") ➞ true

// isPalindrome("adieu") ➞ false

// isPalindrome("rotor") ➞ true

// function isPalindrome(wrd) {
// 	return !wrd || (wrd[0] === wrd[wrd.length-1] && isPalindrome(wrd.slice(1, -1)));
// }

// function isPalindrome(s) {
// 	if (s.length <= 1) {
// 		return true;
// 	}
// 	return s[0] == s[s.length-1] && isPalindrome(s.slice(1, -1))
// }

const isPalindrome = (str, count = 0) => {
	if (count == Math.ceil(str.length / 2)) return true;
	if (str[count] == str[str.length - (count + 1)]) {
		console.log(str[count]);
		count++;
		isPalindrome(str, count) ? count++ : 0;
	}
	console.log(count, Math.floor(str.length / 2));
	return count == Math.floor(str.length / 2) || count + 1 == Math.floor(str.length / 2);
};

console.log(isPalindrome('adieu'));
