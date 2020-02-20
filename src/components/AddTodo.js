import React, { useContext } from 'react'
import { TodoContext } from "../contexts/TodoContext";
import styled from 'styled-components';
import { findByLabelText } from '@testing-library/react';

const InputWrapper = styled.div`
    display: flex;
    border-radius: 4px;
    overflow: hidden;
`;

const StyledInput = styled.input`
    border: 0;
    padding: 15px 20px;
    font-size: 14px;
    background: #35374b;
    color: #888;
    width: 100%;
    box-sizing: border-box;
`;

const StyledButton = styled.button`
    border: 0;
    padding: 15px 20px;
    font-size: 14px;
    float: right;
    background: #5a4fff;
    color: white;
    font-weight: 600;
    cursor: pointer;
`;





const AddTodo = () => {

    const { addTodo, handleTodoInput } = useContext(TodoContext);

    return (
        <InputWrapper>
        <StyledInput type="text" placeholder="Add a new Todo..." onChange={handleTodoInput} />
        <StyledButton onClick={addTodo}>Add Item</StyledButton>
        </InputWrapper>
    )
}

export default AddTodo;
