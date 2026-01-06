// DFS
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
	let count = 0;

	const dfs = (i, j) => {
		if (grid[i]?.[j] === '1') {
			grid[i][j] = '0';

			dfs(i + 1, j); // Down
			dfs(i - 1, j); // Up
			dfs(i, j + 1); // Right
			dfs(i, j - 1); // Left
		}
	};

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if (grid[i][j] === '1') {
				count++;
				dfs(i, j); // Sink Islands
			}
		}
	}

	return count;
};

// BFS
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
	let count = 0;

	const bfs = (i, j) => {
		grid[i][j] = '0';

		const queue = [[i, j]];

		const dirs = [
			[-1, 0],
			[0, 1],
			[1, 0],
			[0, -1],
		];
		for (const [i, j] of queue) {
			// Else: while queue.length...
			for (const [dx, dy] of dirs) {
				const x = i + dx;
				const y = j + dy;

				if (grid[x]?.[y] === '1') {
					grid[x][y] = '0';

					queue.push([x, y]);
				}
			}
		}
	};

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if (grid[i][j] === '1') {
				count++;
				bfs(i, j); // Sink Islands
			}
		}
	}

	return count;
};
