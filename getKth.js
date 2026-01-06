const getPower = (number) => {
	let num = number;
	let steps = 0;
	while (num !== 1) {
		if (num % 2 === 0) {
			num = num / 2;
		} else {
			num = 3 * num + 1;
		}
		steps++;
	}

	return steps;
};

/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function (lo, hi, k) {
	const results = [];

	for (let number = lo; number <= hi; number++) {
		const power = getPower(number);
		results.push([number, power]);
	}

	results.sort((a, b) => {
		if (a[1] === b[1]) return a[0] - b[0];
		else return a[1] - b[1];
	});

	return results[k - 1][0];
};
