import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';

export default function Modal({ title, children, onClose }) {
  return createPortal(
    <>
      <div className='backdrop' onClick={onClose} />
      {/* <dialog open className="modal"> */}
      <motion.dialog
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 60 }}
        open
        className='modal'
      >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById('modal')
  );
}
