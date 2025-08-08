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

	/**
	 * Makes a POST request to the specified URL
	 * @param {string} url - The URL to send the request to
	 * @param {object} data - The data to send in the request body
	 * @returns {Promise} Promise that resolves with the response data
	 */
	static async post(url, data) {
		try {
			const response = await fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const responseData = await response.json();
			return responseData;
		} catch (error) {
			// Check for network errors - either TypeError from fetch or explicit Network error
			if (error.name === 'TypeError' || error.message.includes('Network error')) {
				throw new Error('Network error');
			}
			// Check for HTTP errors
			if (error.message.includes('HTTP error')) {
				throw error;
			}
			// JSON parsing errors or other errors
			throw new Error('Invalid JSON response');
		}
	}

	/**
	 * Makes a GET request to the specified URL
	 * @param {string} url - The URL to send the request to
	 * @returns {Promise} Promise that resolves with the response data
	 */
	static async get(url) {
		try {
			const response = await fetch(url, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const responseData = await response.json();
			return responseData;
		} catch (error) {
			// Check for network errors - either TypeError from fetch or explicit Network error
			if (error.name === 'TypeError' || error.message.includes('Network error')) {
				throw new Error('Network error');
			}
			// Check for HTTP errors
			if (error.message.includes('HTTP error')) {
				throw error;
			}
			// JSON parsing errors or other errors
			throw new Error('Invalid JSON response');
		}
	}

}

export default ApiRepository;