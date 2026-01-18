/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
	// Okay, let's get greedy, I'd calculate the cost it takes to send them all to city A
	// Then I'd calculate the refunds I'd get I sent them to be, that's a-b (If b is cheaper, we'd have positive data!)
	// I'd then sort O(nlogn), then I'd get the top n people, assuming n => arrlen/2
	// I'd then take their costs and subtract from the initial amount I spent on taking people to city a

	let cost = 0;
	const refundArray = [];

	for (let i = 0; i < costs.length; i++) {
		const [costA, costB] = costs[i];

		refundArray[i] = costA - costB;
		cost += costA;
	} // O(n), I did the sum of a and finding the total refunds in one loop;

	refundArray.sort((a, b) => b - a); // Descending O(nlogn) max time in this algorithm

	for (let i = 0; i < costs.length / 2; i++) {
		// Or refundArray.length, really doesn't matter here
		cost -= refundArray[i];
	}

	return cost;
};
