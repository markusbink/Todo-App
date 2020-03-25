import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { TodoContext } from '../contexts/TodoContext';
import { ThemeContext } from '../contexts/ThemeContext';

const FormWrapper = styled.form`
overflow: hidden;
width: 100%;
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

const EditTodo = ({ todo, isEditable, setIsEditable }) => {
    // Get values from context
    const { isDarkmodeEnabled } = useContext(ThemeContext);
    const { handleTodoEdit } = useContext(TodoContext);

    // Edit Todo State
    const [editTodo, setEditTodo] = useState({
        title: todo.title,
        priority: todo.priority
    });

    const handleTitle = (e) => {
        setEditTodo({ ...editTodo, title: e.target.value });
    }

    const handlePriority = (e) => {
        setEditTodo({ ...editTodo, priority: e.target.value });
    }

    const submitChanges = (e, id) => {
        setIsEditable(!isEditable);
        handleTodoEdit(e, id, editTodo.title, editTodo.priority);
    }

    return (
        <FormWrapper onSubmit={(e) => submitChanges(e, todo._id)}>
            <InputWrapper>
                <StyledLabel width={70} htmlFor="todo">
                    <StyledInput id="todo" type="text" isDarkmodeEnabled={isDarkmodeEnabled} placeholder="Add a new Todo..." value={editTodo.title} onChange={e => handleTitle(e)} />
                </StyledLabel>
                <StyledLabel width={30} htmlFor="priority">
                    <StyledInput id="priority" type="number" isDarkmodeEnabled={isDarkmodeEnabled} value={editTodo.priority} onChange={e => handlePriority(e)} min="0" />
                </StyledLabel>
            </InputWrapper>
            <StyledButton>Save Changes</StyledButton>
        </FormWrapper>
    );
}

export default EditTodo;