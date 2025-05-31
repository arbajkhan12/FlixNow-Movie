import React from 'react';

const Loading = () => {
  const styles = {
    wrapper: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: '#000',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 999,
      flexDirection: 'column',
      color: 'white',
    },
    spinner: {
      width: '60px',
      height: '60px',
      border: '6px solid rgba(255,255,255,0.3)',
      borderTop: '6px solid white',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
      marginBottom: '20px',
    },
    text: {
      fontSize: '1.5rem',
      letterSpacing: '1px',
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.spinner}></div>
      <div style={styles.text}>Loading...</div>
    </div>
  );
};

export default Loading;
