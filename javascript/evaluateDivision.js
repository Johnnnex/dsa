const dfs = (graph, current, end, visited) => {
	visited.add(current);

	const neighbours = graph.get(current);

	if (neighbours.has(end)) return neighbours.get(end);

	for (const [neighbour, weight] of neighbours) {
		if (!visited.has(neighbour)) {
			const result = dfs(graph, neighbour, end, visited);

			if (result !== -1) return result * weight;
		}
	}

	return -1;
};

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
	const graph = new Map(); // <char, neighbours>

	for (let i = 0; i < equations.length; i++) {
		const [a, b] = equations[i];
		const value = values[i];

		if (!graph.has(a)) graph.set(a, new Map());
		graph.get(a).set(b, value);

		if (!graph.has(b)) graph.set(b, new Map());
		graph.get(b).set(a, 1 / value);
	}

	const results = [];
	for (const [start, end] of queries) {
		if (!graph.has(start) || !graph.has(end)) {
			results.push(-1.0);
			continue;
		}

		if (start === end) {
			results.push(1.0);
			continue;
		}

		const visited = new Set();

		const result = dfs(graph, start, end, visited);
		results.push(result);
	}

	return results;
};
