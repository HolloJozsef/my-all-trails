import React from 'react';
import Modal from '../../../Core/Modal';

interface ConfirmationDialogProps {
  isOpen: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmButtonText?: string;
  cancelButtonText?: string;
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
  confirmButtonText = 'Confirm',
  cancelButtonText = 'Cancel',
}) => {
  const handleConfirmClick = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    onConfirm();
  };

  const handleCancelClick = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    onCancel();
  };

  return (
    <Modal isOpen={isOpen} onClose={onCancel}>
      <h3 className="text-lg font-bold mb-4 text-gray-800">{title}</h3>
      <p className="text-gray-700 mb-6">{message}</p>
      <div className="flex justify-end space-x-3">
        <button
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
          onClick={handleCancelClick}
        >
          {cancelButtonText}
        </button>
        <button
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75"
          onClick={handleConfirmClick}
        >
          {confirmButtonText}
        </button>
      </div>
    </Modal>
  );
};

export default ConfirmationDialog;