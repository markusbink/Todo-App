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

    const handleCheckboxChange = (id) => {
        setTodos(
            todos.map(prevTodo => {
                if(prevTodo._id !== id) {
                    return prevTodo;
                };
                prevTodo.isCompleted = !prevTodo.isCompleted;
                return prevTodo;
            })
        )
    }

    const handleTodoSubmit = (e) => {
        e.preventDefault();       

        if(todoInput.length === 0 || priority.length === 0) {
            return;
        }

        const newTodo = {
            title: todoInput.trim(),
            priority,
            isCompleted: false
        }

        setTodos([...todos, newTodo]);
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
