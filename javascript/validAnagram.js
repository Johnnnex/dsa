/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
	if (s.length !== t.length) return false;

	let strMap = {};

	for (let i = 0; i < s.length; i++) {
		strMap[s[i]] = (strMap[s[i]] || 0) + 1;
	}

	for (let i = 0; i < t.length; i++) {
		if (!strMap[t[i]]) {
			return false;
		}

		strMap[t[i]]--;
	}

	return true;
};
