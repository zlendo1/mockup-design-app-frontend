async function handleResponse(response) {
	if (response.ok) {
		return response.json();
	} else {
		const data = await response.json();

		throw new Error(data.message);
	}
}

/**
 * Makes a POST request to the specified URL with the given request body.
 *
 * @param {string} url - The URL to make the POST request to.
 * @param {Object} requestBody - The body of the POST request.
 * @returns {Promise<Object>} - A promise that resolves to the JSON data from the response.
 */
export function callPost(url, requestBody) {
	return fetch(import.meta.env.BACKEND_URL + url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(requestBody)
	})
	.then(async response => handleResponse(response))
}

/**
 * Makes a GET request to the specified URL.
 *
 * @param {string} url - The URL to make the GET request to.
 * @returns {Promise<Object>} - A promise that resolves to the JSON data from the response.
 */
export function callGet(url) {
	return fetch(import.meta.env.BACKEND_URL + url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	})
	.then(async response => handleResponse(response))
}

export default {
	callPost,
	callGet
};
