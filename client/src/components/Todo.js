import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import { TodoContext } from '../contexts/TodoContext';
import { ThemeContext } from '../contexts/ThemeContext';
import Checkbox from './Checkbox';

const StyledTodo = styled.div`
    position: relative;
    background: ${props => props.isDarkmodeEnabled ? '#35374b' : '#f5f5f5'};
    color: #000000;
    margin-bottom: 10px;
    font-family Roboto, sans-serif;
    padding: 20px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
`;

const StyledTitle = styled.h3`
    margin-top: 0;
    margin-bottom: 0;
    color: ${props => props.isDarkmodeEnabled ? 'white' : 'black'};
    ${props => props.isCompleted &&`
        text-decoration: line-through;
        color: #888;
    `};
`;

const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 20px;
    width: 100%;
`;

const StyledPriority = styled.span`
    color: ${props => props.isDarkmodeEnabled ? 'white' : 'black'};
    background: rgba(255,255,255,0.1);
    padding: 2px 6px;
    border-radius: 4px;
    display: inline-block;
    font-weight: 600;
`;
    
const StyledMore = styled.svg`    
    fill: ${props => props.isDarkmodeEnabled ? 'white' : 'black'};
    stroke: ${props => props.isDarkmodeEnabled ? 'white' : 'black'};
    display: inline-block;
    margin-left: 10px;
`;

const InfoWrapper = styled.span`
    display: flex;
`;

const ContextMenu = styled.ul`
    background: ${props => props.isDarkmodeEnabled ? '#35374b' : 'white'};
    box-shadow: 0px 5px 10px rgba(0,0,0,0.25);
    margin: 0;
    padding: 0;
    position: absolute;
    top: calc(100% - 15px);
    right: 20px;
    z-index: 99999;
    list-style-type: none;
    min-width: 150px;
    border-radius: 4px;
    overflow: hidden;
`;

const Item = styled.li`
    color: ${props => props.isDarkmodeEnabled ? 'white' : '#35374b'};
    padding: 10px;
    box-sizing: border-box;
    
    &:hover {
        background: ${props => props.isDarkmodeEnabled ? 'rgba(255,255,255,0.1)' : '#f2f2f2'};
    }

    &:not(:last-child) {
        border-bottom: 1px solid ${props => props.isDarkmodeEnabled ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)'};
    }
`;

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

const Todo = (props) => {
    // Get values from props
    const {todo} = props;
    // Todo State
    const [editTodo, setEditTodo] = useState({
        title: todo.title,
        priority: todo.priority
    });
    const [isContextMenuVisible, setContextMenuVisible] = useState(false);
    const [isEditable, setIsEditable] = useState(false);
    // Get values from context
    const {handleCheckboxChange, handleDelete, handleTodoEdit} = useContext(TodoContext);
    const {isDarkmodeEnabled} = useContext(ThemeContext);
    
    // Change handlers
    const toggleContextMenu = () => {
        setContextMenuVisible(!isContextMenuVisible);
    }

    const toggleEditable = () => {
        setIsEditable(!isEditable);
        toggleContextMenu();
    }

    const handleTitle = (e) => {
        setEditTodo({ ...editTodo, title: e.target.value});
    }

    const handlePriority = (e) => {
        setEditTodo({ ...editTodo, priority: e.target.value});
    }

    const submitChanges = (e, id) => {
        setIsEditable(!isEditable);
        handleTodoEdit(e, id, editTodo.title, editTodo.priority);
    }

    return (
        <React.Fragment>
            <StyledTodo isDarkmodeEnabled={isDarkmodeEnabled}>
                {!isEditable ? 
                <React.Fragment>
                    <Checkbox checked={todo.completed} onChange={() => handleCheckboxChange(todo._id)} />
                    <ContentWrapper>
                        <StyledTitle onClick={() => handleCheckboxChange(todo._id)} isDarkmodeEnabled={isDarkmodeEnabled} isCompleted={todo.completed}>{todo.title}</StyledTitle>
                        <InfoWrapper>
                            <StyledPriority isDarkmodeEnabled={isDarkmodeEnabled}>{todo.priority}</StyledPriority>
                            <StyledMore onClick={() => toggleContextMenu()} isDarkmodeEnabled={isDarkmodeEnabled} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2"></circle><circle cx="12" cy="5" r="2"></circle><circle cx="12" cy="19" r="2"></circle></StyledMore>
                            {isContextMenuVisible &&
                            <ContextMenu isDarkmodeEnabled={isDarkmodeEnabled}>
                                <Item isDarkmodeEnabled={isDarkmodeEnabled} onClick={() => toggleEditable()}> Edit</Item>
                                <Item isDarkmodeEnabled={isDarkmodeEnabled} onClick={() => handleDelete(todo._id)}>Delete</Item>
                            </ContextMenu>
                            }
                        </InfoWrapper>
                    </ContentWrapper>
                </React.Fragment>
                : 
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
                }
            </StyledTodo>
        </React.Fragment>
    )
}

export default Todo;
