export function taskFirst() {
  const task = 5;
  return task;
}

export function getLast() {
  return 10;
}

export function taskNext() {
  let combination = taskFirst();
  combination += getLast();

  return combination;
}
