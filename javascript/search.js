function binarySearch(arr, item, offset = 0) {
	if (arr.length === 0) return -1; // Base case: not found

	const mid = Math.floor(arr.length / 2);

	if (arr[mid] === item) {
		return offset + mid; // Adjust index by offset
	} else if (arr[mid] > item) {
		return binarySearch(arr.slice(0, mid), item, offset);
	} else {
		return binarySearch(arr.slice(mid + 1), item, offset + mid + 1);
	}
}

console.log(binarySearch([1, 3, 5, 7, 9, 11], 7)); // 3
console.log(binarySearch([1, 3, 5, 7, 9, 11], 10)); // -1
console.log(binarySearch([1, 3, 5, 7, 9, 11], 1)); // 0

function bstSuccessor(node) {
	if (!node) return node;

	// Case one: has right child
	if (node.right) {
		return findMin(node.right); // Find the most left
	}

	// Case two: has no right child, go up like you're coming from the left tree (left trees go in descending order of magnitude)

	let parent = node.parent;
	while (parent && parent.right === node) {
		// Only if current node is parent's right, there must be a larger number up the tree, keep traversing
		node = node.parent;
		parent = parent.parent;
	}

	return parent;
}

function findMin(node) {
	while (node.left) {
		node = node.left;
	}
	return node;
}

function findTreeHeight(root) {
	if (!root) return -1;

	return 1 + Math.max(findTreeHeight(root.left), findTreeHeight(root.right));
}
