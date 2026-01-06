/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
	// Store value such that: stack => [previousStr, count] when string [ seen
	// When ] seen, pop from stack, iterate till s.length - 1

	const stack = [];
	let currentStr = '';
	let currentNum = 0;

	for (let i = 0; i < s.length; i++) {
		const char = s[i];

		if (char >= '0' && char <= '9') {
			currentNum = currentNum * 10 + parseInt(char);
		} else if (char === '[') {
			stack.push([currentStr, currentNum]);

			currentStr = '';
			currentNum = 0;
		} else if (char === ']') {
			if (!stack.length) return; // rare edge case, may not hit but poor config already, :)...

			const [prevStr, prevNum] = stack.pop();

			currentStr = prevStr + currentStr.repeat(prevNum);
		} else {
			currentStr += char;
		}
	}

	return currentStr;
};
