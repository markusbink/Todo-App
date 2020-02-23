import React, { useContext } from 'react'
import styled from 'styled-components';
import Switch from './Switch'
import { ThemeContext } from '../contexts/ThemeContext';

const StyledHeader = styled.div`
    padding: 20px;
    border-bottom: #888;
    overflow: hidden;
`;

const Header = () => {

    const {isDarkmodeEnabled, toggleDarkmode} = useContext(ThemeContext);

    return (
        <StyledHeader onClick={toggleDarkmode}>
            <Switch checked={isDarkmodeEnabled} onChange={toggleDarkmode}/>
        </StyledHeader>
    )
}

export default Header;
