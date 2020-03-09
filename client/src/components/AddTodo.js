import React, { useState, useContext } from 'react'
import { TodoContext } from "../contexts/TodoContext";
import { ThemeContext } from "../contexts/ThemeContext";
import styled from 'styled-components';

const FormWrapper = styled.form`
    overflow: hidden;
    margin-top: 20px;
`;

const InputWrapper = styled.div`
    display: flex;  
`;


const StyledLabel = styled.label`
    display: block;
    float: left;
    font-family Roboto, sans-serif;
    cursor: pointer;
    color: #888;
    width: ${props => `${props.width}%`};

    &:not(:last-child) {
        margin-right: 10px;
    }
`;

const StyledInput = styled.input`
    background: ${props => props.isDarkmodeEnabled ? '#35374b' : '#f5f5f5'};
    border: 2px solid #5a4fff;
    border-radius: 4px;
    padding: 15px 20px;
    font-size: 14px;
    color: ${props => props.isDarkmodeEnabled ? 'white' : '#888'};
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 5px;

    &:focus {
        outline: none;
    }
`;

const StyledButton = styled.button`
    border: 0;
    border-radius: 4px;
    padding: 15px 20px;
    width: 100%;
    font-size: 14px;
    float: right;
    background: #5a4fff;
    color: white;
    font-weight: 600;
    cursor: pointer;
`;

const AddTodo = () => {
    // AddTodo State
    const [todo, setTodo] = useState({
        title: '',
        priority: 0
    });
    // Get values from context
    const { handleTodoSubmit } = useContext(TodoContext);
    const { isDarkmodeEnabled } = useContext(ThemeContext);

    // Change handlers
    const handleTitle = (e) => {
        setTodo({ ...todo, title: e.target.value});
    }

    const handlePriority = (e) => {
        setTodo({ ...todo, priority: e.target.value});
    }

    const submitTodo = (e) => {
        handleTodoSubmit(e, todo.title, todo.priority);
        setTodo({ ...todo, title: ''});
        setTodo({ ...todo, priority: 0});
    }

    return (
        <FormWrapper onSubmit={(e) => submitTodo(e)}>
            <InputWrapper>
            <StyledLabel width={70} htmlFor="todo">
                Todo
                <StyledInput id="todo" type="text" isDarkmodeEnabled={isDarkmodeEnabled} placeholder="Add a new Todo..." value={todo.title} onChange={(e) => handleTitle(e)} />
            </StyledLabel>
            <StyledLabel width={30} htmlFor="priority">
                Priority
                <StyledInput id="priority" type="number" isDarkmodeEnabled={isDarkmodeEnabled} value={todo.priority} onChange={(e) => handlePriority(e)} min="0" />
            </StyledLabel>
            </InputWrapper>
            <StyledButton>Add Item +</StyledButton>
        </FormWrapper>
    )
}

export default AddTodo;
