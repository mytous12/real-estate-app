/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

// Lib imports
import { Modal, Button } from 'react-bootstrap';

const ConfirmModal = ({
  show, handleClose, handleConfirm, body, title, confirmButtonValue, closeButtonValue,
}) => (
  <Modal
    show={show}
    onHide={handleClose}
    backdrop="static"
    keyboard={false}
  >
    <Modal.Header closeButton>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {body}
    </Modal.Body>
    <Modal.Footer>
      <Button
        variant="secondary"
        onClick={handleClose}
      >
        {closeButtonValue}
      </Button>
      <Button
        variant="primary"
        onClick={handleConfirm}
      >
        {confirmButtonValue}

      </Button>
    </Modal.Footer>
  </Modal>
);

export default ConfirmModal;
