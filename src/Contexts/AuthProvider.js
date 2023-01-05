import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../Firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, isLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    //--- signIn method of email & password ---//
    const createUser = (email, password) => {
        isLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //--- signIn method of email & password ---//
    const profileUpdate = (name, photoURL) => {
        isLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
        })
    }

    //---logOut method ---//
    const signIn = (email, password) => {
        isLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //---sign in with google ---//
    const googleSignIn = () => {
        isLoading(true)
        return signInWithPopup(auth, googleProvider)
    }




    //---logOut method ---//
    const logOut = () => {
        isLoading(true)
        return signOut(auth);
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log('I am from onAuthStateChanged', currentUser)
            isLoading(false)
        })
        return () => unsubscribe();
    }, [])


    const authInfo = {
        createUser,
        user,
        profileUpdate,
        logOut,
        signIn,
        googleSignIn,
        loading
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