import React, { useEffect } from 'react';
import { getAuth } from "firebase/auth";

import { createContext } from 'react';
import { useState } from 'react';

import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import app from '../Firebasse/Firebase.confige';





const auth = getAuth(app)
export const AuthContext = createContext()
const Authprovider = ({ children }) => {

    const [answered, setAnswered] = useState(0)
    const [correctAnsCount, setCorrectAnsCount] = useState(0)
    const [wrongAnsCount, setWrongAnsCount] = useState(0)
    const [finalMark, setFinalMark] = useState(0)


    const [user, setUser] = useState(null)
    console.log('user', user)
    //  setting loading for when data is loading
    const [loading, setLoading] = useState(true)

    // create user with email
    const createUserByEmailAndPss = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //set current user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe();
    }, [])

    // user login by email paswword
    const loginByEmailAndPassWord = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };


    //use login by google
    const loginWithEmail = provider => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    //updatedeing user
    const updateUser = (userInfo) => {

        const profile = {
            displayName: userInfo.name,
            photoURL: userInfo.photoURL
        }
        return updateProfile(auth.currentUser, profile)
    }


    // logout
    const logout = () => {
        return signOut(auth)
    }



    const authInfo = {
        correctAnsCount, setCorrectAnsCount,
        answered, setAnswered,
        wrongAnsCount, setWrongAnsCount,
        finalMark, setFinalMark,
        user,
        createUserByEmailAndPss,
        loginByEmailAndPassWord,
        loginWithEmail,
        logout,
        loading,
        setLoading,
        updateUser,
        setUser,


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;
