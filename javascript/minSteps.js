/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
	if (s.length !== t.length) return -1;

	const wordArr = Array(26).fill(0);
	let steps = 0;

	for (let i = 0; i < s.length; i++) {
		wordArr[s.charCodeAt(i) - 97]++;
		wordArr[t.charCodeAt(i) - 97]--;
	}

	wordArr.forEach((number) => {
		if (number < 0) steps += Math.abs(number);
	});

	return steps;
};
