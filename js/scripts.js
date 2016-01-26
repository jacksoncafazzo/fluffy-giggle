function TaskAdd(task) {
  this.task = task;
}

TaskAdd.prototype.toListAction = function() {
  return "<li>" + this.task + "</li>";
}

$(document).ready(function() {
  $("form#taskTask").submit(function(event) {
    debugger;

  var inputtedListItem = $("input#taskInput").val();
  var newTask = new TaskAdd(inputtedListItem);

    $("#finalList").show();

    $("ul#listResults").append(newTask.toListAction());

  event.preventDefault();

  });

});
