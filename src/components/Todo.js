import React, { useContext } from 'react'
import styled from 'styled-components';
import { TodoContext } from '../contexts/TodoContext';
import Checkbox from './Checkbox';

const StyledTodo = styled.div`
    background: #35374b;
    color: #000000;
    margin-bottom: 10px;
    font-family Roboto, sans-serif;
    padding: 20px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const StyledTitle = styled.h3`
    margin-top: 0;
    margin-bottom: 5px;
    color: white;
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
    const {todo} = props;

    return (
        <React.Fragment>
            <StyledTodo onClick={() => handleCheckboxChange(todo.title)}>
                <Checkbox checked={todo.isCompleted} onChange={() => handleCheckboxChange(todo.title)}/>
                <InfoWrapper>
                    <StyledTitle isCompleted={todo.isCompleted}>{todo.title}</StyledTitle>
                </InfoWrapper>
            </StyledTodo>
        </React.Fragment>
    )
}

export default Todo;
