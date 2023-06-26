import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    // User Register
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    // user login 
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // update name 
    const updateUser = (userInfo) => {
        // return updateProfile(auth.currentUser, userInfo)
        return updateProfile(auth.currentUser, userInfo)
    }

    // current user observer 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user observer');
            // console.log(user)
            setUser(currentUser)
            setLoading(false)
        });
        return () => unsubscribe();
    }, [])

    // sign out 
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const authInfo = {
        createUser,
        signIn,
        logOut,
        user,
        updateUser,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;