var MagicDictionary = function () {
	this.dict = [];
};

/**
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function (dictionary) {
	this.dict = dictionary;
};

/**
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function (searchWord) {
	if (!this.dict.length) return false;

	for (const word of this.dict) {
		let diffCount = 0;
		if (word.length !== searchWord.length) continue;
		for (let i = 0; i < searchWord.length; i++) {
			if (searchWord[i] !== word[i]) diffCount++;
			if (diffCount > 1) break;
		}
		if (diffCount === 1) return true;
	}

	return false;
}; //(4ms approx)

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */

// Another approach (Although feels slower!, 6ms approx):

var MagicDictionary = function () {
	this.dictByLen = new Map();
};

/**
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function (dictionary) {
	for (word of dictionary) {
		const wordLen = word.length;
		if (this.dictByLen.has(wordLen)) {
			this.dictByLen.get(wordLen).push(word);
		} else {
			this.dictByLen.set(wordLen, [word]);
		}
	}
};

/**
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function (searchWord) {
	const wordLen = searchWord.length;
	const wordLenGroup = this.dictByLen.get(wordLen);

	if (!wordLenGroup) return false;

	for (const word of wordLenGroup) {
		let diffCount = 0;
		if (word.length !== searchWord.length) continue;
		for (let i = 0; i < searchWord.length; i++) {
			if (searchWord[i] !== word[i]) diffCount++;
			if (diffCount > 1) break;
		}
		if (diffCount === 1) return true;
	}

	return false;
};

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */
