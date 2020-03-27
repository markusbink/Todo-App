import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios';

export const TodoContext = createContext();

const TodoContextProvider = props => {
    // Global Todo State
    const [todos, setTodos] = useState([]);

    // Render all Todos on component mount
    useEffect(() => {
        async function fetchTodos() {
            try {
                const response = await axios.get('api/todos');
                if (response.status !== 200) {
                    return;
                }
                setTodos(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchTodos();
    }, []);

    // Handles Change when Checkbox is clicked
    const handleCheckboxChange = async (_id) => {
        // Get Todo by Id
        if (todos.length === 0) {
            return;
        }
        const todo = todos.filter(todo => todo._id === _id)[0];
        // Toggle Complete
        const response = await axios.post('api/todos/update',
            {
                _id,
                'completed': !todo.completed
            });

        if (response.status !== 200) {
            return;
        }

        setTodos(
            todos.map(prevTodo => {
                if (prevTodo._id !== _id) {
                    return prevTodo;
                };
                prevTodo.completed = !prevTodo.completed;
                return prevTodo;
            })
        )
    }

    // Create a new Todo
    const handleTodoSubmit = async (e, title, priority) => {
        e.preventDefault();

        if (title.length === 0 || priority.length === 0) {
            return;
        }

        const response = await axios.post('api/todos/create',
            {
                'title': title.trim(),
                priority
            });

        if (response.status !== 200) {
            return;
        }

        setTodos([...todos, response.data]);
    }

    // Update an existing todo
    const handleTodoEdit = async (e, _id, title, priority) => {
        e.preventDefault();

        if (title.length === 0 || priority.length === 0) {
            return;
        }

        const response = await axios.post('api/todos/update',
            {
                _id,
                title: title.trim(),
                priority
            });

        if (response.status !== 200) {
            return;
        }
        setTodos(
            todos.map(prevTodo => {
                if (prevTodo._id !== _id) {
                    return prevTodo;
                };
                prevTodo.title = title;
                prevTodo.priority = parseInt(priority);
                return prevTodo;
            }));
    }

    // Delete an existing todo
    const handleDelete = async (_id) => {
        const response = await axios.post('/api/todos/delete', {
            _id
        });

        if (response.status !== 200) {
            return;
        }

        setTodos(prevTodos => {
            return prevTodos.filter(todo => todo._id !== _id);
        });
    }

    return (
        <TodoContext.Provider
            value={{
                todos,
                handleTodoSubmit,
                handleTodoEdit,
                handleCheckboxChange,
                handleDelete
            }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider;
