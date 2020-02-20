import React, { createContext, useState } from 'react'

export const TodoContext = createContext();

const TodoContextProvider = props => {

    const [todoInput, setTodoInput] = useState('');

    const [todos, setTodos] = useState([
        {
            title: 'Clean room',
            description: 'Clean room and tidy things up',
            isCompleted: true
        },
        {
            title: 'Create Website',
            description: 'Create the first iteration of the design',
            isCompleted: false
        },
        {
            title: 'Eat lunch',
            description: 'Burger and Fries would be nice',
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

    const addTodo = () => {

        if(todoInput.length === 0) {
            return;
        }

        const newTodo = {
            title: todoInput
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
