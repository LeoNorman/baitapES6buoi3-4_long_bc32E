

const addItem = document.querySelector('#addItem')

const TaskLists = new TaskList()

const input = document.querySelector('#newTask').value

const getFormValues = () => {
    const input = document.querySelector('#newTask').value
    const task = new Task()
    task['name'] = input
    return task
}

const renderTaskList = () => {
    const taskList = TaskLists.taskList
    const html = taskList.reduce((value, task) => {
        return (value += `
        <li><span>${task.name}</span>
                            <div class="buttons">
                                <button class="remove" onclick="removeTask('${task.name}')">
                                    <i class="fas fa-trash-alt"></i>
                                </button>
                                <button class="complete" onclick="addTaskCompleted('${task.name}')">
                                    <i class="far fa-check-circle"></i>
                                    <i class="fas fa-check-circle"></i>
                                </button>
                            </div>
                        </li>
        `)
    }, '')
    document.querySelector('#todo').innerHTML = html;
}

const renderTaskCompleted = () => {
    const taskListCompleted = TaskLists.taskListCompleted
    const html = taskListCompleted.reduce((value, task) => {
        return (value += `
        <li><span>${task.name}</span>
                            <div class="buttons">
                                <button class="remove" onclick="removeTaskCompleted('${task.name}')">
                                    <i class="fas fa-trash-alt"></i>
                                </button>
                                <button class="complete" onclick="addTaskListFromCompleted('${task.name}')">
                                    <i class="far fa-check-circle"></i>
                                    <i class="fas fa-check-circle"></i>
                                </button>
                            </div>
                        </li>
        `)
    }, '')
    document.querySelector('#completed').innerHTML = html;
}

// Lưu ý: Localstore không lưu được method, chỉ lưu được các thuộc tính
// lưu mảng task xuống local
const setLocalStore = () => {
    localStorage.setItem('taskList', JSON.stringify(TaskLists.taskList))
}

const setLocalStore1 = () => {
    localStorage.setItem('taskListCompleted', JSON.stringify(TaskLists.taskListCompleted))
}

// Get value từ local
const getLocalStore = () => {
    const data = localStorage.getItem('taskList')
    const dataParse = JSON.parse(data) || []
    // console.log(dataParse)

    // sử dụng hàm map => return về 1 mảng mới
    TaskLists.taskList = dataParse.map((value) => {
        const task = new Task()
        for (let key in value) {
            task[key] = value[key]
        }
        return task
    })

    renderTaskList()
}

const getLocalStore1 = () => {
    const data = localStorage.getItem('taskListCompleted')
    const dataParse = JSON.parse(data) || []
    // console.log(dataParse)

    // sử dụng hàm map => return về 1 mảng mới
    TaskLists.taskListCompleted = dataParse.map((value) => {
        const task = new Task()
        for (let key in value) {
            task[key] = value[key]
        }
        return task
    })

    renderTaskCompleted()
}
getLocalStore()

getLocalStore1()

addItem.onclick = () => {
    const task = getFormValues()
    TaskLists.addTask(task)
    getFormValues()
    renderTaskList()
    setLocalStore()
}

window.removeTask = (name) => {
    TaskLists.removeTask(name)
    renderTaskList()
    setLocalStore()
}

window.removeTaskCompleted = (name) => {
    TaskLists.removeTaskCompleted(name)
    renderTaskCompleted()
    setLocalStore1()
}

window.addTaskCompleted = (name) => {
    TaskLists.addTaskCompleted(name)
    ,
    renderTaskCompleted()
    TaskLists.removeTask(name)
    renderTaskList()
    setLocalStore()
    setLocalStore1()
}

window.addTaskListFromCompleted = (name) => {
    TaskLists.addTaskListFromCompleted(name)
    console.log(TaskLists.taskList);
    renderTaskList()
    TaskLists.removeTaskCompleted(name)
    renderTaskCompleted()
    setLocalStore()
    setLocalStore1()
}

document.querySelector('#two').onclick = () => {
    TaskLists.sapXepAZ()
    TaskLists.sapXepCompletedAZ()
    renderTaskList()
    renderTaskCompleted()
    setLocalStore()
    setLocalStore1()
}

document.querySelector('#three').onclick = () => {
    TaskLists.sapXepZA()
    TaskLists.sapXepCompletedZA()
    renderTaskList()
    renderTaskCompleted()
    setLocalStore()
    setLocalStore1()
}




