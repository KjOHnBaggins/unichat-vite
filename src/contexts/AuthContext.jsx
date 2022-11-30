import { useContext, useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import firebaseAuth from "../firebase";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const history = useNavigate();

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
      if (user) history("/chats");
    });
  }, [user, history]);

  const value = { user };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
