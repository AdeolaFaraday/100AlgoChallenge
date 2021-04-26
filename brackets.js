function brackets(str) {
	let sort = str.split('').filter((a) => a == '(' || a == ')');
	let val = [];
	if (sort[0] == '(' && sort[1] == ')') {
		for (let i = 0; i <= sort.length / 2; i++) {
			if (sort[i] == '(' && sort[i + 1] == ')') {
				val.push(sort[i]);
				sort.slice(i + 2, sort.length);
			}
			if (sort[i] == '(' && sort[sort.length - (i + 1)] == ')') {
				val.push(sort[i]);
			}
		}
	} else {
		for (let i = 0; i <= sort.length / 2; i++) {
			if (sort[i] == '(' && sort[sort.length - (i + 1)] == ')') {
				val.push(sort[i]);
			}
		}
	}
	return sort.length / 2 == val.length;
}
console.log(brackets('(a*(b-c)     )'));
console.log(brackets('(...)...(..(...).... )'));
