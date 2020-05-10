import React, { createContext, useState } from 'react'
import { dark_colors, light_colors } from "../helpers/colors"
export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    const [lightTheme, setTightTheme] = useState(true);
    return (
        <ThemeContext.Provider value={{}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider