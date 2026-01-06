/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function (transactions) {
	const txMap = {};
	const invalidIndexes = new Set();

	const invalidTxs = [];

	for (let i = 0; i < transactions.length; i++) {
		const currentTx = transactions[i];

		const [name, time, amount, city] = currentTx?.split(',');

		if (!!txMap[name]) {
			txMap[name].forEach((item) => {
				const isTimeInvalid = Math.abs(Number(item?.time) - Number(time)) <= 60;
				const isCityInvalid = item?.city !== city;

				if (isTimeInvalid && isCityInvalid) {
					invalidIndexes.add(i);
					invalidIndexes.add(item?.index);
				}
			});
		}
		if (Number(amount) >= 1000) invalidIndexes.add(i);

		if (!txMap[name]) txMap[name] = [];
		txMap[name].push({ time, city, index: i });
	}

	for (let i of invalidIndexes) {
		invalidTxs.push(transactions[i]);
	}

	console.log(invalidTxs);

	return invalidTxs;
};

invalidTransactions(['alice,20,800,mtv', 'bob,50,1200,mtv']);

// The time complexity is O(n^2), and the space complexity is O(n).
