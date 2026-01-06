/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
	this.prev = [homepage];
	this.next = [];
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
	this.prev.push(url);

	if (this.next.length) {
		this.next = [];
	}
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
	for (let i = 0; i < steps; i++) {
		if (this.prev.length > 1) {
			this.next.push(this.prev.pop());
		}
	}

	return this.prev[this.prev.length - 1];
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
	for (let i = 0; i < steps; i++) {
		if (this.next.length > 0) {
			this.prev.push(this.next.pop());
		}
	}

	return this.prev[this.prev.length - 1];
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */

// Quite faster
var ListNode = function (page) {
	this.url = page;
	this.prev = null;
	this.next = null;
};
/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
	this.left = new ListNode();
	this.right = new ListNode();
	let homeNode = new ListNode(homepage);
	this.left.next = homeNode;
	this.right.prev = homeNode;
	homeNode.next = this.right;
	homeNode.prev = this.left;
	this.current = homeNode;
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
	let page = new ListNode(url);
	page.prev = this.current;
	page.next = this.right;
	this.current.next = page;
	this.right.prev = page;
	this.current = page;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
	while (this.current.prev && this.current.prev.url && steps > 0) {
		this.current = this.current.prev;
		steps--;
	}
	return this.current.url;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
	while (this.current.next && this.current.next.url && steps > 0) {
		this.current = this.current.next;
		steps--;
	}
	return this.current.url;
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
