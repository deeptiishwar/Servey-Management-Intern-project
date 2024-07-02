// import React from 'react';
// import styled from 'styled-components';
// import { FaArrowRight } from 'react-icons/fa';

// const reports = [
//   { id: 'Header cell', surveyId: 'JSP/HRP/230124/001', surveyTitle: 'HRP-001', createdBy: 'Arjun Patil', activeTill: 'Header cell' },
//   { id: 'Header cell', surveyId: 'JSP/HRP/230124/001', surveyTitle: 'HRP-001', createdBy: 'Arjun Patil', activeTill: 'Header cell' },
//   // Add more report entries as needed
// ];

// const UserActiveSurvey = () => {
//   return (
//     <PageContainer>
//       <ManageReportContainer>
//         <Title>All Active Surveys</Title>
//         <TableContainer>
//           <StyledTable>
//             <thead>
//               <tr>
//                 <Th style={{ width: '10%' }}>Sr. no.</Th>
//                 <Th style={{ width: '20%' }}>Survey Id</Th>
//                 <Th style={{ width: '20%' }}>Survey title</Th>
//                 <Th style={{ width: '20%' }}>Created by</Th>
//                 <Th style={{ width: '20%' }}>Active till</Th>
//                 <Th style={{ width: '10%' }}>Action</Th>
//               </tr>
//             </thead>
//             <tbody>
//               {reports.map((report, index) => (
//                 <tr key={index}>
//                   <Td style={{ width: '10%' }}>{index + 1}</Td>
//                   <Td style={{ width: '20%' }}>{report.surveyId}</Td>
//                   <Td style={{ width: '20%' }}>{report.surveyTitle}</Td>
//                   <Td style={{ width: '20%' }}>{report.createdBy}</Td>
//                   <Td style={{ width: '20%' }}>{report.activeTill}</Td>
//                   <Td style={{ width: '10%' }}>
//                     <FaArrowRight />
//                   </Td>
//                 </tr>
//               ))}
//             </tbody>
//           </StyledTable>
//         </TableContainer>
//       </ManageReportContainer>
//     </PageContainer>
//   );
// };

// const PageContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   min-height: 100vh;
//   background-color: white;
// `;

// const ManageReportContainer = styled.div`
//   width: 93%;
//   margin: 20px auto;
//   background-color: #ffffff;
//   padding: 20px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   border-radius: 8px;
//   display: flex;
//   flex-direction: column;
// `;

// const Title = styled.h2`
//   color: #333;
//   margin-bottom: 20px;
// `;

// const TableContainer = styled.div`
//   margin: 20px 0;
// `;

// const StyledTable = styled.table`
//   width: 100%;
//   border-collapse: collapse;
//   border-radius: 8px;
//   overflow: hidden;
// `;

// const Th = styled.th`
//   background-color: #f8f9fa;
//   color: #333;
//   text-align: left;
//   padding: 10px;
// `;

// const Td = styled.td`
//   background-color: #fff;
//   color: #333;
//   text-align: left;
//   padding: 10px;
//   border-bottom: 1px solid #dee2e6;
// `;

// export default UserActiveSurvey;





import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: 'white',
  },
  manageReportContainer: {
    width: '93%',
    margin: '20px auto',
    backgroundColor: '#ffffff',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    color: '#333',
    marginBottom: '20px',
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
    backgroundColor: '#fff',
    color: '#333',
    textAlign: 'left',
    padding: '10px',
    borderBottom: '1px solid #dee2e6',
  },
};

const reports = [
  { id: 'Header cell', surveyId: 'JSP/HRP/230124/001', surveyTitle: 'HRP-001', createdBy: 'Arjun Patil', duration: 'Header cell' },
  { id: 'Header cell', surveyId: 'JSP/HRP/230124/001', surveyTitle: 'HRP-001', createdBy: 'Arjun Patil', duration: 'Header cell' },
  { id: 'Header cell', surveyId: 'JSP/HRP/230124/001', surveyTitle: 'HRP-001', createdBy: 'Arjun Patil', duration: 'Header cell' },
  
  // Add more reports here as needed
];

const UserActiveSurvey = () => {
  const navigate = useNavigate();

  const handleActionClick = () => {
    navigate('/blank-page');
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.manageReportContainer}>
        <h2 style={styles.title}>All Active Surveys</h2>
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Sr. no.</th>
                <th style={styles.th}>Survey Id</th>
                <th style={styles.th}>Survey title</th>
                <th style={styles.th}>Created by</th>
                <th style={styles.th}>Active till</th>
                <th style={styles.th}>Action</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report, index) => (
                <tr key={index}>
                  <td style={styles.td}>{index + 1}</td>
                  <td style={styles.td}>{report.surveyId}</td>
                  <td style={styles.td}>{report.surveyTitle}</td>
                  <td style={styles.td}>{report.createdBy}</td>
                  <td style={styles.td}>{report.duration}</td>
                  <td style={styles.td}>
                    <FaArrowRight onClick={handleActionClick} style={{ cursor: 'pointer' }} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserActiveSurvey;
