var RandomizedCollection = function () {
	this.map = new Map();
	this.list = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function (val) {
	const itemPresent = this.map.has(val);

	if (!itemPresent) this.map.set(val, new Set());

	this.list.push(val);
	this.map.get(val).add(this.list.length - 1);

	return !itemPresent;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function (val) {
	if (!this.map.has(val)) return false;

	const indexesToDeleteFrom = this.map.get(val); // [4,3,4,2,5]
	const indexToDelete = indexesToDeleteFrom.values().next().value;

	const listLastIndex = this.list.length - 1;
	const lastElement = this.list[listLastIndex];
	const lastElementIndexes = this.map.get(lastElement);

	indexesToDeleteFrom.delete(indexToDelete); // We remove the index we want to swap first just incase it's same set with
	// last element, e.g: last element => 4, list =[4,x,x,x,x,4,x,x,4], if we swap 4 (end) with 4 (any possible occurence)
	// and add index to laseElementIndexes (which will be a reference of indexesToDeleteFrom), there'd be a clash, cause
	// we're using a set, it'll be merged to one, then we'd end up then deleting just that on, which will shorten the set

	// Let's swap last element with element to delete...
	if (listLastIndex !== indexToDelete) {
		// If last element is the index we want to delete, then we'd not bother swapping

		this.list[indexToDelete] = lastElement;
		lastElementIndexes.add(indexToDelete);

		// Now we'd have to take care of the fact that last element has one index we've not tracked and element to delete
		// also has one index we need to delete
	}

	lastElementIndexes.delete(listLastIndex); // We also remove last index because we're going to pop it

	// We then check which of them has zero members and remove their values from the map entirely
	if (lastElementIndexes.size === 0) this.map.delete(lastElement);
	if (indexesToDeleteFrom.size === 0) this.map.delete(val);

	// Cleanup list;
	this.list.pop();

	return true;
};

/**
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function () {
	return this.list[Math.floor(Math.random() * this.list.length)];
};

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

// Runtime: 70ms, beats 95.29% of answers (as of now)
