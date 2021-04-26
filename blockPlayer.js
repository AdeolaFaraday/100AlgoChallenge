// Create a function that returns a number which can block the player from reaching 3 in a row in a game of Tic Tac Toe. The number given as an argument will correspond to a grid of Tic Tac Toe: topleft is 0, topright is 2, bottomleft is 6, and bottomright is 8.

// Create a function that takes two numbers a, b and returns another number.
// This number should be the final one in a line to block the player from winning.
// Examples
// blockPlayer(0, 3) ➞ 6

// blockPlayer(0, 4) ➞ 8

// blockPlayer(3, 5) ➞ 4

// The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:

// [1, [2, 3]]
// // 2 elements, number 1 and array [2, 3]
// Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.

const blockPlayer = (num1, num2) => {
	const diff = Math.abs(num1 - num2);
	const result = (num) => {
		if (diff > num) {
			return num1 + num;
		} else if (num2 + diff >= 12) {
			return num1 - num;
		} else {
			return num2 + num;
		}
	};
	if (diff % 4 == 0) {
		return result(4);
	} else if (diff % 3 == 0) {
		return result(3);
	} else {
		if (diff == 2) return num1 + 1;
		return result(diff);
	}
};
