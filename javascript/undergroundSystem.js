var UndergroundSystem = function () {
	// Customer has an ID
	// Checks in at station name at time t
	// A customer can only be at one place at a time
	// Checks out, time recorded for station
	// Need avg time it takes to travel from start to end station

	this.activeTravels = new Map();
	this.routesInfo = new Map();
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
	if (this.activeTravels.has(id)) this.activeTravels.delete(id); // Very redundant but incase someone checks in twice

	this.activeTravels.set(id, [stationName, t]);
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
	const [stName, time] = this.activeTravels.get(id);
	this.activeTravels.delete(id);

	const routeKey = `${stName}-${stationName}`;

	if (!this.routesInfo.has(routeKey)) {
		this.routesInfo.set(routeKey, [0, 0]);
	}

	const routeInfo = this.routesInfo.get(routeKey);

	routeInfo[0] += t - time;
	routeInfo[1]++;
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (
	startStation,
	endStation
) {
	const routeKey = `${startStation}-${endStation}`;

	const [totalTime, frequency] = this.routesInfo.get(routeKey);
	return totalTime / frequency;
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
