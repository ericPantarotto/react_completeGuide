import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ open, children }) => {
  const dialog = useRef();

  useEffect(() => {
    open && dialog.current.showModal();
    !open && dialog.current.close();
  }, []);

  return createPortal(
    <dialog className='modal' ref={dialog} open={open}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
};

export default Modal;
