import React, { createContext } from 'react';
import {getAuth} from 'firebase/auth'; 
import app from '../Firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

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