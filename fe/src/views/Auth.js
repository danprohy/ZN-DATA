import React from "react";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
import Spinner from "react-bootstrap/Spinner";
import { AuthContexts } from "../contexts/AuthContexts";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const Auth = ({ authRoute }) => {
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContexts);

  let body;

  // Neu dang xu ly dang nhap
  if (authLoading) {
    body = (
      <div className="d-flex justify-content-center mt-2">
        <Spinner animation="grow" variant="info"></Spinner>
      </div>
    );
  } else if (isAuthenticated) return <Navigate to="/dashboard" />;
  else {
    body = (
      <>
        {authRoute === "login" && <LoginForm />}
        {authRoute === "register" && <RegisterForm />}
      </>
    );
  }
  return (
    <div className="landing white--color">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1>Player Database</h1>
          <h4>Give you the details of players football</h4>
          {body}
        </div>
      </div>
    </div>
  );
};

export default Auth;
