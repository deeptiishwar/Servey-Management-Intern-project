
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import SurveyTable from './SurveyTable';
import ManageRole from './ManageRole';
import ManageUser from './ManageUser';
import ManageReport from './ManageReport';
import Dashboard from './Dashboard';


const MainLayout = () => (
  <div style={styles.body}>
    <div style={styles.content}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manage-surveys" element={<SurveyTable />} />
        <Route path="/manage-user" element={<ManageUser />} />
        <Route path="/manage-role" element={<ManageRole />} />
        <Route path="/manage-report" element={<ManageReport />} />
        <Route path="*" element={<Navigate to="/dashboard" />} /> {/* Default to Dashboard */}
      </Routes>
    </div>
  </div>
);

const styles = {
  body: {
    display: 'flex',
    flex: 1,
  },
  content: {
    flex: 1,
    padding: '20px',
  },
};

export default MainLayout;
