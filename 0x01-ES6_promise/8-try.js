export default function divideFunction(numerator, denominitor) {
  if (denominitor === 0) {
    throw Error('cannot divide by 0');
  } else {
    return numerator / denominitor;
  }
}

/**
 * the function throws a new error with a message whenever..
 * the denominator argument is equal(===) to 0
 * otherwise it returns numerator / denominitor
 */
