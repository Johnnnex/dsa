var RandomizedSet = function () {
	this.list = [];
	this.map = {};
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
	if (val in this.map) return false;

	this.list.push(val);

	this.map[val] = this.list.length - 1;

	return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
	if (!(val in this.map)) return false;

	// Fetch last value on list, change it's position to index of that to remove, change it's key on map, pop last value (duplicate last value, not needed)
	const indexToReplace = this.map[val]; // Fetch item's index
	const lastValOnList = this.list[this.list.length - 1]; // Pull list's last value

	if (lastValOnList !== val) {
		// Edge case: if element is last value on list, don't bother doing replacements and all O(1) by default....
		this.list[indexToReplace] = lastValOnList;
		this.map[lastValOnList] = indexToReplace;
	}

	delete this.map[val];
	this.list.pop();

	return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
	if (this.list.length) {
		const index = Math.floor(Math.random() * this.list.length);

		return this.list[index];
	}
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

// To be faster, I could use Array() and Map()!
// E.G:

var RandomizedSet = function () {
	this.list = [];
	this.map = new Map();
};

RandomizedSet.prototype.insert = function (val) {
	if (this.map.has(val)) return false;

	this.list.push(val);
	this.map.set(val, this.list.length - 1);

	return true;
};

RandomizedSet.prototype.remove = function (val) {
	if (!this.map.has(val)) return false;

	const indexToReplace = this.map.get(val);
	const lastVal = this.list[this.list.length - 1];

	if (lastVal !== val) {
		this.list[indexToReplace] = lastVal;
		this.map.set(lastVal, indexToReplace);
	}

	this.list.pop();
	this.map.delete(val);

	return true;
};

RandomizedSet.prototype.getRandom = function () {
	const index = Math.floor(Math.random() * this.list.length);
	return this.list[index];
};
