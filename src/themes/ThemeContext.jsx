import React, { createContext, useState, useContext } from 'react';
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [tema, setTema] = useState('dark');

    const cambioTema=()=>{
       console.log(tema)
        if(tema=="dark"){
            setTema("light")
        }else{
            setTema("dark")
        }
    }
    return (
        <ThemeContext.Provider value={{ tema, cambioTema }}>
            {children}
        </ThemeContext.Provider>
    )
}
export const useTheme = () => useContext(ThemeContext)