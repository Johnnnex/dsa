var isBalanced = function (n) {
	const str = n.toString();
	const frequencies = new Map(); // Just one to 9, count frequency of these numbers (in chars) O(9) space => O(1)

	if (str.includes('0')) return false; // First case, string cannot have zero!

	for (const char of str) {
		frequencies.set(char, (frequencies.get(char) || 0) + 1);
	}

	for (const [char, frequency] of frequencies) {
		if (frequency !== parseInt(char)) return false;
	}

	return true;
};

/**
 * @param {number} n
 * @return {number}
 */
var nextBeautifulNumber = function (n) {
	let num = n + 1;

	while (!isBalanced(num)) {
		num++;
	}

	return num;
};

// OPTIMIZATIONS?
var isBalanced = function (n) {
	let num = n;
	const frequencies = new Map(); // Just one to 9, count frequency of these numbers O(9) space => O(1)

	while (num) {
		const key = num % 10;

		if (!key) return false; // If remainder is 0, we return false!

		frequencies.set(key, (frequencies.get(key) || 0) + 1);

		num = Math.trunc(num / 10);
	}

	for (const [key, frequency] of frequencies) {
		if (key !== frequency) return false;
	}

	return true;
};

/**
 * @param {number} n
 * @return {number}
 */
var nextBeautifulNumber = function (n) {
	let num = n + 1;

	while (!isBalanced(num)) {
		num++;
	}

	return num;
};
