/* eslint-disable react/prop-types */

// Alert imports
import { Alert } from 'react-bootstrap';
import React, { forwardRef, useImperativeHandle, useState } from 'react';

const AlertDismissible = forwardRef(({ message, alertVariant }, ref) => {
  const [show, setShow] = useState(false);
  const [alertMessage, setAlertMessage] = useState(message);

  const showAlert = () => {
    setShow(true);
  };

  const setDisplayMessage = (displayMessage) => {
    setAlertMessage(displayMessage);
  };

  useImperativeHandle(ref, () => ({
    showAlert,
    setDisplayMessage,
  }));

  return (
    <>
      <Alert
        show={show}
        variant={alertVariant}
        onClose={() => setShow(false)}
        dismissible
      >
        <Alert.Heading>{alertMessage}</Alert.Heading>
      </Alert>
    </>
  );
});

export default AlertDismissible;
