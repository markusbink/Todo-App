import React, { createContext, useState } from 'react'

export const TodoContext = createContext();

const TodoContextProvider = props => {

    const [todoInput, setTodoInput] = useState('');
    const [todos, setTodos] = useState([
        {
            title: 'Clean room',
            isCompleted: true
        },
        {
            title: 'Create Website',
            isCompleted: false
        },
        {
            title: 'Eat lunch',
            isCompleted: false
        }
    ]);

    const handleTodoInput = (e) => {
        setTodoInput(e.target.value);
    }

    const handleCheckboxChange = (title) => {
        setTodos(
            todos.map(prevTodo => {
                if(prevTodo.title !== title) {
                    return prevTodo;
                };
                prevTodo.isCompleted = !prevTodo.isCompleted;
                return prevTodo;
            })
        )
    }

    const addTodo = (e) => {
        
        if(todoInput.length === 0 || e.key !== 'Enter') {
            return;
        }

        const newTodo = {
            title: todoInput,
            isCompleted: false
        }

        setTodos([...todos, newTodo]);
        setTodoInput('');
    }

    return (
        <TodoContext.Provider value={{todos, addTodo, todoInput, handleTodoInput, handleCheckboxChange}}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider;
