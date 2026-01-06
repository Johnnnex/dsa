/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
	const wordDictionary = new Set(wordDict);

	// Trying DFS, recursion
	const dfs = (remainingString) => {
		if (!remainingString.length) return [[]];

		const results = [];
		for (let i = 0; i < remainingString.length; i++) {
			const currentWord = remainingString.slice(0, i + 1);

			if (wordDictionary.has(currentWord)) {
				const remainingWord = remainingString.slice(i + 1);

				const restResults = dfs(remainingWord);

				for (const individualResult of restResults) {
					results.push([currentWord, ...individualResult]);
				}
			}
		}

		return results;
	};

	const outputWord = dfs(s);

	return outputWord.map((item) => item.join(' '));
};

// Way better method:
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
	const path = [];
	const paths = [];

	const wordDictionary = new Set(wordDict);

	const dfs = (index) => {
		if (index === s.length) {
			paths.push(path.join(' '));

			return;
		}

		for (let i = index; i < s.length; i++) {
			if (wordDictionary.has(s.substring(index, i + 1))) {
				path.push(s.substring(index, i + 1));
				dfs(i + 1);

				path.pop();
			}
		}
	};

	dfs(0);

	return paths;
};

// Word break v1:
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
	const memo = new Map();
	const wordDictionary = new Set(wordDict);

	const dfs = (index) => {
		if (index === s.length) return true;

		if (memo.has(index)) return memo.get(index); // means we've checked this position before

		for (let i = index; i < s.length; i++) {
			const prefix = s.slice(index, i + 1);

			if (wordDictionary.has(prefix) && dfs(i + 1)) {
				memo.set(index, true); // memoization to avoid repitition!
				return true;
			}
		}

		memo.set(index, false); // memoization to avoid repitition here too!
		return false;
	};
	return dfs(0);
};
