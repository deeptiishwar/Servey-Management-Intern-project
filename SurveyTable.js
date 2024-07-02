import React, { useState } from 'react';
import editIcon from './logo/edit.png';
import viewIcon from './logo/view.png'; 
import CreateSurveyPopup from './CreateSurveyPopup'; // Ensure correct path

const SurveyTable = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const surveys = [
    { id: 1, surveyId: 'JSP/HRP/230124/001', title: 'HRP-001', creator: 'Arjun Patil', duration: 'Column title' },
    { id: 2, surveyId: 'JSP/HRP/230624/002', title: 'HRP-002', creator: 'Amit Singh', duration: 'Column title' },
    { id: 3, surveyId: 'JSP/PUR/230124/001', title: 'PUR-001', creator: 'Arjun Patil', duration: 'Column title' },
    { id: 4, surveyId: 'JSP/ITC/220124/012', title: 'ITC-012', creator: 'Amit Singh', duration: 'Column title' },
  ];

  const handleCreateSurveyClick = () => {
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  return (
    <div style={styles.pageContainer}>
      
      <div style={styles.content}>
        <div style={styles.container}>
          <div style={styles.mainContent}>
            <div style={styles.header}>
              <h3 style={styles.title}>Manage Survey</h3>
              <button className="btn btn-info" style={styles.button} onClick={handleCreateSurveyClick}>Create Survey</button>
            </div>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Sr. no.</th>
                  <th style={styles.th}>Survey Id</th>
                  <th style={styles.th}>Survey title</th>
                  <th style={styles.th}>Created by</th>
                  <th style={styles.th}>Duration</th>
                  <th style={styles.th}>Action</th>
                </tr>
              </thead>
              <tbody>
                {surveys.map((survey, index) => (
                  <tr key={survey.id}>
                    <td style={styles.td}>{index + 1}</td>
                    <td style={styles.td}>{survey.surveyId}</td>
                    <td style={styles.td}>{survey.title}</td>
                    <td style={styles.td}>{survey.creator}</td>
                    <td style={styles.td}>{survey.duration}</td>
                    <td style={styles.td}>
                      <img src={editIcon} alt="Edit" style={styles.icon} />
                      <img src={viewIcon} alt="View" style={styles.icon} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {isPopupOpen && <CreateSurveyPopup onClose={handlePopupClose} />}
    </div>
  );
};

const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh', // Ensures the page takes at least the full viewport height
    backgroundColor: '#F0F2F5', // Example background color for the page
  },
  content: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#FFFFFF', // Example background color for the content area
  },
  container: {
    flex: 1,
    padding: '20px',
  },
  mainContent: {
    backgroundColor: '#FFFFFF', // Example background color for the main content
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    height: '100%',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  title: {
    color: '#333',
    marginBottom: '0px',
  },
  button: {
    width: '120px',
    height: '30px',
    backgroundColor: '#4285F4',
    border: 'none',
    borderRadius: '5px',
    color: '#fff',
    cursor: 'pointer',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    borderRadius: '8px',
    overflow: 'hidden',
    height: '50%',
  },
  th: {
    backgroundColor: '#f8f9fa',
    color: '#333',
    textAlign: 'left',
    padding: '10px',
  },
  td: {
    backgroundColor: '#FFF',
    color: '#333',
    textAlign: 'left',
    padding: '10px',
    borderBottom: '1px solid #dee2e6',
  },
  icon: {
    width: '20px',
    height: '20px',
    margin: '0 5px',
    cursor: 'pointer',
  },
};

export default SurveyTable;
