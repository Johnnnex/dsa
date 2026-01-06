function minMeetingRooms(intervals) {
	// Map through, sort them like events, i.e start carries weight of +1 and end carries weight of -1
	// Sort by time, if time is same, sort by start before end...
	// Map through the new sorted array and keep adding weights to get currentRoom needed, take the max from each round, that'll be the min number of rooms needed!

	const events = [];

	for (const event of intervals) {
		events.push([event[0], 1]);
		events.push([event[1], -1]);
	}

	events.sort((a, b) => {
		if (a[0] === b[0]) return a[1] - b[1]; // Start event in front
		else return a[0] - b[0];
	});

	let currentRoom = 0,
		maxRoom = 0;

	for (const event of events) {
		currentRoom += event[1];
		maxRoom = Math.max(currentRoom, maxRoom);
	}
	return maxRoom;
}
