import React, { useState } from 'react';
import CreateNewGroupPopup from './CreateNewGroupPopup'; 
import ManageQuestionGroup from './ManageQuestionGroup';

const ManageUser = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showQuestionGroup, setShowQuestionGroup] = useState(false);

  const users = [
    { id: 'Header cell', surveyId: 'JSP/HRP/230124/001', role: 'Admin', createdBy: 'Arjun Patil' },
    { id: 'Header cell', surveyId: 'JSP/HRP/230124/001', role: 'Admin', createdBy: 'Arjun Patil' },
    { id: 'Header cell', surveyId: 'JSP/HRP/230124/001', role: 'Admin', createdBy: 'Arjun Patil' },
    { id: 'Header cell', surveyId: 'JSP/HRP/230124/001', role: 'Admin', createdBy: 'Arjun Patil' },
    { id: 'Header cell', surveyId: 'JSP/HRP/230124/001', role: 'User', createdBy: 'Arjun Patil' },
    { id: 'Header cell', surveyId: 'JSP/HRP/230124/001', role: 'User', createdBy: 'Arjun Patil' },
    { id: 'Header cell', surveyId: 'JSP/HRP/230124/001', role: 'User', createdBy: 'Arjun Patil' },
    { id: 'Header cell', surveyId: 'JSP/HRP/230124/001', role: 'User', createdBy: 'Arjun Patil' },
    { id: 'Header cell', surveyId: 'JSP/HRP/230124/001', role: 'Admin', createdBy: 'Arjun Patil' },
    { id: 'Header cell', surveyId: 'JSP/HRP/230124/001', role: 'Admin', createdBy: 'Arjun Patil' }
  ];

  const handleCreateGroupClick = () => {
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };
  const handleManageQuestionClick = () => {
    setShowQuestionGroup(true);
  };

  const handleQuestionGroupClose = () => {
    setShowQuestionGroup(false);
  };
  if (showQuestionGroup) {
    return <ManageQuestionGroup onClose={handleQuestionGroupClose} />;
  }

  return (
    <div style={styles.pageContainer}>
      <div style={styles.manageUser}>
        <h2 style={styles.title}>Manage User</h2>
        <button style={{ ...styles.btn, ...styles.btnCreateGroup }} onClick={handleCreateGroupClick}>
            Create new group
          </button>
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={{ ...styles.th, width: '25%' }}>User ID</th>
                <th style={{ ...styles.th, width: '30%' }}>Survey Id</th>
                <th style={{ ...styles.th, width: '13%' }}>Role</th>
                <th style={{ ...styles.th, width: '30%' }}>Created by</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td style={{ ...styles.td, width: '25%' }}>{user.id}</td>
                  <td style={{ ...styles.td, width: '30%' }}>{user.surveyId}</td>
                  <td style={{ ...styles.td, width: '23%' }}>{user.role}</td>
                  <td style={{ ...styles.td, width: '20%' }}>{user.createdBy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={styles.buttons}>
        <button style={{ ...styles.btn, ...styles.btnManageQuestion }} onClick={handleManageQuestionClick}>Manage Question </button>

        </div>
      </div>
      
      {isPopupOpen && <CreateNewGroupPopup onClose={handlePopupClose} />}
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
      manageUser: {
        width: '93%',
        margin: '20px auto',
        backgroundColor: '#FFFFFF',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        height: '100%', // Ensure the container takes full height
        display: 'flex',
        flexDirection: 'column',
        marginRight:'2%',
        marginLeft:'2%',
        marginTop:'2%',
      },
      title: {
        color: '#333',
        marginBottom: '0px',
       
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
      buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '10px',
        margin: '20px 0',
      },
      btn: {
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      },
      btnCreateGroup: {
        backgroundColor: '#007bff',
        color: 'white',
        marginLeft:'86%',
        marginTop:'-5%',
      },
      btnManageQuestion: {
        backgroundColor: '#28a745',
        color: 'white',
      },
    };
    
    export default ManageUser;
    






// import React, { useState } from 'react';
// import ManageQuestionGroupPopup from './CreateNewGroupPopup'; // Ensure correct path

// const ManageUser = () => {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   const users = [
//     { id: 'Header cell', surveyId: 'JSP/HRP/230124/001', role: 'Admin', createdBy: 'Arjun Patil' },
//     { id: 'Header cell', surveyId: 'JSP/HRP/230124/001', role: 'Admin', createdBy: 'Arjun Patil' },
//     { id: 'Header cell', surveyId: 'JSP/HRP/230124/001', role: 'Admin', createdBy: 'Arjun Patil' },
//     { id: 'Header cell', surveyId: 'JSP/HRP/230124/001', role: 'Admin', createdBy: 'Arjun Patil' },
//     { id: 'Header cell', surveyId: 'JSP/HRP/230124/001', role: 'User', createdBy: 'Arjun Patil' },
//     { id: 'Header cell', surveyId: 'JSP/HRP/230124/001', role: 'User', createdBy: 'Arjun Patil' },
//     { id: 'Header cell', surveyId: 'JSP/HRP/230124/001', role: 'User', createdBy: 'Arjun Patil' },
//     { id: 'Header cell', surveyId: 'JSP/HRP/230124/001', role: 'User', createdBy: 'Arjun Patil' },
//     { id: 'Header cell', surveyId: 'JSP/HRP/230124/001', role: 'Admin', createdBy: 'Arjun Patil' },
//     { id: 'Header cell', surveyId: 'JSP/HRP/230124/001', role: 'Admin', createdBy: 'Arjun Patil' }
//   ];

//   const handleCreateGroupClick = () => {
//     setIsPopupOpen(true);
//   };

//   const handlePopupClose = () => {
//     setIsPopupOpen(false);
//   };

//   return (
//     <div style={styles.pageContainer}>
//       <div style={styles.manageUser}>
//         <h2 style={styles.title}>Manage User</h2>
//         <button style={{ ...styles.btn, ...styles.btnCreateGroup }} onClick={handleCreateGroupClick}>
//             Create new group
//           </button>
//         <div style={styles.tableContainer}>
//           <table style={styles.table}>
//             <thead>
//               <tr>
//                 <th style={styles.th}>User ID</th>
//                 <th style={styles.th}>Survey Id</th>
//                 <th style={styles.th}>Role</th>
//                 <th style={styles.th}>Created by</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user, index) => (
//                 <tr key={index}>
//                   <td style={styles.td}>{user.id}</td>
//                   <td style={styles.td}>{user.surveyId}</td>
//                   <td style={styles.td}>{user.role}</td>
//                   <td style={styles.td}>{user.createdBy}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         <div style={styles.buttons}>
//           <button style={{ ...styles.btn, ...styles.btnManageQuestion }}>Manage Question</button>
//         </div>
//       </div>
      
//       {isPopupOpen && <ManageQuestionGroupPopup onClose={handlePopupClose} />}
//     </div>
//   );
// };

// const styles = {
//   pageContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     minHeight: '100vh',
//     backgroundColor: 'white',
    
//   },
//   manageUser: {
//     width: '93%',
//     margin: '20px auto',
//     backgroundColor: '#FFFFFF',
//     padding: '20px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     borderRadius: '8px',
//     height: '100%', // Ensure the container takes full height
//     display: 'flex',
//     flexDirection: 'column',
//     marginRight:'2%',
//     marginLeft:'2%',
//     marginTop:'2%',
//   },
//   title: {
//     color: '#333',
//     marginBottom: '0px',
   
//   },
//   tableContainer: {
//     margin: '20px 0',
    
//   },
//   table: {
//     width: '100%',
//     borderCollapse: 'collapse',
//     borderRadius: '8px',
//     overflow: 'hidden',
    
//   },
//   th: {
//     backgroundColor: '#f8f9fa',
//     color: '#333',
//     textAlign: 'left',
//     padding: '15px',
//   },
//   td: {
//     backgroundColor: '#FFF',
//     color: '#333',
//     textAlign: 'left',
//     padding: '10px',
//     borderBottom: '1px solid #dee2e6',
//   },
//   buttons: {
//     display: 'flex',
//     justifyContent: 'flex-end',
//     gap: '10px',
//     margin: '20px 0',
//   },
//   btn: {
//     padding: '10px 20px',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//   },
//   btnCreateGroup: {
//     backgroundColor: '#007bff',
//     color: 'white',
//     marginLeft:'86%',
//     marginTop:'-5%',
//   },
//   btnManageQuestion: {
//     backgroundColor: '#28a745',
//     color: 'white',
//     marginTop:'-1%',
//   },
// };

// export default ManageUser;







