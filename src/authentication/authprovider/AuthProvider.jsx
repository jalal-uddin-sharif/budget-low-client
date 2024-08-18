import React, {createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../Firebase/firebase.config';
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
   const auth = getAuth(app)
   const [user, setUser] = useState({})
   console.log(user);
   const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
   }

   const loginUser = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
   }
    const authInfo = {
      user, setUser, createUser, loginUser
    }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;