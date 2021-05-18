var express = require('express');
var router = express.Router();
var todo = require('../controllers/index');

/* GET home page. */
router.get('/', todo.todo_get);

// Add
router.post('/', todo.todo_add);

// Delete
router.get('/:id_deleted', todo.todo_delete);

// get update
router.get('/update/:id_update', todo.todo_getUpdate);

// post update
router.post('/update/:id_update', todo.todo_postUpdate);

module.exports = router;