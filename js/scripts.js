// function TaskAdd(task) {
//   this.task = task;
// }

var toListAction = function(task) {
  return "<li>" + task + "</li>";
}

$(document).ready(function() {
  $("form#taskTask").submit(function(event) {
    debugger;

  var inputtedListItem = $("input#taskInput").val();
  var taskForList = toListAction(inputtedListItem);
    $("#finalList").show();

    $("ul#listResults").append(taskForList);

  event.preventDefault();

  });

});
