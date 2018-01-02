import $ from 'jquery';

class ApiRepository {

	constructor(endpointUrl) {
		if (!endpointUrl)
			throw new Error("EndpointUrl is required");
		this.endpointUrl = endpointUrl;
	}

	/**
	 * Gets the Url of the API Endpoint
	 *
	 * @return {string|*} Url of the API Endpoint
	 */
	getUrl() {
		return "api/" + this.endpointUrl
	};

	/**
	 * Gets a single object from the API Endpoint
	 *
	 * @param id {number} Unique identifier of the object
	 * @return {*} AJAX Response
	 */
	getOne(id) {
		return $.ajax({
			url: this.getUrl() + "/" + id,
			type: "GET"
		});
	};

	/**
	 * Gets all the objected from the API Endpoint
	 *
	 * @return {*} All objects from the API Endpoint
	 */
	getAll() {
		return $.ajax({
			url: this.getUrl(),
			type: "GET"
		});
	};

	/**
	 * Saves the object in the API
	 *
	 * @param obj {object} Object to save
	 * @return {*} AJAX Response
	 */
	save(obj) {
		return $.ajax({
			url: this.getUrl(),
			data: JSON.stringify(obj),
			type: "POST"
		});
	};

	/**
	 * Updates the values of the object in the API
	 *
	 * @param obj {object} Object to update
	 * @return {*} AJAX Response
	 */
	update(obj) {
		return $.ajax({
			url: this.getUrl(),
			data: JSON.stringify(obj),
			type: "PUT"
		});
	};

	/**
	 * Deletes the object from the API
	 *
	 * @param obj {object} Object to delete
	 * @return {*} AJAX Response
	 */
	remove(obj) {
		return $.ajax({
			url: this.getUrl(),
			data: JSON.stringify(obj),
			type: "DELETE"
		});
	};

}

export default ApiRepository;