import React, { useContext } from 'react'
import styled, { css } from 'styled-components';
import { TodoContext } from "../contexts/TodoContext";

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

const StyledDescription = styled.p`
    margin: 0;
    color: #888;
    ${props => props.isCompleted &&`
        text-decoration: line-through;
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
                <input checked={todo.isCompleted} onChange={() => handleCheckboxChange(todo.title)} type="checkbox"/>
                <InfoWrapper>
                    <StyledTitle isCompleted={todo.isCompleted}>{todo.title}</StyledTitle>
                    <StyledDescription isCompleted={todo.isCompleted}>{todo.description}</StyledDescription>
                </InfoWrapper>
            </StyledTodo>
        </React.Fragment>
    )
}

export default Todo;
