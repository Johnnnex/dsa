/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
	const leftMax = [];
	const rightMax = [];
	leftMax[0] = height[0];
	rightMax[height.length - 1] = height[height.length - 1];
	let waterUnits = 0;

	// Now sort the arrays so we can bubble the max values through the array!
	for (let i = 1; i < height.length; i++) {
		leftMax[i] = Math.max(leftMax[i - 1], height[i]); // To weigh which height is higher (prev || current) so we can place it in the current's stead
	}
	for (let i = height.length - 2; i >= 0; i--) {
		rightMax[i] = Math.max(rightMax[i + 1], height[i]);
	}

	for (let i = 0; i < height.length; i++) {
		const currentHeight = Math.min(leftMax[i], rightMax[i]);

		waterUnits += currentHeight - height[i];
	}

	return waterUnits;
};
// O(n) -> Both complexities

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
	let lMax = 0,
		rMax = 0; // Max value as we move

	let left = 0,
		right = height.length - 1; // Pointers, we'd move these, sort height, deduct water level till we get to the middle!
	let waterLevel = 0;

	while (left < right) {
		if (height[left] <= height[right]) {
			// We first check if max value is smaller than current height, if it is, we can't trap water, need a higher
			// previous wall, that's the goal of lMax!
			if (lMax <= height[left]) {
				lMax = height[left];
			} else {
				// We can trap water cause previous wall is greater than this, therefore:
				waterLevel += lMax - height[left];
			}

			left++;
		} else {
			if (rMax <= height[right]) {
				rMax = height[right];
			} else {
				waterLevel += rMax - height[right];
			}

			right--;
		}
	}

	return waterLevel; // voila!
};
// O(1) space, O(n) time
