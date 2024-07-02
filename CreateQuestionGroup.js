import React, { useState } from 'react';
import Select from 'react-select';

const CreateQuestionGroup = ({ onClose }) => {
  const [selectedQuestions, setSelectedQuestions] = useState([]);

  const questions = [
    { value: 1, label: 'Sample Question 1' },
    { value: 2, label: 'Sample Question 2' },
    { value: 3, label: 'Sample Question 3' },
    { value: 4, label: 'Sample Question 4' },
  ];

  const handleSave = () => {
    // Add save logic here
    onClose();
  };

  const handleChange = (selectedOptions) => {
    setSelectedQuestions(selectedOptions);
  };

  return (
    <div style={styles.modalContent}>
      <button style={styles.modalCloseButton} onClick={onClose}>×</button>
      <h3 style={styles.modalTitle}>Create New Question Group</h3>
      <form style={styles.form}>
        <label style={styles.label}>
          Group Name
          <input type="text" placeholder="Group Name" style={styles.input} />
        </label>
        <label style={styles.label}>
          Group Id
          <input type="text" placeholder="Group Id" style={styles.input} />
        </label>
        <label style={styles.label}>
          Select Questions
          <Select
            isMulti
            options={questions}
            value={selectedQuestions}
            onChange={handleChange}
            styles={customSelectStyles}
          />
        </label>
        <button type="button" style={styles.saveButton} onClick={handleSave}>Save</button>
      </form>
    </div>
  );
};

const styles = {
  modalContent: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    width: '90%',
    maxWidth: '500px',
    position: 'relative',
  },
  modalCloseButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'none',
    border: 'none',
    fontSize: '1.5em',
    cursor: 'pointer',
  },
  modalTitle: {
    marginBottom: '1em',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '1em',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '8px',
    margin: '5px 0',
    boxSizing: 'border-box',
  },
  saveButton: {
    backgroundColor: '#4285F4',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
    alignSelf: 'flex-end',
  },
};

const customSelectStyles = {
  control: (provided) => ({
    ...provided,
    width: '100%',
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 9999,
  }),
};

export default CreateQuestionGroup;
