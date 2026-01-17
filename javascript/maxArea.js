/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
	if (!height.length) return 0;

	let maxArea = 0,
		left = 0,
		right = height.length - 1,
		area = 0;

	while (left < right) {
		area = (right - left) * Math.min(height[left], height[right]);
		maxArea = Math.max(area, maxArea);

		if (height[left] < height[right]) left++;
		else right--;
	}

	return maxArea;
};

// Time O(n), Space O(1)
