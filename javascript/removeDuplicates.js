/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
	// Use a stack to track [char, count];
	// Iterate, once count gets to k, pop, else push
	// If stack is empty | current char isn't same with prev, compulsory push with count => 1
	// Else we assume it's same char, increment!

	const stack = [];

	for (const char of s) {
		if (!stack.length || stack[stack.length - 1][0] !== char) {
			stack.push([char, 1]);
		} else {
			stack[stack.length - 1][1]++;

			if (stack[stack.length - 1][1] === k) stack.pop();
		}
	}

	let string = '';

	for (const config of stack) {
		[char, count] = config;

		string += char.repeat(count);
	}

	return string;
};
