import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ open, children, className = '' }) => {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }
    //NOTE: using a cleanup fx that will execute whenever this useEffect is about to run again i.e. when open value changes
    return () => modal.close();
  }, [open]);

  return createPortal(
    <dialog className={`modal ${className}`} ref={dialog}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
};

export default Modal;
