/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
	const arr = [...nums].sort((a, b) => a - b);

	for (let i = 0; i <= arr.length; i++) {
		if (arr[i] !== i) return i;
	}
};
// O(nlogn) time, O(n) space, Brute force!

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
	const hasSetOfNums = new Set(nums);

	for (let i = 0; i <= nums.length; i++) {
		if (!hasSetOfNums.has(i)) return i;
	}
};
// O(n) space, O(n) time, could be better!

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
	// Let's use GAUSS sum formula, we find the expected sum: n * (n+1)/2 [Sum of 0 -> n]

	const n = nums.length;
	const expectedSum = (n * (n + 1)) >> 1; // Bitwise op, translates to (n * (n + 1))/2
	let actualSum = 0;

	for (const num of nums) {
		actualSum += num;
	}

	return expectedSum - actualSum;
};

// Hacked it!, O(n) time, O(1) space
