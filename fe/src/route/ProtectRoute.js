import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContexts } from '../contexts/AuthContexts';
import Spinner from 'react-bootstrap/Spinner';

function ProtectRoute({children}) {
  const { authState: { authLoading, isAuthenticated } } = useContext(AuthContexts);

  if (authLoading) {
    return (
      <div className='spinner-container'>
        <Spinner animation='grow' variant='info' />
      </div>
    );
  }
  if(isAuthenticated === true){
    return (
      children
    );
  }
  else if(isAuthenticated === false){
    return(
      <Navigate to="/login" />
    );
  }
  else return null;
}

export default ProtectRoute;
