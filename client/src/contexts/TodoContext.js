import React, { createContext, useState } from 'react'

export const TodoContext = createContext();

const TodoContextProvider = props => {

    const [todoInput, setTodoInput] = useState('');
    const [priority, setPriority] = useState(0);
    const [todos, setTodos] = useState([
        {
            title: 'Clean room',
            priority: 3,
            isCompleted: true
        },
        {
            title: 'Create Website',
            priority: 10,
            isCompleted: false
        },
        {
            title: 'Eat lunch',
            priority: 1,
            isCompleted: false
        }
    ]);

    const handleTodoInput = (e) => {
        setTodoInput(e.target.value);
    }

    const handlePriority = (e) => {
        setPriority(e.target.value);
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
