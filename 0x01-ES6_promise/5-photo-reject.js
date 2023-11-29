export default function uploadPhoto(fileName) {
  return Promise.reject(new Error(`${fileName} cannot be processed`));
}

/**
 * the function accepts fileName as parameter and
 * returns a promise rejecting with an error message
 */
