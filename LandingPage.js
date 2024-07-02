import React from 'react';
import styled from 'styled-components';
import mainImage from './logo/main.png'; // Correctly import the image
import { useNavigate } from 'react-router-dom';

const styles = {
  pageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100%',
    backgroundColor: '#e3f2fd',
  },
  image: {
    width: '190%',
    maxWidth: '60%',
    borderRadius: '8px',
  
  },
  textContainer: {
    marginLeft: '20px',
    marginTop: '2vh',
  },
  title: {
    fontSize: '3rem',
    marginTop: '1vh',
  },
  buttons: {
    display: 'flex',
    gap: '10px',
  },
  dashboardButton: {
    padding: '10px 20px',
    marginLeft:'2%',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: 'white',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    '&:hover': {
      backgroundColor: '#f1f1f1',
    },
  },
};

const LandingPage = () => {
  const navigate = useNavigate();

  const handleAdminDashboardClick = () => {
    navigate('/dashboard');
  };

  const handleUserDashboardClick = () => {
    navigate('/user-dashboard');
  };

  return (
    <div style={styles.pageContainer}>
      <img src={mainImage} alt="Main" style={styles.image} /> {/* Image directly on the page */}
      <div style={styles.textContainer}>
        <h1 style={styles.title}>Survey Management System</h1> {/* Text container */}
        <div style={styles.buttons}>
          <button style={styles.dashboardButton} onClick={handleAdminDashboardClick}>
            Go to Admin Dashboard
          </button>
          <button style={styles.dashboardButton} onClick={handleUserDashboardClick}>
            Go to User Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;




