// Always import model into controlleer 
const Task = require('../model/Tasks');

const getAllTasks = (req, res) => {
    res.send('get all tasks')
}

const createTask = async (req, res) => {
    const task = await Task.create({ name: 'first task' })
    res.satus(201).json({ task })
}

const getTask = (req, res) => {
    res.send({ id: req.params.id })
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
