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
