import React, { useContext } from 'react';
import styled from 'styled-components';
import { TodoContext } from "../contexts/TodoContext";
import Todo from './Todo';

const TodosWrapper = styled.section`

`;

const Todos = () => {
    const { todos } = useContext(TodoContext);

    // Sort todos based on their priority
    const sortedTodos = [...todos];
    sortedTodos.sort((a, b) => a.priority - b.priority);
    
    return (
        <TodosWrapper>
          {sortedTodos.map(todo => {
            return <Todo todo={todo} key={todo.title} />;
          })}
        </TodosWrapper>
      );
}

export default Todos;