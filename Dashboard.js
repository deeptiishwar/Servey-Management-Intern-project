
import React from 'react';
import { Link } from 'react-router-dom';
import manageSurveyImg from './logo/manage-survey.png';
import manageUserImg from './logo/manage-user.png';
import manageRoleImg from './logo/manage-role.png';
import reportImg from './logo/reportt.png';


const Dashboard = () => (
  <div style={styles.parentContainer}>
    <div style={styles.dashboardContainer}>
      <h2 style={styles.title}>Dashboard</h2>
      <div style={styles.gridWrapper}>
        <div style={styles.gridContainer}>
          <div style={styles.gridItem}>
            <Link to="/manage-surveys" style={styles.link}>
              <img src={manageSurveyImg} alt="Manage Survey" style={styles.image} />
              <div style={styles.text}>Manage Survey</div>
            </Link>
          </div>
          <div style={styles.gridItem}>
            <Link to="/manage-user" style={styles.link}>
              <img src={manageUserImg} alt="Manage User & Question" style={styles.image} />
              <div style={styles.text}>Manage User & Question</div>
            </Link>
          </div>
          <div style={styles.gridItem}>
            <Link to="/manage-role" style={styles.link}>
              <img src={manageRoleImg} alt="Manage Role" style={styles.image} />
              <div style={styles.text}>Manage Role</div>
            </Link>
          </div>
          <div style={styles.gridItem}>
            <Link to="/manage-report" style={styles.link}>
              <img src={reportImg} alt="Manage Report" style={styles.image} />
              <div style={styles.text}>Report</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const styles = {
  parentContainer: {
    maxWidth: '1100px',
    height:'100%',
    padding: '1px',
  },
  dashboardContainer: {
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
  },
  title: {
    marginBottom: '2px',
  },
  gridWrapper: {
    display: 'flex',
    justifyContent: 'center',
    
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 2fr))',
    gap: '30px 100px',
    
    maxWidth: '600px', // Adjust as per your layout needs
   
    
  },
  gridItem: {
    textAlign: 'center',
    
  },
  link: {
    display: 'block',
    textDecoration: 'none',
    color: 'black',
  },
  image: {
    width: '200px', 
    height: 'auto', 
    borderRadius: '10px',
    
  },
  text: {
    marginTop: '10px',
    fontSize: '16px',
  },
};

export default Dashboard;
