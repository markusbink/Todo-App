import React, { createContext, useState } from 'react'

export const ThemeContext = createContext();

const ThemeContextProvider = props => {

    const [isDarkmodeEnabled, setDarkmode] = useState(true)

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
