/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
	const MAX = 2 ** 31 - 1; // Last bit belongs to the sign and the first digit is 0, hence "-1"
	const MIN = -(2 ** 31); // Signed, the last one bit belongs to the sign

	let result = 0,
		digit = 0;

	while (x) {
		if (result > MAX / 10 || (result === MAX / 10 && digit > 7)) return 0; // This extra part may not be so necessary, we can as well just ignore the tens and say where result >= MAX/10, the goal is to avoid overflow when we do out reverse math (we multiply by 10, hence the check if the result is already greater than or equal to max/10, same for min)
		if (result < MIN / 10 || (result === MIN / 10 && digit < -8)) return 0;

		digit = x % 10;
		result = result * 10 + digit;

		x = Math.trunc(x / 10);
	}

	return result;
};
