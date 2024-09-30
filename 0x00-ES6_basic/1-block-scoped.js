export default function taskBlock(trueOrFalse) {
  let task = false;  // Outer variable
  let task2 = true;  // Outer variable

  if (trueOrFalse) {
    let task = true;   // This is block-scoped and won't overwrite the outer 'task'
    let task2 = false; // This is block-scoped and won't overwrite the outer 'task2'
  }

  return [task, task2];  // Outer task and task2 are returned
}
