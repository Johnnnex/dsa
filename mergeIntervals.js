/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
	intervals.sort((a, b) => a[0] - b[0]);

	const result = [intervals[0]];
	for (let i = 1; i < intervals.length; i++) {
		const currentInterval = intervals[i];
		const lastIndex = result.length - 1;
		const lastInterval = result[lastIndex];

		if (currentInterval[0] <= lastInterval[1]) {
			result[lastIndex][1] = Math.max(currentInterval[1], lastInterval[1]);
		} else {
			result.push([currentInterval[0], currentInterval[1]]);
		}
	}

	return result;
};

// Instinctively better, why?, I get to edit the array reference, better!
var merge = function (intervals) {
	if (intervals.length <= 1) return intervals;

	// Sort by start time
	intervals.sort((a, b) => a[0] - b[0]);

	const result = [];
	let current = intervals[0];
	result.push(current);

	for (let i = 1; i < intervals.length; i++) {
		const next = intervals[i];

		if (next[0] <= current[1]) {
			// Overlap → merge
			current[1] = Math.max(current[1], next[1]);
		} else {
			// No overlap
			current = next;
			result.push(current);
		}
	}

	return result;
};
