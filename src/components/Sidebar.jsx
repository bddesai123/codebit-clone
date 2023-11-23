import React from "react";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import {
  FaHouse,
  FaUsers,
  FaBusinessTime,
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

  const handleCollapse = () => {
    console.log("Button clicked!");
    setCollapsed(!collapsed);
    
  };

  return (
    <div className="flex min-h-screen  bg-black">
      
      <Sidebar
        toggled={collapsed}
        onToggle={handleCollapse}
        breakPoint="md"
        backgroundColor="#ffffff"
      >
        <div className="flex flex-row justify-center font-semibold items-center">
          Dashboard
          <button
            className=" fixed top-4 left-4 p-2 text-black"
            onClick={handleCollapse}
          >
            <FaAlignJustify size={24} />
          </button>
        </div>

        <Menu className="text-black">
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
            <MenuItem
              icon={<FaBusinessTime />}
              component={<Link to="/directincome" />}
            >
              DIRECT INCOME
            </MenuItem>
            <MenuItem
              icon={<FaBusinessTime />}
              component={<Link to="/levelincome" />}
            >
              LEVEL INCOME
            </MenuItem>
            <MenuItem
              icon={<FaBusinessTime />}
              component={<Link to="/autopoolincome" />}
            >
              AUTO POOL INCOME
            </MenuItem>
            <MenuItem
              icon={<FaBusinessTime />}
              component={<Link to="/workingincome" />}
            >
              WORKING INCOME
            </MenuItem>
            <MenuItem
              icon={<FaBusinessTime />}
              component={<Link to="/nonworkingincome" />}
            >
              NON WORKING INCOME
            </MenuItem>
            <MenuItem
              icon={<FaBusinessTime />}
              component={<Link to="/flushoutincome" />}
            >
              FLUSHOUT INCOME
            </MenuItem>
          </SubMenu>

          <SubMenu label="DEPOSIT" icon={<FaMoneyBill />}>
            <MenuItem icon={<FaMoneyBill />} component={<Link to="/deposit" />}>
              DEPOSIT
            </MenuItem>
            <MenuItem
              icon={<FaMoneyBill />}
              component={<Link to="/topuphistory" />}
            >
              DEPOSIT HISTORY
            </MenuItem>
          </SubMenu>
          <SubMenu label="FUNDS" icon={<FaMoneyBill1Wave />}>
            <MenuItem
              icon={<FaMoneyBill1Wave />}
              component={<Link to="/addfunds" />}
            >
              ADD FUND
            </MenuItem>
            <MenuItem
              icon={<FaMoneyBill1Wave />}
              component={<Link to="/fundhistory" />}
            >
              FUND HISTORY
            </MenuItem>
          </SubMenu>
          <SubMenu label="WITHDRAW" icon={<FaMoneyCheck />}>
            <MenuItem
              icon={<FaMoneyCheck />}
              component={<Link to="/withdraw" />}
              href="/"
            >
              WITHDRAW
            </MenuItem>
            <MenuItem
              icon={<FaMoneyCheck />}
              component={<Link to="/withdrawhistory" />}
              href="/"
            >
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
          <MenuItem component={<Link to="/home" />} icon={<FaRegCircleRight />}>
            LOGOUT
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};
export default Sidebars;
