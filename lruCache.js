/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
	this.size = Math.abs(capacity);

	this.cacheMap = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
	if (!this.cacheMap.has(key)) return -1;

	const value = this.cacheMap.get(key);
	this.cacheMap.delete(key);

	this.cacheMap.set(key, value);

	return value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
	if (this.cacheMap.has(key)) {
		this.cacheMap.delete(key);
	} else if (this.cacheMap.size >= this.size) {
		const oldKey = this.cacheMap.keys().next().value;

		this.cacheMap.delete(oldKey);
	}

	this.cacheMap.set(key, value);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
