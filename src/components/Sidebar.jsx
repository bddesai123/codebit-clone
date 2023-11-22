import React from "react";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import {
  FaHouse,
  FaUsers,
  FaBusinessTime,
  FaDollarSign,
  FaMoneyBill,
  FaMoneyBill1Wave,
  FaMoneyCheck,
  FaHeadset,
  FaRegCircleRight,
} from "react-icons/fa6";

import { Link } from "react-router-dom";
import { FaUserAlt, FaUserCheck, FaAlignJustify } from "react-icons/fa";

const Sidebars = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  const [toggled, setToggled] = React.useState(true);

  const handleCollapse = () => {
    console.log("Button clicked!");
    setCollapsed(!collapsed);
  };
  const handleToggle = () => {
    console.log("Button clicked toggled!");
    setToggled(!toggled);
  }
  
  return (
    <div className="flex min-h-screen text-black bg-white">
      <button
        className="lg:hidden fixed top-4 left-4 p-2 text-white"
        onClick={handleCollapse}
      >
        <FaAlignJustify size={24} />
      </button>
      <Sidebar
      
       toggled={collapsed}

       onToggle={handleCollapse}
       

       breakPoint="md"
       backgroundColor="#ffffff"
        
      >
        <div className="flex justify-center font-semibold items-center">
        
        Dashboard
      
        
        </div>
       
        <Menu  >
          <MenuItem icon={<FaHouse />} component={<Link to="/dashboard" />}>
            HOME
          </MenuItem>
          <SubMenu label="PROFILE" icon={<FaUserAlt />}>
            <MenuItem component={<Link to="/profile" />} icon={<FaUserAlt />}>
              PROFILE
            </MenuItem>
            <MenuItem
              component={<Link to="/changepassword" />}
              icon={<FaUserCheck size={20} />}
            >
              PROFILE CHANGE
            </MenuItem>
          </SubMenu>
          <SubMenu label="MY TEAM" icon={<FaUsers size={20} />}>
            <MenuItem
              component={<Link to="/mydirectteam" />}
              icon={<FaUsers size={20} />}
            >
              MY DIRECT TEAM
            </MenuItem>
            <MenuItem
              component={<Link to="/mylevelteam" />}
              icon={<FaUsers size={20} />}
            >
              MY LEVEL TEAM
            </MenuItem>
          </SubMenu>
          <SubMenu label="MY BUSINESS" icon={<FaBusinessTime />}>
            <MenuItem component={<Link to="/directincome" />}>
              DIRECT INCOME
            </MenuItem>
            <MenuItem component={<Link to="/levelincome" />}>
              LEVEL INCOME
            </MenuItem>
            <MenuItem component={<Link to="/autopoolincome" />}>
              AUTO POOL INCOME
            </MenuItem>
            <MenuItem component={<Link to="/workingincome" />}>
              WORKING INCOME
            </MenuItem>
            <MenuItem component={<Link to="/nonworkingincome" />}>
              NON WORKING INCOME
            </MenuItem>
            <MenuItem component={<Link to="/flushoutincome" />}>
              FLUSHOUT INCOME
            </MenuItem>
          </SubMenu>
          <SubMenu label="FLUSHOUT TRANSFER" icon={<FaDollarSign />}>
            <MenuItem component={<Link to="/flushouttransfer" />}>
              TRANSFER
            </MenuItem>
            <MenuItem component={<Link to="/flushouttransferhistory" />}>
              TRANSFER HISTORY
            </MenuItem>
          </SubMenu>
          <SubMenu label="TOP-UP" icon={<FaMoneyBill />}>
            <MenuItem component={<Link to="/topup" />}>TOP-UP</MenuItem>
            <MenuItem component={<Link to="/topuphistory" />}>
              TOP-UP HISTORY
            </MenuItem>
          </SubMenu>
          <SubMenu label="FUNDS" icon={<FaMoneyBill1Wave />}>
            <MenuItem component={<Link to="/addfunds" />}>ADD FUND</MenuItem>
            <MenuItem component={<Link to="/fundhistory" />}>
              FUND HISTORY
            </MenuItem>
          </SubMenu>
          <SubMenu label="WITHDRAW" icon={<FaMoneyCheck />}>
            <MenuItem component={<Link to="/withdraw" />} href="/">
              WITHDRAW
            </MenuItem>
            <MenuItem component={<Link to="/withdrawhistory" />} href="/">
              WITHDRAW HISTORY
            </MenuItem>
          </SubMenu>
          <SubMenu label="SUPPORT" icon={<FaHeadset />}>
            <MenuItem
              component={<Link to="/support" />}
              href="/"
              icon={<FaHeadset />}
            >
              SUPPORT
            </MenuItem>
            <MenuItem
              component={<Link to="/allsupport" />}
              href="/"
              icon={<FaHeadset />}
            >
              ALL SUPPORT
            </MenuItem>
          </SubMenu>
          <MenuItem
            component={<Link to="/login" />}
            icon={<FaRegCircleRight />}
          >
            LOGOUT
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};
export default Sidebars;