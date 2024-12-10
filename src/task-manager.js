class TaskManager {
  constructor() {
    this.tasks = [];
    this.nextId = 1;
  }

  addTask(name, category) {
    if (!name || !category)
      throw new Error("Task name and category are required");
    this.tasks.push({ id: this.nextId++, name, category, status: "pending" });
  }

  updateTaskStatus(id, status) {
    const task = this.tasks.find((task) => task.id === id);
    if (!task) throw new Error("Task not found");
    task.status = status;
  }

  getTasks(filter = {}) {
    const { category, status } = filter;
    return this.tasks.filter(
      (task) =>
        (!category || task.category === category) &&
        (!status || task.status === status)
    );
  }

  removeTask(id) {
    const index = this.tasks.findIndex((task) => task.id === id);
    if (index === -1) throw new Error("Task not found");
    this.tasks.splice(index, 1);
  }
}

module.exports = TaskManager;
