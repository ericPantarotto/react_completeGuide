import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Modal.module.css';

const Modal = ({ children }) => {
  const navigate = useNavigate();
  const closeHandler = () => navigate('..');

  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
};

Modal.propTypes = {
  children: React.ReactNode,
};

export default Modal;
