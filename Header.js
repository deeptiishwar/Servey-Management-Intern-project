import React from 'react';
import jindalLogo from './logo/jindal_log.png'; // Update with correct path

const Header = () => (
  <header style={styles.headerContainer}>
    <img src={jindalLogo} alt="Jindal Power" style={styles.logo} />
    
  </header>
);

const styles = {
  headerContainer: {
    backgroundColor: '#C7E1F3',
    color: '#FFF',
    padding: '16px',
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
  },
  logo: {
    height: '50px',
    width: 'auto',
    marginRight: '10px',
    marginLeft:'2%',
    marginTop:'1%',
  },
};

export default Header;



// import React from 'react';
// import { Route, Routes, Navigate } from 'react-router-dom';
// import Sidebar from './Sidebar';
// import SurveyTable from './SurveyTable';
// import ManageRole from './ManageRole';
// import ManageUser from './ManageUser';
// import ManageReport from './ManageReport';
// import Dashboard from './Dashboard';

// const MainLayout = () => (
//   <div style={styles.body}>
//     <Sidebar />
//     <div style={styles.content}>
//       <Routes>
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/manage-surveys" element={<SurveyTable />} />
//         <Route path="/manage-user" element={<ManageUser />} />
//         <Route path="/manage-role" element={<ManageRole />} />
//         <Route path="/manage-report" element={<ManageReport />} />
       
//       </Routes>
//     </div>
//   </div>
// );

// const styles = {
//   body: {
//     display: 'flex',
//     flex: 1,
//   },
//   content: {
//     flex: 1,
//     padding: '20px',
//   },
// };

// export default MainLayout;