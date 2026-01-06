function mergeSort(arr) {
	if (arr.length <= 1) return arr;

	const mid = Math.floor(arr.length / 2);

	const left = mergeSort(arr.slice(0, mid));
	const right = mergeSort(arr.slice(mid));

	return merge(left, right);
}
function merge(left, right) {
	const result = [];
	let i = 0,
		j = 0;

	while (i < left.length && j < right.length) {
		if (left[i] < right[j]) {
			result.push(left[i++]);
		} else {
			result.push(right[j++]);
		}
	}

	return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort([38, 27, 5, 56, 3, 45, 43, 3]));

function bubbleSort(arr) {
	const array = [...arr];
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length - 1; j++) {
			if (array[j] > array[j + 1]) {
				[array[j], array[j + 1]] = [array[j + 1], array[j]];
			}
		}
	}

	return array;
}

console.log(bubbleSort([38, 27, 5, 56, 3, 45, 43, 3]));
