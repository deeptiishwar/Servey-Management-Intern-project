



import React, { useState } from 'react';

const initialRoles = [
  { id: '1', roleName: 'User', status: 'Active', createdBy: 'Arjun Patil' },
  { id: '2', roleName: 'User', status: 'Active', createdBy: 'Arjun Patil' },
  { id: '3', roleName: 'User', status: 'Active', createdBy: 'Arjun Patil' },
  { id: '4', roleName: 'Admin', status: 'Active', createdBy: 'Arjun Patil' },
  { id: '5', roleName: 'Auditor', status: 'Inactive', createdBy: 'Arjun Patil' },
  { id: '6', roleName: 'Admin', status: 'Inactive', createdBy: 'Arjun Patil' },
  { id: '7', roleName: 'Admin', status: 'Inactive', createdBy: 'Arjun Patil' },
  { id: '8', roleName: 'Admin', status: 'Inactive', createdBy: 'Header cell' },
  { id: '9', roleName: 'Auditor', status: 'Inactive', createdBy: 'Arjun Patil' },
  { id: '10', roleName: 'Auditor', status: 'Inactive', createdBy: 'Arjun Patil' },
];

const ManageRole = () => {
  const [roles, setRoles] = useState(initialRoles);
  const [selectedRoles, setSelectedRoles] = useState([]);

  const toggleSelectRole = (id) => {
    setSelectedRoles((prevSelectedRoles) =>
      prevSelectedRoles.includes(id)
        ? prevSelectedRoles.filter((roleId) => roleId !== id)
        : [...prevSelectedRoles, id]
    );
  };

  const updateStatus = (status) => {
    setRoles((prevRoles) =>
      prevRoles.map((role) =>
        selectedRoles.includes(role.id) ? { ...role, status } : role
      )
    );
    setSelectedRoles([]); // Clear selection after update
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.manageRole}>
        <h2 style={styles.title}>Manage Role</h2>
        <div style={styles.buttonContainer}>
          <button
            style={{ ...styles.updateButton, backgroundColor: 'green' }}
            onClick={() => updateStatus('Active')}
            disabled={selectedRoles.length === 0}
          >
            Set Active
          </button>
          <button
            style={{ ...styles.updateButton, backgroundColor: 'red' }}
            onClick={() => updateStatus('Inactive')}
            disabled={selectedRoles.length === 0}
          >
            Set Inactive
          </button>
        </div>
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={{ ...styles.th, width: '5%' }}></th>
                <th style={{ ...styles.th, width: '20%' }}>Role ID</th>
                <th style={{ ...styles.th, width: '30%' }}>Role Name</th>
                <th style={{ ...styles.th, width: '15%' }}>Status</th>
                <th style={{ ...styles.th, width: '30%' }}>Created by</th>
              </tr>
            </thead>
            <tbody>
              {roles.map((role) => (
                <tr key={role.id}>
                  <td style={{ ...styles.td, width: '5%' }}>
                    <input
                      type="checkbox"
                      checked={selectedRoles.includes(role.id)}
                      onChange={() => toggleSelectRole(role.id)}
                    />
                  </td>
                  <td style={{ ...styles.td, width: '20%' }}>{role.id}</td>
                  <td style={{ ...styles.td, width: '30%' }}>{role.roleName}</td>
                  <td style={{ ...styles.td, width: '15%' }}>{role.status}</td>
                  <td style={{ ...styles.td, width: '30%' }}>{role.createdBy}</td>
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
  manageRole: {
    width: '93%',
    margin: '20px auto',
    backgroundColor: '#FFFFFF',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    height: '100%', // Ensure the container takes full height
    display: 'flex',
    flexDirection: 'column',
    marginRight: '2%',
    marginLeft: '2%',
    marginTop: '2%',
  },
  title: {
    color: '#333',
    marginBottom: '0px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  updateButton: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    color: '#fff',
    cursor: 'pointer',
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

export default ManageRole;

