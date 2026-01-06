/**
 * // Definition for a _Node.
 * function _Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var flatten = function (head) {
	if (!head) return head; // I could've just returned head once but I want an early return if head is null, quicker

	const dfs = (node) => {
		let temp = node;
		let last = null;

		while (temp) {
			let next = temp.next;

			if (temp.child) {
				const lastNode = dfs(temp.child);
				temp.next = temp.child;
				temp.child.prev = temp;
				temp.child = null;

				if (next) {
					next.prev = lastNode;
					lastNode.next = next;
				}

				last = lastNode;
			} else {
				last = temp;
			}
			temp = next;
		}

		return last;
	};

	dfs(head);

	return head;
};
