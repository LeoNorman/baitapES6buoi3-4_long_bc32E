

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
                                <button class="complete">
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

// Get value từ local
const getLocalStore = () => {
    const data = localStorage.getItem('taskList')
    const dataParse = JSON.parse(data) || []
    console.log(dataParse)

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
getLocalStore()

addItem.onclick = () => {
    const task = getFormValues()
    TaskLists.addTask(task)
    getFormValues()
    renderTaskList()
    setLocalStore()
}

window.removeTask = (name) => {
    // console.log('long')
    TaskLists.removeTask(name)
    renderTaskList()
    setLocalStore()
}

window.removeTaskCompleted = (name) => {
    // console.log('long')
    TaskLists.removeTaskCompleted(name)
    renderTaskCompleted()
    setLocalStore()
}

window.addTaskCompleted = (name) => {
    TaskLists.addTaskCompleted(name)
    renderTaskCompleted()
    TaskLists.removeTask(name)
    renderTaskList()
    console.log(TaskLists.taskListCompleted)
}

