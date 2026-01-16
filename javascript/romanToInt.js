/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
	const symbolToVal = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};

	let integer = 0,
		currNum = 0,
		nextNum = 0;

	for (let i = 0; i < s.length; i++) {
		currNum = symbolToVal[s[i]];
		nextNum = symbolToVal[s[i + 1]];

		if (nextNum && currNum < nextNum) {
			integer -= currNum; // Subtract if smaller than next
		} else {
			integer += currNum; // Add otherwise
		}
	}

	return integer;
};
