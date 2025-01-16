import {createContext, useContext, useState} from "react";
import PropTypes from "prop-types";

export const ThemeContext = createContext();
export const ThemeDispatchContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isNightMode, setIsNightMode] = useState(false);

    const toggleNightMode = () => {
        setIsNightMode(!isNightMode);
        document.body.classList.toggle('night-mode');
    };

    return (
        <ThemeContext.Provider value={isNightMode}>
            <ThemeDispatchContext.Provider value={toggleNightMode}>
                {children}
            </ThemeDispatchContext.Provider>
        </ThemeContext.Provider>
    )
};

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useTheme = () => useContext(ThemeContext);
export const useThemeDispatch = () => useContext(ThemeDispatchContext);
