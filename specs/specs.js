describe('TaskAdd', function() {
  it("will add a task to a list", function() {
    var testTask = new TaskAdd("blank");
    expect(testTask.task).to.equal("blank");
  });
});
