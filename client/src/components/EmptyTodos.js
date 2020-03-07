import React from 'react'
import styled from 'styled-components';
import EmptySVG from '../assets/empty.svg';

const EmptyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`;

const StyledTitle = styled.h3`
    font-family Roboto, sans-serif;
    text-align: center;
    color: #d9d9d9;
    font-weight: 400;
    font-size: 16px;
`;

const StyledImage = styled.img`
    width: 100px;
`;

const EmptyTodos = () => {
    return (
        <EmptyWrapper>
            <StyledImage src={EmptySVG} />
            <StyledTitle>No Todos yet...</StyledTitle>
        </EmptyWrapper>
    )
}

export default EmptyTodos
