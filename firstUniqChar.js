/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
	const wordArr = Array(26).fill(0);
	let index = -1;

	for (const char of s) {
		wordArr[char.charCodeAt(0) - 97]++;
	}

	for (let i = 0; i < s.length; i++) {
		if (wordArr[s[i].charCodeAt(0) - 97] === 1) {
			index = i;
			break;
		}
	}

	return index;
};
