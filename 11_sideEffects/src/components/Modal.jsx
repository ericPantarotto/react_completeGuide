import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ open, children, onClose }) => {
  const dialog = useRef();

  useEffect(() => {
    open && dialog.current.showModal();
    !open && dialog.current.close();
  }, [open]);

  return createPortal(
    <dialog className='modal' ref={dialog} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
};

export default Modal;
