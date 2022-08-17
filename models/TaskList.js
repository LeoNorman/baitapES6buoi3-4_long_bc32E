class TaskList {
    constructor() { }
    taskList = []
    tasks = []
    tasks1 = []
    tasks2 = []
    tasks3 = []
    taskListCompleted = []

    addTask(task) {
        this.taskList = [...this.taskList, task]
    }

    removeTask(name) {
        this.taskList = this.taskList.filter((task) => task.name !== name)
    }

    removeTaskCompleted(name) {
        this.taskListCompleted = this.taskListCompleted.filter((task) => task.name !== name)
    }

    addTaskCompleted(name) {
        this.tasks = [...this.taskList]
        this.tasks2 = this.tasks.filter((task) => task.name === name)
        this.taskListCompleted = [...this.tasks2, ...this.taskListCompleted]
    }

    addTaskListFromCompleted(name) {
        this.tasks1 = [...this.taskListCompleted]
        this.tasks3 = this.tasks1.filter((task) => task.name === name)
        this.taskList = [...this.tasks3, ...this.taskList]
    }

    sapXepAZ () {
        this.taskList = this.taskList.sort((taskTiepTheo, task) => {
            let tenTaskTiepTheo = taskTiepTheo.name.toLowerCase()
            let tenTask = task.name.toLocaleLowerCase()
            if(tenTaskTiepTheo > tenTask) {
                return 1 //giữ nguyên
            }
            if(tenTaskTiepTheo < tenTask) {
                return -1 //đảo vị trí
            }
            return 1
        })
    }

    sapXepZA () {
        this.taskList = this.taskList.sort((taskTiepTheo, task) => {
            let tenTaskTiepTheo = taskTiepTheo.name.toLowerCase()
            let tenTask = task.name.toLocaleLowerCase()
            if(tenTaskTiepTheo > tenTask) {
                return -1 //giữ nguyên
            }
            if(tenTaskTiepTheo < tenTask) {
                return 1 //đảo vị trí
            }
            return 1
        })
    }

    sapXepCompletedAZ () {
        this.taskListCompleted = this.taskListCompleted.sort((taskTiepTheo, task) => {
            let tenTaskTiepTheo = taskTiepTheo.name.toLowerCase()
            let tenTask = task.name.toLocaleLowerCase()
            if(tenTaskTiepTheo > tenTask) {
                return 1 //giữ nguyên
            }
            if(tenTaskTiepTheo < tenTask) {
                return -1 //đảo vị trí
            }
            return 1
        })
    }

    sapXepCompletedZA () {
        this.taskListCompleted = this.taskListCompleted.sort((taskTiepTheo, task) => {
            let tenTaskTiepTheo = taskTiepTheo.name.toLowerCase()
            let tenTask = task.name.toLocaleLowerCase()
            if(tenTaskTiepTheo > tenTask) {
                return -1 //giữ nguyên
            }
            if(tenTaskTiepTheo < tenTask) {
                return 1 //đảo vị trí
            }
            return 1
        })
    }
}