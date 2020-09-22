import React from 'react';
const Backdrop = ({ show, clicked }) => {
    const styles = {
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        zIndex: '9'
    };
    return (
        show ? <div style={styles} onClick={clicked}></div> : null
    );
}

export default Backdrop;