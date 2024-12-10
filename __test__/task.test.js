const TaskManager = require('../src/task-manager')

describe("Task Manager", () => {
  let taskManager;

  beforeEach(() => {
    taskManager = new TaskManager();
  });

  it("should update the status of a task", () => {
    taskManager.addTask("Study TDD", "Study");
    taskManager.updateTaskStatus(1, "completed");

    expect(taskManager.getTasks()).toEqual([
      { id: 1, name: "Study TDD", category: "Study", status: "completed" },
    ]);
  });

  it("should filter tasks by category", () => {
    taskManager.addTask("Study TDD", "Study");
    taskManager.addTask("Work on project", "Work");

    const studyTasks = taskManager.getTasks({ category: "Study" });
    expect(studyTasks).toEqual([
      { id: 1, name: "Study TDD", category: "Study", status: "pending" },
    ]);
  });

  it("should throw an error when trying to update a non-existent task", () => {
    expect(() => taskManager.updateTaskStatus(999, "completed")).toThrow(
      "Task not found"
    );
  });

});
