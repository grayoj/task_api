const getAllTasks = (req, res) => {
    res.send('get all tasks')
}

const createTask = (req, res) => {
    res.send('create tasks')
}

const getTask = (req, res) => {
    res.send('get tasks')
}

const updateTask = (req, res) => {
    res.send('update tasks')
}

const deleteTask = (req, res) => {
    res.send("delete tasks")
}

module.exports = {
    getAllTasks, createTask, getTask, updateTask, deleteTask
}
