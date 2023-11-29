export default function handleResponseFromAPI(promise) {
  const obj = { status: 200, body: 'success' };
  return promise
    .then(() => obj)
    .catch(() => new Error())
    .finally(() => { console.log('Got a response from the API'); });
}

/**
 * function takes promise as an arg, and handles its response.
 * it sets up an object with a sttus of 200 and a success message
 * .then() resolves with the obj whenthe promise is successful
 * .catch returns a new error() incase of rejection
 * .finally logs default message
 */
