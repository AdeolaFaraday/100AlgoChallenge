// Write a function that returns the total number of non-nested items in a nested array.

// Examples
// getLength([1, [2, 3]]) ➞ 3

// getLength([1, [2, [3, 4]]]) ➞ 4

// getLength([1, [2, [3, [4, [5, 6]]]]]) ➞ 6

// getLength([1, [2], 1, [2], 1]) ➞ 5

const getLength = (items) => {
	let count = 0;
	for (let item of items) {
		if (typeof item != 'number') {
			count += getLength(item);
		} else {
			count++;
		}
	}
	return count;
};

//or use flat infinity function

console.log(getLength([1, 3, [2, 3]]));
