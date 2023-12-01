import React from "react";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import {
  FaHouse,
  FaUsers,
  FaMoneyBill,
  FaHeadset,
  FaRegCircleRight,
} from "react-icons/fa6";

import { Link } from "react-router-dom";
import {  FaAlignJustify } from "react-icons/fa";

const Sidebars = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleActive = () => {
    
    setActive(!active);
  };

  const logout = async () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className="flex min-h-screen  bg-black">
      <Sidebar
        toggled={collapsed}
        onToggle={handleCollapse}
        breakPoint="md"
        collapsed={active}
        onCollapsed={handleActive}
        backgroundColor="#ffffff"
      >
        <div className="flex flex-row justify-center font-semibold items-center">
          Dashboard
          <button
            className=" fixed top-4 left-4 p-2 md:hidden text-white"
            type="button"
            onClick={handleCollapse}
          >
            <FaAlignJustify size={24} />
          </button>
        </div>

        <Menu className="text-black">
          <MenuItem
            icon={<FaHouse />}
            onClick={handleActive}
            component={<Link to="/dashboard" />}
          >
            HOME
          </MenuItem>
          {/* <SubMenu label="PROFILE" icon={<FaUserAlt />}>
            <MenuItem component={<Link to="/profile" />} icon={<FaUserAlt />}>
              PROFILE
            </MenuItem>
            <MenuItem
              component={<Link to="/changepassword" />}
              icon={<FaUserCheck size={20} />}
            >
              PROFILE CHANGE
            </MenuItem>
          </SubMenu> */}
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
          {/* <SubMenu label="MY BUSINESS" icon={<FaBusinessTime />}>
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
          </SubMenu> */}

          <SubMenu label="POOL-TREE" icon={<FaMoneyBill />}>
            <MenuItem icon={<FaMoneyBill />} component={<Link to="/#" />}>
              TREE 1
            </MenuItem>
            <MenuItem
              icon={<FaMoneyBill />}
              component={<Link to="/#" />}
            >
              TREE 2
            </MenuItem>
            <MenuItem
              icon={<FaMoneyBill />}
              component={<Link to="/#" />}
            >
              TREE 3
            </MenuItem>
            <MenuItem
              icon={<FaMoneyBill />}
              component={<Link to="/#" />}
            >
              TREE 4
            </MenuItem>
            <MenuItem
              icon={<FaMoneyBill />}
              component={<Link to="/#" />}
            >
              TREE 5
            </MenuItem>
            <MenuItem
              icon={<FaMoneyBill />}
              component={<Link to="/#" />}
            >
              TREE 6
            </MenuItem>
            <MenuItem
              icon={<FaMoneyBill />}
              component={<Link to="/#" />}
            >
              TREE 7
            </MenuItem>
            <MenuItem
              icon={<FaMoneyBill />}
              component={<Link to="/#" />}
            >
              TREE 8
            </MenuItem>
            <MenuItem
              icon={<FaMoneyBill />}
              component={<Link to="/#" />}
            >
              TREE 9
            </MenuItem>
            <MenuItem
              icon={<FaMoneyBill />}
              component={<Link to="/#" />}
            >
              TREE 10
            </MenuItem>
            <MenuItem
              icon={<FaMoneyBill />}
              component={<Link to="/#" />}
            >
              TREE 11
            </MenuItem>
            <MenuItem
              icon={<FaMoneyBill />}
              component={<Link to="/#" />}
            >
              TREE 12
            </MenuItem>
          </SubMenu>
          {/* <SubMenu label="FUNDS" icon={<FaMoneyBill1Wave />}>
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
          </SubMenu> */}
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
          <MenuItem onClick={logout} icon={<FaRegCircleRight />}>
            LOGOUT
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};
export default Sidebars;
