/**
 * @param {number} n
 */
var OrderedStream = function (n) {
	this.chunkList = Array(n).fill(null);
	this.pointer = 0; // Starting from 0
};

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (idKey, value) {
	this.chunkList[idKey - 1] = value;

	const chunk = [];

	while (this.chunkList[this.pointer]) {
		chunk.push(this.chunkList[this.pointer++]);
	}

	return chunk;
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
