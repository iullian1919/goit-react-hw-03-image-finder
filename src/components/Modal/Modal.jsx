import React from 'react';
import classes from './Modal.module.css';

const Modal = ({ isOpen, onClose, imageUrl }) => {
  if (!isOpen) return null;

  return (
    <div className={classes.overlay} onClick={onClose}>
      <div className={classes.modal}>
        <img src={imageUrl} alt="" />
      </div>
    </div>
  );
};

export default Modal;
