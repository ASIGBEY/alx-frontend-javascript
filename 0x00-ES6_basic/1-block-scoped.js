export default function taskBlock(trueOrFalse) {
  const task = false;  // Outer variable
  const task2 = true;  // Outer variable

  if (trueOrFalse) {
    const task = true;   // This is block-scoped and won't overwrite the outer 'task'
    const task2 = false; // This is block-scoped and won't overwrite the outer 'task2'
  }

  return [task, task2];  // Outer task and task2 are returned
}
