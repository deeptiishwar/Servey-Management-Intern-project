


import React, { useState } from 'react';
import CreateQuestionGroup from './CreateQuestionGroup';

const ManageQuestionGroup = ({ onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const questions = [
    { id: 1, questionId: 'JSP/HRP/001', question: 'Sample Question...', type: 'Objective', status: 'Active' },
    { id: 2, questionId: 'JSP/HRP/001', question: 'Sample Question...', type: 'Objective', status: 'Active' },
    { id: 3, questionId: 'JSP/HRP/001', question: 'Sample Question...', type: 'Objective', status: 'Inactive' },
    { id: 4, questionId: 'JSP/HRP/001', question: 'Sample Question...', type: 'Objective', status: 'Inactive' },
    { id: 5, questionId: 'JSP/HRP/001', question: 'Sample Question...', type: 'Subjective', status: 'Inactive' },
    { id: 6, questionId: 'JSP/HRP/001', question: 'Sample Question...', type: 'Subjective', status: 'Inactive' },
    { id: 7, questionId: 'JSP/HRP/001', question: 'Sample Question...', type: 'Subjective', status: 'Inactive' },
    { id: 8, questionId: 'JSP/HRP/001', question: 'Sample Question...', type: 'Objective', status: 'Inactive' },
    { id: 9, questionId: 'JSP/HRP/001', question: 'Sample Question...', type: 'Objective', status: 'Active' },
    { id: 10, questionId: 'JSP/HRP/001', question: 'Sample Question...', type: 'Objective', status: 'Active' },
  ];

  const handleCreateNewGroup = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.content}>
        <h3 style={styles.title}>Manage Question Group</h3>
        <button className="btn btn-info" style={styles.button} onClick={handleCreateNewGroup}>Create new question group</button>
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Sr. no.</th>
                <th style={styles.th}>Question Id</th>
                <th style={styles.th}>Question</th>
                <th style={styles.th}>Question Type</th>
                <th style={styles.th}>Status</th>
              </tr>
            </thead>
            <tbody>
              {questions.map((question, index) => (
                <tr key={question.id}>
                  <td style={styles.td}>{index + 1}</td>
                  <td style={styles.td}>{question.questionId}</td>
                  <td style={styles.td}>{question.question}</td>
                  <td style={styles.td}>{question.type}</td>
                  <td style={styles.td}>{question.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button className="btn btn-secondary" style={styles.backButton} onClick={onClose}>Back</button>
      </div>
      {isModalOpen && (
        <div style={styles.modalOverlay}>
          <CreateQuestionGroup onClose={handleCloseModal} />
        </div>
      )}
    </div>
  );
};

const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: 'white',
    minHeight: '100vh',
  },
  content: {
    width: '95%',
    backgroundColor: '#FFFFFF',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    height: '100%',
    marginTop: '1%',
  },
  title: {
    marginBottom: '-2%',
    color: '#333',
  },
  button: {
    marginBottom: '2%',
    backgroundColor: '#4285F4',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
    alignSelf: 'flex-end',
    marginLeft: '80%',
  },
  tableContainer: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '1%',
  },
  th: {
    backgroundColor: '#f8f9fa',
    padding: '10px',
    textAlign: 'left',
  },
  td: {
    padding: '10px',
    borderBottom: '1px solid #dee2e6',
  },
  backButton: {
    backgroundColor: '#28a745',
    color: 'white',
    marginTop: '1%',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
    marginLeft: '86.5%',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default ManageQuestionGroup;


