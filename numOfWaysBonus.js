function numOfWays(n) {
	const MOD = 1000000007;

	let count_121 = 6;
	let count_123 = 6;

	for (let i = 2; i <= n; i++) {
		let new_121 = (count_121 * 3 + count_123 * 2) % MOD;
		let new_123 = (count_121 * 2 + count_123 * 2) % MOD;

		count_121 = new_121;
		count_123 = new_123;
	}

	return (count_121 + count_123) % MOD;
}

// This is a bonus question
