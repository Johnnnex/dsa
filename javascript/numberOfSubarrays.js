var isOdd = function (num) {
	return num % 2 !== 0;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
	// We'd initialize a sliding window, in this window, if we hit a new odd number on our right leg, we reset prefixSum to
	// 0, why prefixSum?, we're keeping how many combinations we were able to form within that window, so we keep adding
	// that sum to the result until we enter another window, this only means: we could make that amount of combinations in
	// that window and since there's not new window yet, it means, for this new leg, we CAN make `prefixSum` number of
	// combinations here too!

	// For the lack of a better word: Each time we move left while maintaining exactly k odds, we're discovering another
	// valid starting point. We accumulate these counts in prefixSum, then add it to our result for each new right position."

	let result = 0,
		oddCount = 0,
		prefixSum = 0,
		left = 0,
		right = 0;
	while (right < nums.length) {
		if (isOdd(nums[right])) {
			prefixSum = 0;
			oddCount++;
		}

		while (oddCount === k) {
			if (isOdd(nums[left])) oddCount--;

			prefixSum++;
			left++;
		}

		result += prefixSum;
		right++;
	}

	return result;
};
