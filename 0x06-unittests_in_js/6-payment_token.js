/**
 * Retrieves a payment token from the API.
 *
 * @param {boolean} success - Whether the API call should succeed.
 * @return {Promise} A Promise that resolves to the API response.
 */
function getPaymentTokenFromAPI(success) {
  // Create a new Promise.
  return new Promise((resolve) => {
    // If the API call is successful, resolve the Promise with the response.
    if (success) {
      resolve({ data: 'Successful response from the API' });
    }
  });
}

module.exports = getPaymentTokenFromAPI;
