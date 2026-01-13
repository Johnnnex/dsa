/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
	const [a, b] = edges[0];
	const [c, d] = edges[1];

	if (a === c || a === d) return a;
	return b;
};

// Time O(1)
