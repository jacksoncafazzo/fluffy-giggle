function TaskAdd(task) {
  this.task = task;
}

TaskAdd.prototype.toListItem = function() {
  return this.task;
}
