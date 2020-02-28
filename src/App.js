import React from 'react';
import styled from 'styled-components';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import TodoContextProvider from './contexts/TodoContext';
import ThemeContextProvider from './contexts/ThemeContext';

const StyledApp = styled.div`
  background: #1f212d;
  height: 100vh;
`;

const StyledWrapper = styled.section`
  margin: 0 auto;
  width: 100%;
  max-width: 750px;
`;

const StyledTitle = styled.h2`
  color: white;
  text-align: center;
  font-size: 30px;
  font-family Roboto, sans-serif;
`;

function App() {

  return (
    <ThemeContextProvider>
    <TodoContextProvider>
      <StyledApp className="App">
        <Header/>
        <StyledWrapper>
          <StyledTitle>Daily-Todo</StyledTitle>
          <Todos />
          <AddTodo />
        </StyledWrapper>
      </StyledApp>
    </TodoContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
