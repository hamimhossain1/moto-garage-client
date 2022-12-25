import React, { createContext } from 'react';


export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const name = 'Hamim';
    const authInfo = {
        name
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;