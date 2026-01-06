/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
	const stack = [];
	const toDelete = new Set();

	for (let i = 0; i < s.length; i++) {
		if (s[i] === '(') {
			stack.push(i);
		} else if (s[i] === ')') {
			if (stack.length) {
				stack.pop();
			} else {
				toDelete.add(i);
			}
		}
	}

	while (stack.length) {
		toDelete.add(stack.pop());
	}

	let result = '';
	for (let i = 0; i < s.length; i++) {
		if (!toDelete.has(i)) {
			result += s[i];
		}
	}
	return result;
};

// Memory optimization
/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
	const stack = [];
	const stringAsArray = s.split('');

	for (let i = 0; i < s.length; i++) {
		if (s[i] === '(') {
			stack.push(i);
		} else if (s[i] === ')') {
			if (stack.length) {
				stack.pop();
			} else {
				stringAsArray[i] = '';
			}
		}
	}

	stack.forEach((item) => (stringAsArray[item] = ''));

	return stringAsArray.join('');
};
