import React, { createContext, useState } from 'react'

export const ThemeContext = createContext();

const ThemeContextProvider = props => {

    const [isDarkmodeEnabled, setDarkmode] = useState(false);

    const toggleDarkmode = (e) => {
        e.stopPropagation();
        setDarkmode(!isDarkmodeEnabled);
    }

    return (
        <ThemeContext.Provider value={{isDarkmodeEnabled, toggleDarkmode}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;
