import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  backdropClass?: string;
  modalContentClass?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  backdropClass = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50',
  modalContentClass = 'bg-white p-6 rounded-lg shadow-xl max-w-sm w-full relative',
}) => {
  const modalRoot = useRef(document.getElementById('modal-root'));

  useEffect(() => {
    if (!modalRoot.current) {
      const div = document.createElement('div');
      div.id = 'modal-root';
      document.body.appendChild(div);
      modalRoot.current = div;
    }
  }, []);

  if (!isOpen || !modalRoot.current) {
    return null;
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div className={backdropClass} onClick={handleBackdropClick}>
      <div className={modalContentClass}>
        {children}
      </div>
    </div>,
    modalRoot.current
  );
};

export default Modal;