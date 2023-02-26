import React, { Children } from 'react';
import { getAuth } from "firebase/auth";
import app from '../Firebasse/Firebase.confige';
import { createContext } from 'react';
import { useState } from 'react';

const auth = getAuth(app)
export const AuthContext = createContext()
const Authprovider = ({ children }) => {

    const [answered, setAnswered] = useState(0)
    const [correctAnsCount, setCorrectAnsCount] = useState(0)
    const [wrongAnsCount, setWrongAnsCount] = useState(0)
    const [finalMark, setFinalMark] = useState(0)

    const authInfo = {
        correctAnsCount, setCorrectAnsCount,
        answered, setAnswered,
        wrongAnsCount, setWrongAnsCount,
        finalMark, setFinalMark,


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;
