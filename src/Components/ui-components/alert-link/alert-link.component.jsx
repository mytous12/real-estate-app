/* eslint-disable react/prop-types */

// Lib imports
import { Alert } from 'react-bootstrap';
import React, { forwardRef, useImperativeHandle, useState } from 'react';

const AlertLink = forwardRef(({
  message, alertVariant, link, linkMessage,
}, ref) => {
  const [show, setShow] = useState(false);

  const showAlert = () => {
    setShow(true);
  };

  useImperativeHandle(ref, () => ({
    showAlert,
  }));

  return (
    <>
      <Alert show={show} variant={alertVariant}>
        <Alert.Heading>{message}</Alert.Heading>
        {' '}
        {link
          ? <Alert.Link href={link}>{linkMessage}</Alert.Link>
          : null}
      </Alert>
    </>
  );
});

export default AlertLink;
