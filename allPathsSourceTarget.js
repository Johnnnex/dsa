// Find all paths from node 0 to node n-1 in a DAG

function allPathsSourceTarget(graph) {
	const result = [];
	const target = graph.length - 1;
	const path = [0]; // Start at node 0

	function dfs(node) {
		// Base case: reached the target
		if (node === target) {
			result.push([...path]); // Save a copy of current path
			return;
		}

		// Explore all neighbors
		for (const neighbor of graph[node]) {
			path.push(neighbor); // Add neighbor to path
			dfs(neighbor); // Recurse
			path.pop(); // Backtrack (remove neighbor)
		}
	}

	dfs(0); // Start DFS from node 0
	return result;
}
