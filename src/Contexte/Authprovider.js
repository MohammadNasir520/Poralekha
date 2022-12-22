import React, { Children } from 'react';
import { getAuth } from "firebase/auth";
import app from '../Firebasse/Firebase.confige';
import { createContext } from 'react';

const auth = getAuth(app)
const AuthContext = createContext()
const Authprovider = ({ children }) => {
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;