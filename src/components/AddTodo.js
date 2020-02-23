import React, { useContext } from 'react'
import { TodoContext } from "../contexts/TodoContext";
import { ThemeContext } from "../contexts/ThemeContext";
import styled from 'styled-components';

const InputWrapper = styled.div`
    display: flex;
    border-radius: 4px;
    overflow: hidden;
`;

const StyledInput = styled.input`
    background: ${props => props.isDarkmodeEnabled ? '#35374b' : '#f5f5f5'};
    border: 0;
    padding: 15px 20px;
    font-size: 14px;
    color: ${props => props.isDarkmodeEnabled ? 'white' : '#888'};
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
    const { isDarkmodeEnabled } = useContext(ThemeContext);

    return (
        <InputWrapper>
        <StyledInput isDarkmodeEnabled={isDarkmodeEnabled} onKeyPress={addTodo} type="text" placeholder="Add a new Todo..." value={todoInput} onChange={handleTodoInput} />
        <StyledButton onClick={addTodo}>Add Item +</StyledButton>
        </InputWrapper>
    )
}

export default AddTodo;
