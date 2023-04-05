import React from 'react';
import AlertMessage from 'react-bootstrap/Alert';

const Alert = ({info}) => {
  return info === null ? null : (
    <AlertMessage variant={info.type}>{info.message}</AlertMessage>
  );
}

export default Alert;