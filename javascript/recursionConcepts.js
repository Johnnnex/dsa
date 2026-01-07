// Fibonacci with different recursion concepts

// Pure recursion [O(n^2)]
const fib = (n) => {
	if (n < 2) return n; // Base case

	// recursion case:
	return fib(n - 2) + fib(n - 1);
};

// Recursion with memoization (Top Down) [O(n)]
const fibWMemo = (n, memo = {}) => {
	if (n < 2) return n;

	if (n in memo) return memo[n];

	// recursion case:
	const result = fib(n - 2, memo) + fib(n - 1, memo);

	memo[n] = result;

	return result;
};

const fibDynamicProgramming = (n) => {
	if (n < 2) return n;

	const dp = [0, 1]; // Start array

	for (let i = 2; i < n; i++) {
		dp[i] = dp[i - 2] + dp[i - 1];
	}

	return dp[n];
};

const fibDynamicProgrammingEnhanced = (n) => {
	if (n < 2) return n;

	let prev = 0,
		curr = 1;

	for (let i = 2; i < n; i++) {
		[prev, curr] = [curr, prev + curr];
	}

	return curr;
};

// All Paths in a DAG
const dagDFS = (graph) => {
	const result = [];
	const path = [0];

	const dfs = (index) => {
		if (index === graph.length - 1) {
			result.push([...path]);

			return;
		}

		for (neighbour of graph[index]) {
			path.push(neighbour);
			dfs(neighbour);
			path.pop();
		}
	};

	dfs(0);
};

const dagBFS = (graph) => {
	const result = [];

	const queue = [[0, [0]]];

	while (queue.length) {
		const [index, paths] = queue.shift();

		if (index === graph.length - 1) {
			result.push(paths);

			continue;
		}

		for (const child of graph[index]) {
			queue.push([child, [...paths, child]]);
		}
	}
};
