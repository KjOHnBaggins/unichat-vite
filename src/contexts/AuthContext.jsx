import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  // const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  // const history = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(firebaseAuth, (user) => {
      setUser(user);
      // setLoading(false);
      // if (user) history("/chats");
    });
    return () => {
      unsub();
    };
  }, [user]);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
