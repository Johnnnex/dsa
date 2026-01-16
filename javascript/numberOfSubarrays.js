const isOdd = (number) => {
	return number % 2 !== 0;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
	let left = 0,
		right = 0,
		oddNumsCount = 0,
		prefixSum = 0,
		result = 0;

	while (right < nums.length) {
		if (isOdd(nums[right])) {
			prefixSum = 0;
			oddNumsCount++;
		}

		while (oddNumsCount === k) {
			prefixSum++;

			if (isOdd(nums[left])) oddNumsCount--;

			left++;
		}

		right++;
		result += prefixSum;
	}

	return result;
};
