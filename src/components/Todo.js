import React, { useContext } from 'react'
import styled from 'styled-components';
import { TodoContext } from '../contexts/TodoContext';
import { ThemeContext } from '../contexts/ThemeContext';
import Checkbox from './Checkbox';

const StyledTodo = styled.div`
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
    margin-bottom: 5px;
    color: ${props => props.isDarkmodeEnabled ? 'white' : 'black'};
    ${props => props.isCompleted &&`
        text-decoration: line-through;
        color: #888;
    `};
`;

const InfoWrapper = styled.div`
    margin-left: 20px;
`;


const Todo = (props) => {
    const {handleCheckboxChange} = useContext(TodoContext);
    const {isDarkmodeEnabled} = useContext(ThemeContext);
    const {todo} = props;

    return (
        <React.Fragment>
            <StyledTodo isDarkmodeEnabled={isDarkmodeEnabled} onClick={() => handleCheckboxChange(todo.title)}>
                <Checkbox checked={todo.isCompleted} onChange={() => handleCheckboxChange(todo.title)}/>
                <InfoWrapper>
                    <StyledTitle isDarkmodeEnabled={isDarkmodeEnabled} isCompleted={todo.isCompleted}>{todo.title}</StyledTitle>
                </InfoWrapper>
            </StyledTodo>
        </React.Fragment>
    )
}

export default Todo;
