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
    } catch (error) {
        res.status(500).json({ error });
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
        res.status(200).json(todo);
    } catch (error) {
        res.status(500).json({ error });
    }
});

// @route POST /api/todos/update
// @desc Update an existing todo
// @access Public
router.post('/update', async (req, res) => {
    // Get request params
    const { _id, title, priority } = req.body;
    console.log(req.body);
    // Update todo by id
    try {
        let response = await Todo.findOneAndUpdate(
            { _id },
            {
                title,
                priority
            });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error });
    }
});

// @route POST /api/todos/delete
// @desc Delete a todo by id
// @access Public
router.post('/delete', async (req, res) => {
    // Get request params
    const { _id } = req.body;
    // Delete todo by id
    try {
        let response = await Todo.deleteOne({ _id });
        res.status(200).json(response);

    } catch (error) {
        res.status(500).json({ error });
    }
});

// @route POST /api/todos/complete
// @desc Toggle complete status of a todo item
// @access Public
router.post('/complete', async (req, res) => {
    // Get request params    
    const { _id, completed } = req.body;
    // Toggle complete
    try {
        const todo = await Todo.findById(_id);
        todo.completed = completed;
        await todo.save();
        res.status(200).json(todo);
    } catch (error) {
        res.status(500).json({ error });
    };
});

module.exports = router;