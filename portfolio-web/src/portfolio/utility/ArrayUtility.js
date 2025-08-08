/**
 * Utility methods for the {@link Array} object
 */
class ArrayUtility {

	/**
	 * Groups elements of an array into a 2D array with the number of elements in each list equal to
	 * the {@code itemsInGroup}
	 *
	 * @param arr {Array} Array to group
	 * @param itemsInGroup {number} Number of items to be in each group
	 * @return {Array.<Array>} Grouped Array
	 */
	static getInGroupsOf(arr, itemsInGroup) {
		let groupedArray = [];
		for (let i = 0; i < arr.length; i++) {
			if (i % itemsInGroup === 0)
				groupedArray.push([]);
			groupedArray[groupedArray.length - 1].push(arr[i]);
		}
		return groupedArray;
	}

}

/**
 * Splits array into chunks of specified size
 * @param {Array} array - Array to chunk
 * @param {number} size - Size of each chunk
 * @returns {Array[]} Array of chunks
 */
export const chunk = (array, size) => {
	if (!array || array.length === 0) return [];
	const result = [];
	for (let i = 0; i < array.length; i += size) {
		result.push(array.slice(i, i + size));
	}
	return result;
};

/**
 * Groups array elements by a key function
 * @param {Array} array - Array to group
 * @param {Function} keyFn - Function to extract key from each element
 * @returns {Object} Object with grouped elements
 */
export const groupBy = (array, keyFn) => {
	if (!array || array.length === 0) return {};
	return array.reduce((groups, item) => {
		const key = keyFn(item);
		if (!groups[key]) {
			groups[key] = [];
		}
		groups[key].push(item);
		return groups;
	}, {});
};

/**
 * Removes duplicate values from array
 * @param {Array} array - Array to deduplicate
 * @returns {Array} Array with unique values
 */
export const unique = (array) => {
	if (!array || array.length === 0) return [];
	return [...new Set(array)];
};

/**
 * Sorts array by a key function
 * @param {Array} array - Array to sort
 * @param {Function} keyFn - Function to extract sort key from each element
 * @returns {Array} Sorted array
 */
export const sortBy = (array, keyFn) => {
	if (!array || array.length === 0) return [];
	return [...array].sort((a, b) => {
		const aKey = keyFn(a);
		const bKey = keyFn(b);
		if (aKey < bKey) return -1;
		if (aKey > bKey) return 1;
		return 0;
	});
};

export default ArrayUtility;