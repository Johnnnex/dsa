/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function (word) {
	const alphabetLen = 26;
	const wordRepArr = Array.from({ length: alphabetLen }, () => 0);

	for (let char of word) {
		wordRepArr[char.charCodeAt(0) - 97]++;
	}

	for (let i = 0; i < 26; i++) {
		if (wordRepArr[i]) {
			wordRepArr[i]--;

			let targetFreq = 0;
			let isValid = true;

			for (freq of wordRepArr) {
				if (!!freq) {
					if (!targetFreq) targetFreq = freq;
					else if (freq !== targetFreq) {
						isValid = false;
						break;
					}
				}
			}

			if (isValid) return isValid;
			wordRepArr[i]++;
		}
	}

	return false;
};
