import React from 'react';
import TodoContextProvider from './contexts/TodoContext';
import ThemeContextProvider from './contexts/ThemeContext';
import TodoApp from './components/TodoApp';

function App() {

  return (
    <ThemeContextProvider>
    <TodoContextProvider>

      <div className="App">
          <TodoApp/>
      </div>
    </TodoContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
