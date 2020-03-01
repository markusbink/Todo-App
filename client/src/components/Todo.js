import React, { useContext } from 'react'
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

const InfoWrapper = styled.div`
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

const StyledDelete = styled.svg`
    stroke: ${props => props.isDarkmodeEnabled ? 'white' : 'black'};
    position: absolute;
    right: 0;
`;


const Todo = (props) => {
    const {handleCheckboxChange, handleDelete} = useContext(TodoContext);
    const {isDarkmodeEnabled} = useContext(ThemeContext);
    const {todo} = props;

    return (
        <React.Fragment>
            <StyledTodo isDarkmodeEnabled={isDarkmodeEnabled}>
                <Checkbox checked={todo.completed} onChange={() => handleCheckboxChange(todo._id)} />
                <InfoWrapper>
                    <StyledTitle onClick={() => handleCheckboxChange(todo._id)} isDarkmodeEnabled={isDarkmodeEnabled} isCompleted={todo.completed}>{todo.title}</StyledTitle>
                    <StyledPriority isDarkmodeEnabled={isDarkmodeEnabled}>{todo.priority}</StyledPriority>
                    <StyledDelete onClick={() => handleDelete(todo._id)} isDarkmodeEnabled={isDarkmodeEnabled} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></StyledDelete>
                </InfoWrapper>
            </StyledTodo>
        </React.Fragment>
    )
}

export default Todo;
