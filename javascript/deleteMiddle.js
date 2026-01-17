/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function (head) {
	if (!head || !head.next) return null;

	// We use fast and slow pointers here to get the middle...

	let slow = head,
		fast = head,
		prev = null;

	while (fast && fast.next) {
		prev = slow; // We track the previous node so we can point it to the next after deleting current
		slow = slow.next;
		fast = fast.next.next;
	}

	// Delete, link and return head
	prev.next = slow.next;
	// We'd delete if in CPP or other low level languages

	return head;
};
