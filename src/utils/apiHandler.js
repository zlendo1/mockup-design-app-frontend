const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

async function handleResponse(response) {
	if (response.ok) {
		return response.json()
	} else {
		const data = await response.json()

		throw new Error(data.message)
	}
}

/**
 * Makes a PUT request to the specified URL with the given request body.
 *
 * @param {string} url - The URL to make the PUT request to.
 * @param {Object} requestBody - The body of the PUT request.
 * @param {string} authorization - The authorization token to include in the request.
 * @returns {Promise<Object>} - A promise that resolves to the JSON data from the response.
 */
export function callPut(url, requestBody, authorization = '') {
	return fetch(BACKEND_URL + url, {
		method: 'PUT',
		headers: {
			Authorization: authorization,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(requestBody),
	}).then(async response => handleResponse(response))
}

/**
 * Makes a POST request to the specified URL with the given request body.
 *
 * @param {string} url - The URL to make the POST request to.
 * @param {Object} requestBody - The body of the POST request.
 * @param {string} authorization - The authorization token to include in the request.
 * @returns {Promise<Object>} - A promise that resolves to the JSON data from the response.
 */
export function callPost(url, requestBody, authorization = '') {
	return fetch(BACKEND_URL + url, {
		method: 'POST',
		headers: {
			Authorization: authorization,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(requestBody),
	}).then(async response => handleResponse(response))
}

/**
 * Makes a GET request to the specified URL.
 *
 * @param {string} url - The URL to make the GET request to.
 * @param {string} authorization - The authorization token to include in the request.
 * @returns {Promise<Object>} - A promise that resolves to the JSON data from the response.
 */
export function callGet(url, authorization = '') {
	return fetch(BACKEND_URL + url, {
		method: 'GET',
		headers: {
			Authorization: authorization,
			'Content-Type': 'application/json',
		},
	}).then(async response => handleResponse(response))
}
