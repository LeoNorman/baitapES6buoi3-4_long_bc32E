export class TaskList {
    constructor() { }
    taskList = []

    addTask(task) {
        this.taskList = [...this.taskList, task]
    }

    removeTask(name) {
        this.taskList = this.taskList.filter((task) => task.name !== name)
    }
}