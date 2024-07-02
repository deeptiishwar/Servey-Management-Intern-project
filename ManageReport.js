import React from 'react';
import { FaDownload } from 'react-icons/fa';

const reports = [
  { id: 'Header cell', surveyId: 'JSP/HRP/230124/001', surveyTitle: 'HRP-001', createdBy: 'Arjun Patil', duration: 'Header cell' },
  { id: 'Header cell', surveyId: 'JSP/HRP/230124/001', surveyTitle: 'HRP-001', createdBy: 'Arjun Patil', duration: 'Header cell' },
  { id: 'Header cell', surveyId: 'JSP/HRP/230124/001', surveyTitle: 'HRP-001', createdBy: 'Arjun Patil', duration: 'Header cell' },
  { id: 'Header cell', surveyId: 'JSP/HRP/230124/001', surveyTitle: 'HRP-001', createdBy: 'Arjun Patil', duration: 'Header cell' },
  { id: 'Header cell', surveyId: 'JSP/HRP/230124/001', surveyTitle: 'HRP-001', createdBy: 'Arjun Patil', duration: 'Header cell' },
  { id: 'Header cell', surveyId: 'JSP/HRP/230124/001', surveyTitle: 'HRP-001', createdBy: 'Arjun Patil', duration: 'Header cell' },
  { id: 'Header cell', surveyId: 'JSP/HRP/230124/001', surveyTitle: 'HRP-001', createdBy: 'Arjun Patil', duration: 'Header cell' },
  { id: 'Header cell', surveyId: 'JSP/HRP/230124/001', surveyTitle: 'HRP-001', createdBy: 'Arjun Patil', duration: 'Header cell' },
  { id: 'Header cell', surveyId: 'JSP/HRP/230124/001', surveyTitle: 'HRP-001', createdBy: 'Arjun Patil', duration: 'Header cell' },
  { id: 'Header cell', surveyId: 'JSP/HRP/230124/001', surveyTitle: 'HRP-001', createdBy: 'Arjun Patil', duration: 'Header cell' },
];

const ManageReport = () => {
  return (
    <div style={styles.pageContainer}>
      <div style={styles.manageReport}>
        <h2 style={styles.title}>Report</h2>
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={{ ...styles.th, width: '10%' }}>Sr. no.</th>
                <th style={{ ...styles.th, width: '20%' }}>Survey Id</th>
                <th style={{ ...styles.th, width: '20%' }}>Survey title</th>
                <th style={{ ...styles.th, width: '20%' }}>Created by</th>
                <th style={{ ...styles.th, width: '20%' }}>Duration</th>
                <th style={{ ...styles.th, width: '10%' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report, index) => (
                <tr key={index}>
                  <td style={{ ...styles.td, width: '10%' }}>{index + 1}</td>
                  <td style={{ ...styles.td, width: '20%' }}>{report.surveyId}</td>
                  <td style={{ ...styles.td, width: '20%' }}>{report.surveyTitle}</td>
                  <td style={{ ...styles.td, width: '20%' }}>{report.createdBy}</td>
                  <td style={{ ...styles.td, width: '20%' }}>{report.duration}</td>
                  <td style={{ ...styles.td, width: '10%' }}>
                    <FaDownload />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: 'white',
  },
  manageReport: {
    width: '93%',
    margin: '20px auto',
    backgroundColor: '#FFFFFF',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    color: '#333',
    marginBottom: '20px',
  },
  tableContainer: {
    margin: '20px 0',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    borderRadius: '8px',
    overflow: 'hidden',
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
};

export default ManageReport;
