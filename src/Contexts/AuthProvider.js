import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut, updateProfile} from 'firebase/auth'; 
import app from '../Firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] =useState({})

    //--- signIn method of email & password ---//
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    //--- signIn method of email & password ---//
    const profileUpdate = (name, photoURL) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
        })
    }
    
    //---logOut method ---//
    const logOut = () => {
        return signOut(auth);
        }



useEffect( () => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        console.log('I am from onAuthStateChanged', currentUser)
    })
    return () => unsubscribe();
},[])


    const authInfo = {
        createUser,
        user,
        profileUpdate,
        logOut,

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