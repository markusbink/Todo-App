import React, { useContext } from 'react'
import { TodoContext } from "../contexts/TodoContext";
import styled from 'styled-components';

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
    color: #fff;
    width: 100%;
    box-sizing: border-box;

    &:focus {
        outline: none;
    }
`;

const StyledButton = styled.button`
    border: 0;
    padding: 15px 20px;
    width: 140px;
    font-size: 14px;
    float: right;
    background: #5a4fff;
    color: white;
    font-weight: 600;
    cursor: pointer;
`;

const AddTodo = () => {

    const { addTodo, todoInput, handleTodoInput } = useContext(TodoContext);

    return (
        <InputWrapper>
        <StyledInput type="text" placeholder="Add a new Todo..." value={todoInput} onChange={handleTodoInput} />
        <StyledButton onClick={addTodo}>Add Item +</StyledButton>
        </InputWrapper>
    )
}

export default AddTodo;
