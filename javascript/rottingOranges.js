/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
	// I'd take an initial snapshot of each cell to count the number of unfresh and store the cells that are rotting;
	// This will take O(n^2) time, non negotiable

	let freshCount = 0;
	const queue = [];
	let index = 0; // I'd use this to traverse the queue
	let minuteCount = 0;

	const dirs = [
		[1, 0], // Up
		[-1, 0], // Down
		[0, 1], // Right
		[0, -1], // Left
	]; // We'duse this to infect cells

	for (let row = 0; row < grid.length; row++) {
		for (let col = 0; col < grid[row].length; col++) {
			if (grid[row][col] === 2) queue.push([row, col]); // Rotting cell
			if (grid[row][col] === 1) freshCount++; // Fresh cell
		}
	} // O(m x n)

	// Now we traverse the queue level by level (BFS) and keep a snapshot of each level, it represents each minute
	// In that minute snapshot, we infect all rows and columns that are in the 4-diagonal adjacent range of a rotten orange
	// cell

	if (freshCount === 0) return 0;

	while (index < queue.length && freshCount > 0) {
		// Snapshot the current level (number of cells with rotten oranges)
		const levelLength = queue.length;

		// Traverse through that level
		for (let i = index; i < levelLength; i++) {
			const [x, y] = queue[i];

			// Infect all 4-adjacent non infected cell and decrement count!
			for (const [dx, dy] of dirs) {
				if (grid[x + dx]?.[y + dy] === 1) {
					freshCount--;
					grid[x + dx][y + dy] = 2; // Infect that cell (prevents endless loops)
					queue.push([x + dx, y + dy]); // Move the next set of infected oranges into the queue
				}
			}
		}

		minuteCount++;
		if (freshCount === 0) return minuteCount; // Early termination
		index = levelLength; // Move to next level/ minute snapshot
	}

	return !!freshCount ? -1 : minuteCount;
};
