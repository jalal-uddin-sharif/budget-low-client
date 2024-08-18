import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../../Firebase/firebase.config";
import toast from "react-hot-toast";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

//google login
const googleProvider = new GoogleAuthProvider()
const googleLogin = (navigate) =>{
signInWithPopup(auth, googleProvider)
.then(res => {setUser(res.user); toast.success("Login Success"); navigate("/")}).catch(error => toast.error("error"))
}


  const logOut = () => {
    signOut(auth)
      .then((res) => {
        toast.success("LogOut success");
      })
      .catch((error) => {
        toast.error("Error");
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, [user]);
  const authInfo = {
    user,
    setUser,
    createUser,
    loginUser,
    logOut, googleLogin
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
