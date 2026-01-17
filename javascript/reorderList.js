/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
	// My first idea was to use an array to track all node references and use two pointers to rearrange them, but looking
	// at it, one could use the same two pointers but do it this way, fast and slow pointers, get to the middle of the list
	// in O(n/2) time, reverse the other half of the list in O(n/2) time and merge in O(n/2) time, which is better?

	if (!head || !head.next) return head;

	let slow = head,
		fast = head;

	while (fast && fast.next) {
		// for every slow.next, we're moving fast.next.next times, so I have to check fast.next instead
		// (NOT NULL)

		slow = slow.next;
		fast = fast.next.next;
	}

	// `slow` is at the center now..., so we start the second list from after center
	let second = slow.next,
		prev = null,
		next = null; // Next can start as null
	slow.next = null; // We break the list here so we don't have an endless loop

	// Reverse second list
	while (second) {
		next = second.next; // Move next in front, save the future
		second.next = prev; // Break connection between current and next, point it to it's previous (reverse is done
		// here)
		prev = second; // Move prev forward
		second = next; // Move current forward
	}

	second = prev; // pointing second to the head of the reversed list

	// Now `second` points to the start of the reversed half array and `current` will point to the start of the first
	// half
	let first = head,
		firstNext = null,
		secondNext = null; // This is the first list, remember it's broken now
	while (second) {
		firstNext = first.next;
		secondNext = second.next;

		first.next = second;
		second.next = firstNext;

		first = firstNext;
		second = secondNext;
	}

	return head;
};

// Much cleaner:
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
	if (!head || !head.next) return head;

	// We first get the center of the list..., fast and slow pointers

	let fast = head,
		slow = head;

	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next; // Fast pointer
	}

	// We then break the lists and reverse the second list...
	let second = slow.next,
		prev = null,
		next = null; // We start the second list from the next one after the middle node
	slow.next = null; // We then break the first list to avoid going through the long list

	while (second) {
		// Rule of thumbs
		next = second.next; // Move next forward first
		second.next = prev; // Reverse link, then..

		prev = second; // Move previous forward
		second = next; // Move next forward!
	}

	// In the end, second will be null and prev will be the head of the reversed list!
	second = prev;

	// Now `second` carries the reversed list and we'd give first the link to the first unreversed list!
	let first = head,
		firstNext = null;
	secondNext = null;

	while (second) {
		// Second will always be the smaller list, so we use it as the loop condition

		// Rule of thumb again
		firstNext = first.next; // Assign nexts first
		secondNext = second.next;

		first.next = second; // Change pointers (this time, we're pointing to the nodes in front)
		second.next = firstNext; // The second node points to the next on the first list!

		first = firstNext; // We then move current forward as we don't have a prev to deal with here
		second = secondNext;
	}

	return head;
};
