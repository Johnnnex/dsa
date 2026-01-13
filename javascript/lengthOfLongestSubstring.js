/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	let answer = 0;
	const count = {};

	let left, right;
	left = right = 0;

	while (right < s.length) {
		const rightChar = s[right];

		count[rightChar] = (count[rightChar] || 0) + 1;

		while (count[rightChar] > 1) {
			const leftChar = s[left];
			count[leftChar]--;
			left++;
		}

		answer = Math.max(answer, right - left + 1);
		right++;
	}

	console.log(answer);

	return answer;
};

lengthOfLongestSubstring('abcabcbb');

// Possibly better
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	// Two pointers..., left right, 0, move right, store in a set

	let left = 0,
		right = 0;
	const seen = new Set();
	let count = 0,
		maxCount = 0;

	while (right < s.length) {
		if (seen.has(s[right])) {
			while (seen.has(s[right])) {
				seen.delete(s[left]);
				count--;
				left++;
			}
		} else {
			seen.add(s[right]);
			count++;
			maxCount = Math.max(count, maxCount);
			right++;
		}
	}

	return maxCount;
};
