import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios';

export const TodoContext = createContext();

const TodoContextProvider = props => {

    const [todoInput, setTodoInput] = useState('');
    const [priority, setPriority] = useState(0);
    const [todos, setTodos] = useState([]);

    // Render all Todos on component mount
    useEffect(() => {
        async function fetchTodos() {
            try {
                const response = await axios.get('api/todos');
                if(response.status !== 200) {
                    return;
                }
                setTodos(response.data);
            } catch(error) {
                console.log(error);
            }
        }
        fetchTodos();
    }, []);

    const handleTodoInput = (e) => {
        setTodoInput(e.target.value);
    }

    const handlePriority = (e) => {
        setPriority(e.target.value);
    }

    const handleCheckboxChange = async (_id) => {
        // Get Todo by Id
        const todo = todos.filter(todo => todo._id === _id)[0];
        // Toggle Complete
        const response = await axios.post('api/todos/complete', 
        {
            _id,
            'completed': !todo.completed
        });

        if(response.status !== 200) {
            return;
        }

        setTodos(
            todos.map(prevTodo => {
                if(prevTodo._id !== _id) {
                    return prevTodo;
                };
                prevTodo.completed = !prevTodo.completed;
                return prevTodo;
            })
        )
    }

    const handleTodoSubmit = async (e) => {
        e.preventDefault();       

        if(todoInput.length === 0 || priority.length === 0) {
            return;
        }

        const response = await axios.post('api/todos/create',
        {
            'title': todoInput.trim(),
            priority
        });

        if(response.status !== 200) {
            return;
        }

        setTodos([...todos, response.data]);
        setTodoInput('');
        setPriority(0);
    }

    return (
        <TodoContext.Provider value={{todos, handleTodoSubmit, todoInput, priority, handleTodoInput, handleCheckboxChange, handlePriority}}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider;
