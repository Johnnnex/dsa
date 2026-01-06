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
