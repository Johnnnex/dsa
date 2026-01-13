var topKFrequent = function (nums, k) {
	const map = new Map();

	// Count frequencies
	for (const num of nums) {
		map.set(num, (map.get(num) || 0) + 1);
	}

	// Convert to array and sort by frequency
	const arrFreq = Array.from(map.entries());
	arrFreq.sort((a, b) => b[1] - a[1]);

	// Get top k
	const results = [];
	for (let i = 0; i < k; i++) {
		results.push(arrFreq[i][0]);
	}

	return results;
};
