import React from "react";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import {
  FaHouse,
  FaRegUser,
  FaUsers,
  FaBusinessTime,
  FaDollarSign,
  FaMoneyBill,
  FaMoneyBill1Wave,
  FaMoneyCheck,
  FaHeadset,
  FaRegCircleRight,
} from "react-icons/fa6";
const Sidebars = () => {
  return (
    <div >
      
      <Sidebar className="bg-gradient-to-r from-blue-500 via-black to-indigo-900 " style={
        BackgroundColor: "black",
      }>
        <Menu>
          <MenuItem icon={<FaHouse />}> HOME </MenuItem>
          <SubMenu label="PROFILE" icon={<FaRegUser />}>
            <MenuItem>PROFILE </MenuItem>
            <MenuItem>PROFILE CHANGE</MenuItem>
          </SubMenu>
          <SubMenu label="MY TEAM" icon={<FaUsers />}>
            <MenuItem>MY DIRECT TEAM</MenuItem>
            <MenuItem>MY LEVEL TEAM</MenuItem>
          </SubMenu>

          <SubMenu label="MY BUSINESS" icon={<FaBusinessTime />}>
            <MenuItem>DIRECT INCOME</MenuItem>
            <MenuItem>LEVEL INCOME</MenuItem>
            <MenuItem>AUTO POOL INCOME</MenuItem>
            <MenuItem>WORKING INCOME</MenuItem>
            <MenuItem>NON WORKING INCOME</MenuItem>
            <MenuItem>FLUSHOUT INCOME</MenuItem>
          </SubMenu>

          <SubMenu label="FLUSHOUT TRANSFER" icon={<FaDollarSign />}>
            <MenuItem>TRANSFER</MenuItem>
            <MenuItem>TRANSFER HISTORY</MenuItem>
          </SubMenu>

          <SubMenu label="TOP-UP" icon={<FaMoneyBill />}>
            <MenuItem>TOP-UP</MenuItem>
            <MenuItem>TOP-UP HISTORY</MenuItem>
          </SubMenu>
          <SubMenu label="FUND" icon={<FaMoneyBill1Wave />}>
            <MenuItem>FUND</MenuItem>
            <MenuItem>FUND HISTORY</MenuItem>
          </SubMenu>
          <SubMenu label="WITHDRAW" icon={<FaMoneyCheck />}>
            <MenuItem>WITHDRAW</MenuItem>
            <MenuItem>WITHDRAW HISTORY</MenuItem>
          </SubMenu>
          <SubMenu label="SUPPORT" icon={<FaHeadset />}>
            <MenuItem>SUPPORT</MenuItem>
            <MenuItem>ALL SUPPORT</MenuItem>
          </SubMenu>

          <MenuItem icon={<FaRegCircleRight />}>LOGOUT</MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default Sidebars;
