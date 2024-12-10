import React from 'react';
import classes from './Modal.module.css';

const Modal = ({ children }) => (
  <>
    <div className={classes.backdrop} />
    <dialog open className={classes.modal}>
      {children}
    </dialog>
  </>
);
Modal.propTypes = {
  children: React.ReactNode,
};

export default Modal;
