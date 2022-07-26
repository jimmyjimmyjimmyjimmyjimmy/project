// import * as React from 'react';
// import {
//   Card, CardBody, Col,
// } from 'reactstrap';
// import Panel from '@/shared/components/Panel';
// import { useTranslation } from 'react-i18next';
// import { Box, Tabs, Tab } from '@mui/material';
// import { TabContext, TabList, TabPanel } from '@mui/lab';
// import DailyChart from './DailyChart';
// import WeeklyChart from './WeeklyChart';
// import AnnuallyChart from './AnnuallyChart';

// export default function TabTab() {
//   const [value, setValue] = React.useState('1');
//   const { t } = useTranslation('common');
//   const handleChange = (event: React.SyntheticEvent, newValue: string) => {
//     setValue(newValue);
//   };

//   return (
//     <Col 
//       md={12} 
//       xl={12} 
//       lg={12} 
//       xs={12}
//     >
//       <CardBody className="dashboard__card-widget">
//         <Box sx={{ width: '100%', typography: 'body1' }}>
//           <TabContext value={value}>
//             <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//               <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
//                 <Tab label="Daily" value="1" />
//                 <Tab label="Weekly" value="2" />
//                 <Tab label="Annually" value="3" />
//               </TabList>
//             </Box>
//             <TabPanel value="1"><DailyChart /></TabPanel>
//             <TabPanel value="2"><WeeklyChart /></TabPanel>
//             <TabPanel value="3"><AnnuallyChart /></TabPanel>
//           </TabContext>
//         </Box>
//       </CardBody>
//     </Col>
//   );
// }
