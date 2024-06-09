import { useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import { auth } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
//   register a user 
  const registerUserWithEmailAndPassword = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };
// log in a user 
  const loggedInWithEmailAndPassword = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };
//   log out a use 
const loggedOut = async() =>{
    return await signOut(auth);
}
 // observer to observe user is logged in or not 
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(user);
      } else {
        setIsLoggedIn(null);
      }
    });

    // clean up 
    return ()=> unSubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{ registerUserWithEmailAndPassword, loggedInWithEmailAndPassword,loggedOut, isLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
