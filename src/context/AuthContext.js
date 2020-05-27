import React, { useState, useEffect, createContext } from 'react';

const AuthContext = createContext();

const AuthProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login=()=>{
        setIsLoggedIn(true);
    }
    
    const logout=()=>{
        setIsLoggedIn(false);
    }

    useEffect(()=>{
        if (localStorage.getItem('token') !== null) {
            setIsLoggedIn(true);
        }
    }, []);
    
    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };