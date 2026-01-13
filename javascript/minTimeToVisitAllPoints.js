/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
	let maxTime = 0;

	for (let i = 0; i < points.length - 1; i++) {
		const [x1, y1] = points[i];
		const [x2, y2] = points[i + 1];

		maxTime += Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1));
	}

	return maxTime;
};
// Chebyshev Distance
