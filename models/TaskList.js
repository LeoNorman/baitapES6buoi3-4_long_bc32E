class TaskList {
    constructor() { }
    taskList = []
    taskListCompleted = []

    addTask(task) {
        this.taskList = [...this.taskList, task]
    }

    // addTaskCompletedAfterRemove(task) {
    //     this.taskListCompleted = this.taskListCompleted.push[task]
    // }

    removeTask(name) {
        this.taskList = this.taskList.filter((task) => task.name !== name)
    }

    removeTaskCompleted(name) {
        this.taskListCompleted = this.taskListCompleted.filter((task) => task.name !== name)
    }

    addTaskCompleted(name) {
        this.taskListCompleted = [...this.taskList]
        this.taskListCompleted = this.taskListCompleted.filter((task) => task.name === name )
        this.taskListCompleted = [...this.taskListCompleted]
    }
}