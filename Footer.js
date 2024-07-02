import React from 'react';

const Footer = () => (
  <div style={styles.footerContainer}>
    <p>© 2024 Survey Management System</p>
  </div>
);

const styles = {
  footerContainer: {
    backgroundColor: '#4285F4',
    color: '#FFF',
    padding: '10px',
    textAlign: 'center',
    position: 'fixed',
    width: '100%',
    bottom: 0,
  },
};

export default Footer;
