/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
	// Typical DFS with backtracking!
	const rows = obstacleGrid.length;
	const cols = obstacleGrid[0].length;

	// Rare edgecase, will ask if needed, if start/end is blocked
	if (obstacleGrid[0][0] === 1 || obstacleGrid[rows - 1][cols - 1] === 1)
		return 0;
	// Single cell with 0, redundant, the dfs call will do a good job in picking this edgecase
	if (rows === 1 && cols === 1) {
		return obstacleGrid[0][0] === 0 ? 1 : 0;
	}

	const dirs = [
		[1, 0], // Down
		[0, 1], // Right
	];

	let paths = 0;
	var dfs = function (i, j) {
		if (i === rows - 1 && j === cols - 1) {
			paths++;
			return;
		}

		for (const [dx, dy] of dirs) {
			const x = i + dx,
				y = j + dy;
			if (obstacleGrid[x]?.[y] === 0) {
				// Set grid to 1 to avoid repitition in this stack
				obstacleGrid[x][y] = 1;
				dfs(x, y); // Explore
				obstacleGrid[x][y] = 0; // Backtrack
			}
		}
	};

	dfs(0, 0);
	return paths;
};
// DFS, but, TLE hit!, let's do some DP!

// DP (TOP DOWN, JUST DFS WITH SOME MEMO SAUCE)

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
	// Let's do some dynamic programming (Top - Down)::
	// We memoize since we're being asked for "number" of unique paths, not the paths themselves!

	const rows = obstacleGrid.length;
	const cols = obstacleGrid[0].length;

	const memo = Array.from({ length: rows }, () => Array(cols).fill(0));
	// Now we have the memo looking somewhat like this:
	// [
	//     [0, 0, 0],
	//     [0, 0, 0],
	//     [0, 0, 0],
	// ] Assuming m x n = 3 x 3;

	// Edge case: start or end = 1, won't work, invalid grid
	if (obstacleGrid[0][0] === 1 || obstacleGrid[rows - 1][cols - 1] === 1)
		return 0;

	var dp = function (i, j) {
		// Edgecase: If out of bounds or obstacle (1), return 0 to fill up memo
		if (j >= cols || i >= rows || obstacleGrid[i][j] === 1) return 0;

		// Basecase: If end, return 1 to fill up memo
		if (i === rows - 1 && j === cols - 1) return 1;

		// See if path has been calculated in memo before now (whilst coming up the stack)
		if (memo[i][j]) return memo[i][j];

		// Store current result in memo (means none of those cases hit)
		memo[i][j] = dp(i + 1, j) + dp(i, j + 1); // Recurse right and down to get sum of paths!

		return memo[i][j];
	};

	// We start from top left cell as requested
	return dp(0, 0);
}; // Still quite slow, but fair, why slow?, uses/burns more memory (Stack O(m + n - 2) => (m + n) and memo O(mxn)), even though it's same time as Bottom up approach

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
	const rows = obstacleGrid.length;
	const cols = obstacleGrid[0].length;

	// Edge case: Invalid obstacleGrid, top left or bottom right cell is an obstacle!
	if (obstacleGrid[0][0] === 1 || obstacleGrid[rows - 1][cols - 1] === 1)
		return 0;

	// Let's do some dynamic programming, but bottom up, build solutions from bottom upwards to beat that score!
	// Mind you, top down is more intuitive and works well, but this is kinda more optimized for this usecase

	// Memo to store previous computation
	const memo = Array.from({ length: rows }, () => Array(cols).fill(0));

	// Now we have the memo looking somewhat like this:
	// [
	//     [0, 0, 0],
	//     [0, 0, 0],
	//     [0, 0, 0],
	// ] Assuming m x n = 3 x 3;

	// Now let's start filling up some bottom cells, we fill from bottom right leftwards and upwards, why?
	// The robot was said to only move right and downwards, so retracng will only make sense leftwards and upwards!
	// Starting from bottom right:
	memo[rows - 1][cols - 1] = 1;

	// memo grid then becomes:
	// [
	//     [0, 0, 0],
	//     [0, 0, 0],
	//     [0, 0, 1],
	// ]

	// Let's fill upwards and leftwards now
	// Leftwards:

	for (let i = rows - 2; i >= 0; i--) {
		if (obstacleGrid[i][cols - 1] === 0) {
			// If not obstacle, mark our memo as previous (right) grid
			// Why?, so if there was an obstacle in the path, memo will be 0, so the rest on that path will be marked as 0,
			// meaning that path has been invalidated!
			memo[i][cols - 1] = memo[i + 1][cols - 1];
		}
	}

	// Upwards:
	for (let j = cols - 2; j >= 0; j--) {
		if (obstacleGrid[rows - 1][j] === 0) {
			memo[rows - 1][j] = memo[rows - 1][j + 1]; // Same story here!
		}
	}

	// memo grid then becomes (pure path as an example):
	// [
	//     [0, 0, 1],
	//     [0, 0, 1],
	//     [1, 1, 1],
	// ]

	// Now we can do the sum bottom up!

	for (let i = rows - 2; i >= 0; i--) {
		for (let j = cols - 2; j >= 0; j--) {
			if (obstacleGrid[i][j] === 0) {
				memo[i][j] = memo[i + 1][j] + memo[i][j + 1]; // Current path will be the sum of it's immediate
				// brother right and bottom!
			}
		}
	}

	// At the end, memo[0][0] will have the sum of all possible paths!

	return memo[0][0];
}; // Way better!
