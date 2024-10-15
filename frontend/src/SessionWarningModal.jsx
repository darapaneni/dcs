import React from 'react';

/**
 * A modal component that warns the user when their session is about to expire.
 * Provides options to either continue the session or logout.
 * 
 * @component
 * @param {Object} props - Component props.
 * @param {Function} props.onContinue - Callback function to execute when the user chooses to continue the session.
 * @param {Function} props.onLogout - Callback function to execute when the user chooses to logout.
 * @returns {JSX.Element} The rendered modal component.
 */
const SessionWarningModal = ({ onContinue, onLogout }) => {
  return (
    <div style={modalStyle}>
      <div style={modalContentStyle}>
        <h2>Your session is about to expire!</h2>
        <p>Would you like to extend your session?</p>
        <button onClick={onContinue} style={buttonStyle}>Continue Session</button>
        <button onClick={onLogout} style={buttonStyle}>Logout</button>
      </div>
    </div>
  );
};

/**
 * Styles for the modal overlay.
 * 
 * @constant
 * @type {Object}
 */
const modalStyle = {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0,0,0,0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

/**
 * Styles for the modal content.
 * 
 * @constant
 * @type {Object}
 */
const modalContentStyle = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '8px',
  textAlign: 'center',
};

/**
 * Styles for the buttons within the modal.
 * 
 * @constant
 * @type {Object}
 */
const buttonStyle = {
  padding: '10px 20px',
  margin: '10px',
  cursor: 'pointer',
  backgroundColor: '#4caf50',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
};

export default SessionWarningModal;
