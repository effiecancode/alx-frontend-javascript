export default function guardrail(mathFunction) {
  const queue = [];

  try {
    const result = mathFunction();
    queue.push(result);
  } catch (err) {
    queue.push(`Error: ${err.message}`);
  }
  queue.push('Guadrail was processed');
  return queue;
}

/**
 * -the function executes mathFunction and handles any potential errors that may occur.
 * -the value returned by the function is appended to the queue
 * -if the function throws an error, the message is also appended to the queue
 */
