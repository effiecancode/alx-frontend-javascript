export default function guardrail(mathFunction) {
  const queue = [];
  let result;
  try {
    result = mathFunction();
  } catch (error) {
    result = `Error: ${error.message}`;
  }
  queue.push(result);
  queue.push('Guardrail was processed');

  return queue;
}
/**
 * -the function executes mathFunction and handles any potential errors that may occur.
 * -the value returned by the function is appended to the queue
 * -if the function throws an error, the message is also appended to the queue
 */
