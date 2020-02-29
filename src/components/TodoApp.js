import React, { useContext } from 'react'
import styled from 'styled-components';
import Todos from './Todos';
import AddTodo from './AddTodo';
import Header from './Header';
import { ThemeContext } from '../contexts/ThemeContext';

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
    color: ${props => props.isDarkmodeEnabled ? '#ffffff' : '#1f212d'};   
  text-align: center;
  font-size: 30px;
  font-family Roboto, sans-serif;
`;


const TodoApp = () => {

    const { isDarkmodeEnabled } = useContext(ThemeContext);

    return (
        <StyledApp isDarkmodeEnabled={isDarkmodeEnabled}>
            <Header />
            <StyledWrapper>
                <StyledTitle isDarkmodeEnabled={isDarkmodeEnabled}>Daily-Todo</StyledTitle>
                <Todos />
                <AddTodo />
            </StyledWrapper>

        </StyledApp>
    )
}

export default TodoApp;
