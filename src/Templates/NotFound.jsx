import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      position: 'absolute',
      top: '60%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: '900px',
      width: '90%',
      maxHeight: '350px',
      height: '80vh',
      backgroundColor: '#000',
      color: 'red',
      fontSize: '4vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
      border: '2px solid #ccc',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      borderRadius: '16px',
      textAlign: 'center',
    },
    closeIcon: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      color: 'white',
      fontSize: '24px',
      cursor: 'pointer',
    }
  };

  return (
    <div style={styles.container}>
      <i
        className="ri-close-line"
        style={styles.closeIcon}
        onClick={() => navigate(-1)}
      ></i>
      Not Found
    </div>
  );
};

export default NotFound;
