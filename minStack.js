var MinStack = function () {
	this.stack = [];
	// We'll track minStack so as we're pushing, we'd be pushing the minimum between what we want to push and what was there before, this way, we keep the minimum value at the top of the stack (LIFO)
	this.minStack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
	this.stack.push(val);
	const min = !this.minStack.length
		? val
		: Math.min(this.minStack[this.minStack.length - 1], val);
	this.minStack.push(min);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
	this.stack.pop();
	this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
	return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
	return this.minStack[this.minStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
