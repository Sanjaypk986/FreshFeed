import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer';
import axios from 'axios';

const Root = () => {
  const [verify, setVerify] = useState(false);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const response = await axios.get('http://localhost:3000/auth/verify', { withCredentials: true });
        const verifyLoggedIn = response.data.verified;
        setVerify(verifyLoggedIn);
        console.log(verifyLoggedIn);
      } catch (error) {
        console.log(error);
      }
    };

    verifyUser();
  }, []);

  return (
    <div>
      <Header verify={verify} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
