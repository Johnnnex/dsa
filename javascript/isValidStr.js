/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	const stack = [];
	const pairs = {
		')': '(',
		'}': '{',
		']': '[',
	};

	for (let i = 0; i < s.length; i++) {
		const currentChar = s[i];

		if (pairs[currentChar]) {
			if (stack.length && stack[stack.length - 1] === pairs[currentChar])
				stack.pop();
			else return false;
		} else stack.push(currentChar);
	}

	console.log(!stack.length);

	return !stack.length;
};

isValid(']');
