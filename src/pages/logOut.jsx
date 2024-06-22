import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const navigate = useNavigate();
  useEffect(() => {
    try {
      axios.get("http://localhost:3000/auth/logout", { withCredentials: true });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <h1>Logging out....</h1>
    </div>
  );
};

export default LogOut;
