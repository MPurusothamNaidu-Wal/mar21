const { body, validationResult } = require('express-validator');
let todos = [
  { item: 'Initial todo1', status: 'complete' },
  { item: 'initial todo2', status: 'incomplete' },
];
function getTodos(req, res) {
  res.json(todos);
}
const createTodo = [
  body('item')
    .trim()
    .isLength({ min: 3, max: 100 })
    .withMessage('min should be 3 and max length to be 100')
    .escape()
    .withMessage(
      'Only alphabets and numbers allowed. No special characters allowed'
    ),
  body('status')
    .trim()
    .isLength({ min: 8, max: 10 })
    .withMessage('in range of 8 to 10 characters'),
  (req, res) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      res.json({ status: 0, debug_data: errors });
    } else {
      console.log(req.body);
      let { item, status } = req.body;
      todos.push({ item, status });
      res.json({ status: 'adding todo complete' });
    }
  },
];
function deleteTodo(req, res) {
  console.log(req.params.indexToDelete);
  let newTodos = todos.filter((val, index) => {
    if (index === parseInt(req.params.indexToDelete)) {
      console.log('Came in return false');
      return false;
    } else {
      return true;
    }
  });
  console.log(newTodos);
  todos = newTodos;
  todos.log(todos);
  res.json({ status: 'successfully dleted' });
}
module.exports = { getTodos, createTodo, deleteTodo };
