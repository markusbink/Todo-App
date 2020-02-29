const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// @route GET /api/todos
// @desc Retrieve all existing todos
// @access Public
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch(error) {
        res.status(400).json({error});
    }  
});

// @route POST /api/todos/create
// @desc Create a new todo
// @access Public
router.post('/create', async (req, res) => {
    // Get request params
    const { title, priority } = req.body;
    // Create new todo instance
    const todo = new Todo({
        title,
        completed: false,
        priority
    })
    // Save todo to DB
    try {
        await todo.save();
        res.json(todo);
    } catch(error) {
        res.status(400).json({error});
    }
});

module.exports = router;