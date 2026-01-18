/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
	const n = grid.length;

	// Edge cases: start or end blocked
	if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) return -1;

	// Single cell grid
	if (n === 1) return 1;

	// BFS, obvious EZ pattern
	var bfs = function () {
		const queue = [[0, 0, 1]]; // Coordinates & length (starting with one)
		grid[0][0] = 1; // Mark as visited (modify grid to save space)

		let index = 0;

		const dirs = [
			[-1, 0], // Up
			[1, 0], // Down
			[0, 1], // Right
			[0, -1], // Left
			[-1, -1], // Top left
			[-1, 1], // Top right
			[1, -1], // Bottom left
			[1, 1], // Bottom right
		];

		while (index < queue.length) {
			const [x, y, len] = queue[index];

			if (x === n - 1 && y === n - 1) {
				return len;
			}

			for (const [dx, dy] of dirs) {
				if (grid[x + dx]?.[y + dy] === 0) {
					queue.push([x + dx, y + dy, len + 1]);
					grid[x + dx][y + dy] = 1;
				}
			}
			index++;
		}

		return -1;
	};

	return bfs(); // Starting from top diagonal
};
