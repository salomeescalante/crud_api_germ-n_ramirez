const router = require('express').Router()

const todoServices = require('./todos.services')

router.get('/users', todoServices.getTodos)

router.post('/users', todoServices.createNewTodo)

router.get('/users/:id', todoServices.getOneTodo)


module.exports = router