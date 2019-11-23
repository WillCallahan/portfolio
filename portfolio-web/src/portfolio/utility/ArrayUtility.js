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

export default ArrayUtility;