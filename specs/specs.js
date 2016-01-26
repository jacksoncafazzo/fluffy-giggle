describe('TaskAdd', function() {
  it("will add a task to a list", function() {
    var testTask = new TaskAdd("blank");
    expect(testTask.task).to.equal("blank");
  });
  it("will return task as list item", function() {
    var testListItem = new TaskAdd("hotdog");
    expect(testListItem.toListItem()).to.equal("<li>hotdog</li>");
  });
});
