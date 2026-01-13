/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
	// Arrange the adjacency list
	const graph = Array.from({ length: n }, () => []);

	// Fill the list
	for ([x, y] of edges) {
		graph[x].push(y);
		graph[y].push(x);
	}

	// Therefore this care: [[0,1],[1,2],[2,0]] becomes:
	// [1,2]
	// [0,2]
	// [1,0]
	// A proper adjacency list!

	// Let's explore dfs with memo (not so good a solution but)!

	const memo = new Map(); // For memoization
	const dfs = (node) => {
		if (node === destination) return true;
		if (memo.has(node)) return memo.get(node);

		memo.set(node, false); // Temporarily setting noe to false as it's being explored!

		for (neighbour of graph[node]) {
			if (dfs(neighbour)) {
				memo.set(node, true); // This route went well
				return true;
			}
		}

		return false;
	};

	return dfs(source);
};
// 795 ms approx

// Case 2: Using a set to track paths we've visited and ignoring it the next time we see it (this also avoids infinite loops but unlike maps, we don't track which path got to destination)
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
	// Arrange the adjacency list
	const graph = Array.from({ length: n }, () => []);

	// Fill the list
	for ([x, y] of edges) {
		graph[x].push(y);
		graph[y].push(x);
	}

	// Therefore this care: [[0,1],[1,2],[2,0]] becomes:
	// [1,2]
	// [0,2]
	// [1,0]
	// A proper adjacency list!

	// Let's explore dfs with memo (not so good a solution but)!

	const visited = new Set(); // For memoization
	const dfs = (node) => {
		if (node === destination) return true;
		if (visited.has(node)) return false;

		visited.add(node);

		for (neighbour of graph[node]) {
			if (dfs(neighbour)) return true;
		}

		return false;
	};

	return dfs(source);
};
// 665 ms approx

// Now let's try bfs
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
	const graph = Array.from({ length: n }, () => []);

	// Set the elements in the graph
	for ([x, y] of edges) {
		graph[x].push(y);
		graph[y].push(x);
	}

	const bfs = (start) => {
		const queue = [start];
		const visited = new Set();
		let index = 0;

		while (index < queue.length) {
			const node = queue[index++];

			if (node === destination) return true;

			if (visited.has(node)) continue; // visited, don't go to neighbours!

			// Mark that node has been visited!
			visited.add(node);

			for (neighbour of graph[node]) {
				queue.push(neighbour);
			}
		}

		return false;
	};

	return bfs(source);
};
// 536 ms approx, good!
