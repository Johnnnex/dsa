/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
	let depth = 0,
		maxDepth = 0;

	for (const char of s) {
		if (char === '(') {
			depth++;

			maxDepth = Math.max(depth, maxDepth);
		} else if (char === ')') depth--;
	}

	return maxDepth;
};
