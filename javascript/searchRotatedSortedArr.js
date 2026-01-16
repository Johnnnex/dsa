/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	// The idea here is (still binary search, but) that we divide the array, check which one is sorted
	// How to tell which is sorted? left MUST BE lesser than end, ASC order, end is arr[mid]
	// We check if the element is in the sorted array, if it is, we search, else we go to the unsorted, divide, rinse, wash, repeat

	let left = 0,
		right = nums.length - 1;

	while (left <= right) {
		let mid = left + ((right - left) >> 1); // Bitwise op, translates to Math.floor((right.left)/2)

		if (nums[left] <= nums[mid]) {
			// This is the sorted array

			if (target === nums[mid]) return mid;
			if (target === nums[left]) return left;

			if (target < nums[mid] && target > nums[left]) {
				// It's in this array, right becomes mid - 1

				right = mid - 1;
			} else {
				// Means our target isn't in this part of the array, we move left to mid + 1 instead
				left = mid + 1;
			}
		} else {
			// This is the unsorted array

			if (target === nums[mid]) return mid;
			if (target === nums[right]) return right;

			if (target > nums[mid] && target < nums[right]) {
				left = mid + 1;
			} else {
				right = mid - 1;
			}
		}
	}

	return -1;
};
