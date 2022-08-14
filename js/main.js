import { TaskList } from "../models/TaskList.js";
import { Task } from "../models/Task.js";

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
        <li>${task.name}
                            <div class="buttons">
                                <button class="remove">
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
    document.querySelector('#todo').innerHTML = html;
}

addItem.onclick = () => {
    const task = getFormValues()
    TaskLists.addTask(task)
    getFormValues()
    renderTaskList()
}

document.getElementsByClassName('remove').onclick = () => {
    alert('long')
    // TaskLists.removeTask(input)
    // renderTaskList()
}

