import React from 'react';

/**
 * A modal component that displays a warning message when the user's session is about to expire.
 * It provides options to either continue the session or log out.
 *
 * @component
 * @param {Object} props - The props for the component.
 * @param {Function} props.onContinue - Callback function to be executed when the "Continue Session" button is clicked.
 * @param {Function} props.onLogout - Callback function to be executed when the "Logout" button is clicked.
 *
 * @example
 * // Usage of SessionWarningModal
 * const handleContinue = () => {
 *   // Logic to extend the session
 * };
 *
 * const handleLogout = () => {
 *   // Logic to log the user out
 * };
 *
 * <SessionWarningModal onContinue={handleContinue} onLogout={handleLogout} />
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

const modalContentStyle = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '8px',
  textAlign: 'center',
};

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
