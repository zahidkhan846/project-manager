import React, { createContext, useState, useEffect } from "react";
import { auth } from "../config/firebaseConfig";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const signUp = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const signIn = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const signOutUser = () => {
    return auth.signOut();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  });

  const value = {
    currentUser,
    signUp,
    signIn,
    signOutUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
