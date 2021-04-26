function almostUniform(nums) {
	let arr = [];
	for (let i = 0; i <= nums.length; i++) {
		if (nums[i] - nums[i + 1] == 1 || nums[i] - nums[i - 1] == -1) {
			arr.push(nums[i]);
		}
	}
	return arr;
}

console.log(almostUniform([1, 3, 2, 2, 5, 2, 3, 7]));
