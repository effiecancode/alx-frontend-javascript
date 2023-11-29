export default function signUpUser(firstName, lastName) {
  return Promise.resolve({ firstName, lastName });
}

/**
 * function simply accepts firstname and lastname parameters
 * and returns a resolved promise containing an object with those values.
 */
