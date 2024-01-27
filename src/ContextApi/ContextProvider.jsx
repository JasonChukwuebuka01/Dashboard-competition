import React, { createContext, useState } from 'react'


export const authContext = createContext();


const ContextProvider = ({ children }) => {

    const [toggleTheme, setToggleTheme] = useState(true);

    function themeToggle(isToggled) {
        setToggleTheme(isToggled);
    };


  const authInfo={
    toggleTheme,
    themeToggle
  }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    )
}

export default ContextProvider