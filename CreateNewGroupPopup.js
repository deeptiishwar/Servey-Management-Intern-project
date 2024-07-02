import React, { useState } from 'react';
import Select from 'react-select';

const CreateNewGroupPopup = ({ onClose }) => {
  // Dummy data for emails
  const emails = [
    { value: 1, label: 'user1@example.com' },
    { value: 2, label: 'user2@example.com' },
    { value: 3, label: 'user3@example.com' },
    { value: 4, label: 'user4@example.com' },
    { value: 5, label: 'user5@example.com' },
  ];

  const [selectedEmails, setSelectedEmails] = useState([]);

  const handleChange = (selectedOptions) => {
    setSelectedEmails(selectedOptions);
  };

  const handleSave = () => {
    // Handle saving selected emails
    console.log('Selected Emails:', selectedEmails);
    // Close the popup
    onClose();
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <button style={styles.closeButton} onClick={onClose}>×</button>
        <h3>Create New Group</h3>
        <form>
          <label style={styles.label}>
            Group Name
            <input type="text" placeholder="Group Name" style={styles.input} />
          </label>
          <label style={styles.label}>
            Group Id
            <input type="text" placeholder="Group Id" style={styles.input} />
          </label>
          <label style={styles.label}>
            Select Users
            <Select
              isMulti
              options={emails}
              value={selectedEmails}
              onChange={handleChange}
              styles={customSelectStyles}
            />
          </label>
          <button type="button" style={styles.saveButton} onClick={handleSave}>Save</button>
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
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    width: '300px',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    border: 'none',
    background: 'none',
    fontSize: '20px',
    cursor: 'pointer',
  },
  label: {
    display: 'block',
    marginBottom: '10px',
  },
  input: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginBottom: '10px',
  },
  saveButton: {
    backgroundColor: '#4285F4',
    color: '#fff',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
    marginTop: '10px',
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

export default CreateNewGroupPopup;
