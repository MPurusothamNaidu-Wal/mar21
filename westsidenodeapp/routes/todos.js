var express = require('express');
var router = express.Router();
var todosController = require('../controllers/todos');
router.get('/', todosController.getTodos);
router.post('/', todosController.createTodo);
router.delete('/:indexToDelete', todosController.deleteTodo);
module.exports = router;
