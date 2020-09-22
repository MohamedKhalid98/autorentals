import React from 'react';
import './Modal.scss';
const Modal = ({ header, footer, show, closeModal, children }) => {
    return (show ? <div className="custom-modal">
        <div className="custom-modal-header">{header} <button onClick={closeModal}>&times;</button></div>
        <div className="custom-modal-body">
            {children}
        </div>
    </div> : null);
}

export default Modal;