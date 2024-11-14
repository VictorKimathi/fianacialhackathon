// "use client";
// import './styles.css';
// import { useState } from "react";
// import { ProSidebar, Menu, MenuItem } from "../../../../react-pro-sidebar";
// import { Box, IconButton, Typography, useTheme } from "@mui/material";
// import { useRouter } from "next/navigation";
// import { tokens } from "../../theme";
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
// import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
// import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
// import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
// import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
// import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
// import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
// import AssistantOutlinedIcon from '@mui/icons-material/AssistantOutlined';
// import avatae from "../../assets/avatae.png"
// import Image from "next/image";
// const Item = ({ title, to, icon, selected, setSelected }) => {
//   const theme = useTheme();
//   const router = useRouter();
//   const colors = tokens(theme.palette.mode);

//   return (
//     <MenuItem
//       active={selected === title}
//       style={{
//         color: colors.grey[100],
//       }}
//       onClick={() => {
//         setSelected(title);
//         router.push(to);
//       }}
//       icon={icon}
//     >
//       <Typography>{title}</Typography>
//     </MenuItem>
//   );
// };

// const Sideba = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const [selected, setSelected] = useState("Dashboard");

//   return (
// <Box
//   className="pro-ProSidebar"
//   sx={{
//     "& .pro-ProSidebar-inner": {
//       backgroundColor: `${colors.primary[600]} !important` , // Ensure this is a solid color
//     },
//     "& .pro-icon-wrapper": {
//       backgroundColor: "transparent !important", // Change to a solid color if needed
//     },
//     "& .pro-inner-item": {
//       padding: "5px 35px 5px 20px",
      
//     },
//     "& .pro-inner-item:hover": {
//       color:  "#868dfb !important",
//     },
//     "& .pro-menu-item.active": {
//       color: "#6870fa !important",
//       // Set a concrete active color
//     },
//   }}
// >

//       <ProSidebar  collapsed={isCollapsed}>
//         <Menu iconShape="square">
//           <MenuItem
//             onClick={() => setIsCollapsed(!isCollapsed)}
//             icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
//             style={{
//               margin: "10px 0 20px 0",
//               color: colors.grey[100],
//             }}
//           >
//             {!isCollapsed && (
//               <Box
//                 className="flex justify-between items-center ml-4"
//               >
//                 <Typography variant="h4"  color={colors.grey[100]}>
//                   FINACAI
//                 </Typography>
//                 <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
//                   <MenuOutlinedIcon />
//                 </IconButton>
//               </Box>
//             )}
//           </MenuItem>

//           {!isCollapsed && (
//             <Box className="mb-6 text-center">
          
//               <Image
//               alt="profile"
//               width={100}
//               height={100}
//               src={avatae}
//               className="rounded-full mx-auto cursor-pointer"
//               />
//               <Typography
//                 variant="h4"
//                 color={colors.grey[100]}
//                 fontWeight="bold"
//                 className="mt-2"
//               >
//                 Victor Codes
//               </Typography>
//               <Typography variant="h5" color={colors.greenAccent[500]}>
//                 User 
//               </Typography>
//             </Box>
//           )}

//           <Box className={`pl-${isCollapsed ? '0' : '4'}`}>
//             <Item
//               title="Dashboard"
//               to="/dashboard/"
//               icon={<HomeOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Item
//               title="FINAC AI"
//               to="/dashboard/scenes/ai"
//               icon={<AssistantOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Item
//               title="AI HUB"
//               to="/dashboard/scenes/hub"
//               icon={<AssistantOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//                <Item
//               title="myfinances"
//               to="/dashboard/scenes/myfinances"
//               icon={<AssistantOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Item
//               title="Reminder"
//               to="/dashboard/scenes/reminder"
//               icon={<AssistantOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Typography variant="h6" color={colors.grey[300]} className="my-4">
//               Data
//             </Typography>
//             {/* <Item
//               title="Input"
//               to="/dashboard/scenes/transactionform"
//               icon={<ReceiptOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             /> */}
//             <Item
//               title="Fraud Detections"
//               to="/dashboard/scenes/fraud"
//               icon={<ReceiptOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Typography variant="h6" color={colors.grey[300]} className="my-4">
//               Pages
//             </Typography>
//             <Item
//               title="Profile Form"
//               to="/dashboard/scenes/form"
//               icon={<PersonOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Item
//               title="Calendar"
//               to="/dashboard/scenes/calendar"
//               icon={<CalendarTodayOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             {/* <Item
//               title="FAQ Page"
//               to="/dashboard/scenes/faq"
//               icon={<HelpOutlineOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             /> */}
//             <Typography variant="h6" color={colors.grey[300]} className="my-4">
//               Charts
//             </Typography>
//           </Box>
//         </Menu>
//       </ProSidebar>
//     </Box>
//   );
// };

// export default Sideba;

import { useAuth } from '../../provider/auth-provider';


import { useState } from "react";
// import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { ProSidebar, Menu, MenuItem } from "../../../../react-pro-sidebar";

import { Box, IconButton, Typography, useTheme } from "@mui/material";
// import { Link } from "react-router-dom";
import "../../../../react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import AssistantOutlinedIcon from '@mui/icons-material/AssistantOutlined';
import { useRouter } from "next/navigation";


const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const router = useRouter();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => {
        setSelected(title);
        router.push(to);
      }}
      icon={icon}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};
const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  FINACAI
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/avatae.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Victor Codes
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  User 
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/dashboard"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
             <Item
              title="FINAC AI"
              to="/dashboard/scenes/ai"
              icon={<AssistantOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
     
         <Item
              title="AI HUB"
              to="/dashboard/scenes/hub"
              icon={<AssistantOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
                <Item
              title="Notifications"
              to="/dashboard/scenes/notifications"
              icon={<AssistantOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
                      <Item
              title="Manage Inputs"
              to="/dashboard/scenes/majorinputs"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            {/* <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}
            {/* <Item
              title="Manage Transactions"
              to="/transactions"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}
            {/* <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}
            {/* <Item
              title="Debts Management"
              to="/debts"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}
              {/* <Item
              title="Input"
              to="/transactionform"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
                  <Item
              title="Fraud Detections"
              to="/fraud"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/dashboard/scenes/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/dashboard/scenes/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/dashboard/scenes/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            {/* <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
