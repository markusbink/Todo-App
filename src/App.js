import React from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import TodoContextProvider from './contexts/TodoContext';
import styled from 'styled-components';

const StyledApp = styled.div`
  background: #1f212d;
  height: 100vh;
  padding: 80px 40px;
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
    <StyledApp className="App">
      <TodoContextProvider>
        <StyledWrapper>
          <StyledTitle>Daily-Todo</StyledTitle>
          <Todos/>
          <AddTodo/>
        </StyledWrapper>
      </TodoContextProvider>
    </StyledApp>
  );
}

export default App;
