/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findXSum = function (nums, k, x) {
	const result = [];

	for (let i = 0; i <= nums.length - k; i++) {
		const frequencies = new Map();

		// To count frequency of every element in this window
		for (let j = i; j < i + k; j++) {
			frequencies.set(nums[j], (frequencies.get(nums[j]) || 0) + 1);
		}

		// Sort em by frequencies, then values, if frequency is same
		const sorted = [...frequencies.entries()].sort((a, b) =>
			a[1] === b[1] ? b[0] - a[0] : b[1] - a[1]
		);

		let sum = 0;
		for (let j = 0; j < Math.min(sorted.length, x); j++) {
			// We're using Math.min because that array may just have lesser distinct x numbers that expected, we just take the sum of the full array's elements and their frequencies!

			const [number, freq] = sorted[j];

			sum += number * freq;
		}

		result.push(sum);
	}

	return result;
};
