/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	const map = {};
	let numbers = [];

	nums?.forEach((number, index) => {
		const compliment = target - number;

		if (compliment in map) {
			numbers = [index, map[compliment]];
		} else {
			map[number] = index;
		}
	});

	console.log(numbers);

	return numbers;
};

twoSum([2, 7, 11, 15], 9);
