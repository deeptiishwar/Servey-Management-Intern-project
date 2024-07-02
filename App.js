

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import LoginPage from './LoginPage';
import LandingPage from './LandingPage';
import SurveyTable from './SurveyTable';
import ManageRole from './ManageRole';
import ManageUser from './ManageUser';
import ManageReport from './ManageReport';
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';
import UserDashboard from './UserDashboard';
import BlankPage from './Questions';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <div style={styles.mainContent}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/user-dashboard" element={<UserDashboard />} />
            <Route path="*" element={<MainLayout />} />
            <Route path="/blank-page" element={<BlankPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

const MainLayout = () => (
  <div style={styles.body}>
    <Sidebar />
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
  mainContent: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  body: {
    display: 'flex',
    flex: 1,
  },
  content: {
    flex: 1,
    padding: '20px',
  },
};

export default App;



