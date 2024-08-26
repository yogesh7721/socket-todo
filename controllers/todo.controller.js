// CRUD

const asyncHandler = require('express-async-handler')

exports.createTodo = asyncHandler(async (req, res) => {
    res.json({ message: "createTodo success" })
})
exports.readTodo = asyncHandler(async (req, res) => {
    res.json({ message: "readTodo success" })
})
exports.updateTodo = asyncHandler(async (req, res) => {
    res.json({ message: "updateTodo success" })
})
exports.deleteTodo = asyncHandler(async (req, res) => {
    res.json({ message: "deleteTodo success" })
})