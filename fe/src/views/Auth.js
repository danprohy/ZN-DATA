import React from 'react'
import LoginForm from '../components/auth/LoginForm';
import RegisterForm from '../components/auth/RegisterForm';

const Auth = ({authRoute}) => {
  let body;

  body = (
    <>
      Welcome to My Database
      {authRoute === 'login' && <LoginForm /> }
      {authRoute === 'register' && <RegisterForm />}

    </>
  );

  return (
    <div className='landing white--color'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1>Player Database</h1>
          <h4>Give you the details of players football</h4>
          {body}
        </div>
      </div>
    </div>
  );
}

export default Auth