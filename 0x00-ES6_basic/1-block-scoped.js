var task = false;
var task2 = true;

export default function taskBlock(trueOrFalse) {
  task;
  task2;

  if (trueOrFalse) {
    var task = true;
    var task2 = false;
  }

  return [task, task2];
}
