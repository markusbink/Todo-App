import React, { useContext } from 'react'
import styled from 'styled-components';
import Todos from './Todos';
import AddTodo from './AddTodo';
import Header from './Header';
import { ThemeContext } from '../contexts/ThemeContext';
import { TodoContext } from '../contexts/TodoContext';
import EmptyTodos from './EmptyTodos';

const StyledApp = styled.div`
    background: ${props => props.isDarkmodeEnabled ? '#1f212d' : '#fff'};
    position: fixed;
    height: 100vh;
    width: 100%;
    overflow-y: scroll;
`;

const StyledWrapper = styled.section`
  margin: 0 auto;
  width: 100%;
  max-width: 750px;
`;

const StyledTitle = styled.h2`
    color: ${props => props.isDarkmodeEnabled ? '#888' : '#1f212d'};   
  text-align: center;
  font-size: 30px;
  font-family Roboto, sans-serif;
`;


const TodoApp = () => {

    const { isDarkmodeEnabled } = useContext(ThemeContext);
    const { todos } = useContext(TodoContext);

    return (
        <StyledApp isDarkmodeEnabled={isDarkmodeEnabled}>
            <Header />
            <StyledWrapper>
                <StyledTitle isDarkmodeEnabled={isDarkmodeEnabled}>What do you want to do?</StyledTitle>
                {todos.length > 0 ? <Todos /> : <EmptyTodos/>}
                <AddTodo />
            </StyledWrapper>

        </StyledApp>
    )
}

export default TodoApp;
