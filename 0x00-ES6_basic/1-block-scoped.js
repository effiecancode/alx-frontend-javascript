let task = false;
let task2 = true;

export default function taskBlock(trueOrFalse) {
  if (trueOrFalse) {
    task = true;
    task2 = false;
    if (task && task2) {
      return [task, task2];
    }
  }
  return [task, task2];
}
