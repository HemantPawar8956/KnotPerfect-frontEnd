import React, { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

// Create Context
export const AuthContext = createContext();

const GlobalContext = ({ children }) => {
  const [user, setUser] = useState({});
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  // Logout Function
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setRole(null);
  };
  const userLogin = (navigate) => {
    let token = localStorage.getItem("token");

    if (token) {
      let user = jwtDecode(token);
      setUser({
        userName: user.userName,
        userId: user.userId,
        email: user.email,
        role: user.role,
      });
      console.log(token);
      setRole(user.role);
      setLoading(false);
      setTimeout(() => {
        navigate(`/home/${jwtDecode(user.role)?.role}`);
      }, 1500);
    } else {
      toast.error("session expired ! Please Login Again ..");
      navigate("/login");
    }
  };

  useEffect(() => {}, []);
  return (
    <AuthContext.Provider value={{ user, userLogin, role, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default GlobalContext;
