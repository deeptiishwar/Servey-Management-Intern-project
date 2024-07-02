



import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div style={styles.sidebarContainer}>
      <ul style={styles.sidebarList}>
        <li
          style={{ ...styles.sidebarItem, backgroundColor: hoveredItem === 0 ? '#C7E1F3' : 'inherit' }}
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/dashboard" style={styles.link}>Dashboard</Link>
        </li>
        <li
          style={{ ...styles.sidebarItem, backgroundColor: hoveredItem === 1 ? '#C7E1F3' : 'inherit' }}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/manage-surveys" style={styles.link}>Manage Surveys</Link>
        </li>
        <li
          style={{ ...styles.sidebarItem, backgroundColor: hoveredItem === 2 ? '#C7E1F3' : 'inherit' }}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/manage-user" style={styles.link}>Manage User and Question</Link>
        </li>
        <li
          style={{ ...styles.sidebarItem, backgroundColor: hoveredItem === 3 ? '#C7E1F3' : 'inherit' }}
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/manage-role" style={styles.link}>Manage Role</Link>
        </li>
        <li
          style={{ ...styles.sidebarItem, backgroundColor: hoveredItem === 4 ? '#C7E1F3' : 'inherit' }}
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/manage-report" style={styles.link}>Reports</Link>
        </li>
        <li
          style={{ ...styles.sidebarItem, backgroundColor: hoveredItem === 5 ? '#C7E1F3' : 'inherit' }}
          onMouseEnter={() => handleMouseEnter(5)}
          onMouseLeave={handleMouseLeave}
        >
        </li>
      </ul>
    </div>
  );
};

const styles = {
  sidebarContainer: {
    width: '200px',
    backgroundColor: '#f8f9fa',
    padding: '20px',
    boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
  },
  sidebarList: {
    listStyleType: 'none',
    padding: '0',
  },
  sidebarItem: {
    marginTop:'15%',
    marginBottom: '5px',
    padding: '5%',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  link: {
    textDecoration: 'none',
    color: '#343a40',
    display: 'block',
    padding: '10px',
  },
};

export default Sidebar;
