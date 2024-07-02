import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CreateSurveyPopup = ({ onClose }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <button style={styles.closeButton} onClick={onClose}>×</button>
        <h2 style={styles.heading}>Create Survey</h2>
        <form style={styles.form}>
          <label style={styles.label}>Survey Title</label>
          <input type="text" placeholder="Survey title" style={styles.input} />
          
          <label style={styles.label}>Survey Description</label>
          <input type="text" placeholder="Survey description" style={styles.input} />
          
          <div style={styles.row}>
            <div style={styles.col}>
              <label style={styles.label}>Survey Start Date</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText="Select start date"
                dateFormat="MMMM d, yyyy"
                className="form-control"
                style={styles.input}
                dropdownMode="select"
              />
            </div>
            <div style={styles.col}>
              <label style={styles.label}>Survey End Date</label>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                placeholderText="Select end date"
                dateFormat="MMMM d, yyyy"
                className="form-control"
                style={styles.input}
                dropdownMode="select"
              />
            </div>
          </div>
          
          <div style={styles.row}>
            <div style={styles.col}>
              <label style={styles.label}>Survey Group</label>
              <select style={styles.input}>
                <option>Placeholder</option>
              </select>
            </div>
            <div style={styles.col}>
              <label style={styles.label}>Survey User Group</label>
              <select style={styles.input}>
                <option>Placeholder</option>
              </select>
            </div>
          </div>
          
          <div style={styles.buttonRow}>
            <button type="button" style={styles.saveButton}>Save</button>
            <button type="submit" style={styles.sendButton}>Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
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
  popup: {
    backgroundColor: '#FFF',
    borderRadius: '8px',
    padding: '20px',
    width: '400px',
    position: 'relative',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '5px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  input: {
    marginBottom: '15px',
    padding: '10px',
    fontSize: '14px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '100%',
    boxSizing: 'border-box',
  
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '10px',
    marginBottom: '15px',
  },
  col: {
    flex: 1,
  },
  buttonRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  saveButton: {
    backgroundColor: '#28a745',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    flex: 1,
    marginRight: '10px',
  },
  sendButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    flex: 1,
    marginLeft: '10px',
  },
};

export default CreateSurveyPopup;
