var findCircleNum = function (isConnected) {
	let count = 0;
	const n = isConnected.length;
	const visited = new Set();

	const dfs = (city) => {
		visited.add(city); // Mark this city as visited

		// Check all other cities this city connects to
		for (let otherCity = 0; otherCity < n; otherCity++) {
			if (isConnected[city][otherCity] && !visited.has(otherCity)) {
				dfs(otherCity); // Explore the connected city
			}
		}
	};

	// Try starting from each city
	for (let city = 0; city < n; city++) {
		if (!visited.has(city)) {
			// Found a new province! This city hasn't been visited yet
			count++;
			dfs(city); // Mark all cities in this province as visited
		}
	}

	return count;
};
// 1ms, beats 92.39%

var findCircleNum = function (isConnected) {
	let count = 0;
	const n = isConnected.length;
	const visited = new Set();

	const bfs = (city) => {
		const queue = [city];
		let index = 0;
		visited.add(city);

		while (index < queue.length) {
			const currentCity = queue[index++];

			for (let nextCity = 0; nextCity < n; nextCity++) {
				if (isConnected[currentCity][nextCity] && !visited.has(nextCity)) {
					visited.add(nextCity);
					queue.push(nextCity);
				}
			}
		}
	};

	// Try starting from each city
	for (let city = 0; city < n; city++) {
		if (!visited.has(city)) {
			// Found a new province! This city hasn't been visited yet
			count++;
			bfs(city); // Mark all cities in this province as visited
		}
	}

	return count;
};
// Way slower, 7ms!
