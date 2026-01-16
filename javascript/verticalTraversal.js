/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function (root) {
	const treeArr = [];
	const treeMap = new Map();
	const result = [];

	const dfs = (node, r, c) => {
		if (!node) return; // This checks for null node, so I need not check for if node.left or node.right

		treeArr.push({ val: node.val, row: r, col: c });

		dfs(node.left, r + 1, c - 1);
		dfs(node.right, r + 1, c + 1);
	};

	dfs(root, 0, 0);

	treeArr.sort((a, b) => {
		if (a.col !== b.col) return a.col - b.col;
		if (a.row !== b.row) return a.row - b.row;
		return a.val - b.val;
	});

	treeArr.forEach((element) => {
		if (!treeMap.has(element.col)) treeMap.set(element.col, []);

		treeMap.get(element.col).push(element.val);
	});

	for (const [_, array] of treeMap) {
		result.push(array);
	}

	return result;
};
