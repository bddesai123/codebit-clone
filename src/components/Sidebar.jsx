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
import { FaUserAlt,FaUserCheck  } from "react-icons/fa";

const Sidebars = () => {

  return (
    <div className="h-screen  text-black flex ">
      <Sidebar backgroundColor="#ffff" className="" >
        <Menu iconShape="square">
          <MenuItem icon={<FaHouse />} component={<Link to="/dashboard" />}>
            HOME
          </MenuItem>
          <SubMenu label="PROFILE" icon={<FaUserAlt  />}>
            <MenuItem component={<Link to="/profile"/>} icon={<FaUserAlt />}>PROFILE</MenuItem>
            <MenuItem component={<Link to="/changepassword"/>} icon={<FaUserCheck size={20}/>}>PROFILE CHANGE</MenuItem>
          </SubMenu>
          <SubMenu label="MY TEAM" icon={<FaUsers size={20}/>}>
            <MenuItem href="/mydirectteam" icon={<FaUsers size={20}/>}>MY DIRECT TEAM</MenuItem>
            <MenuItem href="/mylevelteam"icon={<FaUsers size={20}/>}>MY LEVEL TEAM</MenuItem>
          </SubMenu>
          <SubMenu label="MY BUSINESS" icon={<FaBusinessTime />}>
            <MenuItem href="/directincome">DIRECT INCOME</MenuItem>
            <MenuItem href="/levelincome">LEVEL INCOME</MenuItem>
            <MenuItem href="/autopoolincome">AUTO POOL INCOME</MenuItem>
            <MenuItem href="/workingincome">WORKING INCOME</MenuItem>
            <MenuItem href="/nonworkingincome">NON WORKING INCOME</MenuItem>
            <MenuItem href="/flushoutincome">FLUSHOUT INCOME</MenuItem>
          </SubMenu>
          <SubMenu label="FLUSHOUT TRANSFER" icon={<FaDollarSign />}>
            <MenuItem href="/flushouttransfer">TRANSFER</MenuItem>
            <MenuItem href="/flushouttransferhistory">
              TRANSFER HISTORY
            </MenuItem>
          </SubMenu>
          <SubMenu label="TOP-UP" icon={<FaMoneyBill />}>
            <MenuItem href="/topup">TOP-UP</MenuItem>
            <MenuItem href="/topuphistory">TOP-UP HISTORY</MenuItem>
          </SubMenu>
          <SubMenu label="FUNDS" icon={<FaMoneyBill1Wave />}>
            <MenuItem href="/addfunds">ADD FUND</MenuItem>
            <MenuItem href="/fundhistory">FUND HISTORY</MenuItem>
          </SubMenu>
          <SubMenu label="WITHDRAW" icon={<FaMoneyCheck />}>
            <MenuItem href="/withdraw">WITHDRAW</MenuItem>
            <MenuItem href="/withdrawhistory">WITHDRAW HISTORY</MenuItem>
          </SubMenu>
          <SubMenu label="SUPPORT" icon={<FaHeadset />}>
            <MenuItem href="/support" icon={<FaHeadset />}>SUPPORT</MenuItem>
            <MenuItem href="/allsupport" icon={<FaHeadset />}>ALL SUPPORT</MenuItem>
          </SubMenu>
          <MenuItem icon={<FaRegCircleRight />}>LOGOUT</MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default Sidebars;
