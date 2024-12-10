import React from 'react';
import classes from './Modal.module.css';
import PropTypes from 'prop-types';

const Modal = ({ children, onClose }) => (
  <>
    <div className={classes.backdrop} onClick={onClose} />
    <dialog open className={classes.modal}>
      {children}
    </dialog>
  </>
);

Modal.propTypes = {
  children: React.ReactNode,
  onClose: PropTypes.func,
};

export default Modal;
