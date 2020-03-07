import React, { useContext } from 'react'
import styled from 'styled-components';
import EmptySVG from '../assets/empty.svg';
import { ThemeContext } from '../contexts/ThemeContext';


const EmptyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    opacity: ${props => props.isDarkmodeEnabled ? '0.5' : '1'};
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

    const { isDarkmodeEnabled } = useContext(ThemeContext);


    return (
        <EmptyWrapper isDarkmodeEnabled={isDarkmodeEnabled}>
            <StyledImage src={EmptySVG} />
            <StyledTitle>No Todos yet...</StyledTitle>
        </EmptyWrapper>
    )
}

export default EmptyTodos
