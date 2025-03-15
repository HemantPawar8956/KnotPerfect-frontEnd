import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../GlobalContext/GlobalContext";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

const Home = () => {
  let { userLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    userLogin(navigate);
  }, []);
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Home;
