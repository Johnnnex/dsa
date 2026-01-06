/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
	let dummy = new ListNode(0); // Mark dummy head, we'd pick the real head as dummy.next, so we use a temp to move, therefore..
	let temp = dummy;
	let carry = 0;

	while (l1 || l2 || !!carry) {
		const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;

		carry = Math.floor(sum / 10);

		temp.next = new ListNode(sum % 10);

		temp = temp.next;
		l1 = l1?.next;
		l2 = l2?.next;
	}

	return dummy.next;
};

// Instinctively better!
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
	let dummy = new ListNode(0); // Mark dummy head, we'd pick the real head as dummy.next, so we use a temp to move, therefore..
	let temp = dummy;
	let carry = 0;
	let sum = 0;

	while (l1 || l2 || !!carry) {
		if (l1) {
			sum += l1.val;
			l1 = l1.next;
		}
		if (l2) {
			sum += l2.val;
			l2 = l2.next;
		}

		sum += carry;
		carry = Math.floor(sum / 10);

		temp.next = new ListNode(sum % 10);

		temp = temp.next;
		sum = 0;
	}

	return dummy.next;
};
