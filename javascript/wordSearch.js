/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
	const dfs = (i, j, index) => {
		if (index === word.length) return true; // Found here!

		if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) return false;
		if (board[i][j] !== word[index]) return false;

		let temp = board[i][j];
		board[i][j] = '#';

		let found =
			dfs(i - 1, j, index + 1) || // Up
			dfs(i + 1, j, index + 1) || // Down
			dfs(i, j - 1, index + 1) || // Left
			dfs(i, j + 1, index + 1); // Right

		board[i][j] = temp;

		return found;
	};

	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[0].length; j++) {
			if (dfs(i, j, 0)) return true;
		}
	}

	return false;
};

// BFS, should be better, shortest path
const exist = (board, word) => {
	const queue = [];

	const bfs = (i, j) => {
		if (board[i][j] !== word[0]) return false;

		queue = [[0, i, j]]; // First elements on queue

		const dirs = [
			[1, 0],
			[-1, 0],
			[0, 1],
			[0, -1],
		];

		while (queue.length) {
			const [index, x, y] = queue.shift();

			if (index === word.length - 1) return true;

			const temp = board[x][y];

			board[x][y] = '#';

			for ([dx, dy] of dirs) {
				const nx = x + dx;
				const ny = y + dy;

				if (
					nx >= 0 &&
					nx < board.length &&
					ny >= 0 &&
					ny < board[0].length &&
					board[nx][ny] === word[index + 1]
				) {
					queue.push([index + 1, nx, ny]);
				}
			}

			board[x][y] = temp;
		}
	};

	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[0].length; j++) {
			if (bfs(i, j)) return true;
		}
	}
};
