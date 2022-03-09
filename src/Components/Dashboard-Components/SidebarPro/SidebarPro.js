import React, { useState } from "react";
import classes from "./SidebarPro.module.css";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { FiHome, FiLogOut, FiSettings } from "react-icons/fi";
import {
  AiFillCaretRight,
  AiFillCaretLeft,
  AiFillCaretDown,
  AiFillFund,
} from "react-icons/ai";
import { CgTemplate } from "react-icons/cg";
import { RiUserFill } from "react-icons/ri";
import { SiAdguard } from "react-icons/si";
import { GoMailRead } from "react-icons/go";

import {
  MdOutlineAdminPanelSettings,
  MdAlternateEmail,
  MdOutlineVideoSettings,
  MdOutlineGroups,
  MdCampaign,
} from "react-icons/md";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";

const SidebarPro = () => {
  const [menuCollapse, setMenuCollapse] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(1);
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  const handleShow = () => {
    setIsOpen(!isOpen);
  };
  const handleShowOnAllLinks = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className={classes.header}>
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className={classes.closemenu} onClick={menuIconClick}>
              {menuCollapse ? <AiFillCaretRight /> : <AiFillCaretLeft />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem icon={<FiHome />} onClick={handleShowOnAllLinks}>
                <Link
                  to="/home"
                  className={isActive === 1 ? "active" : null}
                  onClick={() => setIsActive(1)}
                >
                  Home
                </Link>
              </MenuItem>
              <MenuItem icon={<AiFillFund />} onClick={handleShowOnAllLinks}>
                <Link
                  to="/dashboard"
                  className={isActive === 2 ? "active" : null}
                  onClick={() => setIsActive(2)}
                >
                  Dashboard
                </Link>
              </MenuItem>
              <MenuItem
                icon={<MdOutlineAdminPanelSettings />}
                onClick={handleShow}
                className="administration_link"
              >
                Administration <AiFillCaretDown />
              </MenuItem>

              {isOpen && (
                <div className={classes.subLinks}>
                  <MenuItem icon={<RiUserFill />}>
                    <Link
                      to="/administration/users"
                      className={isActive === 4 ? "active" : null}
                      onClick={() => setIsActive(4)}
                    >
                      Users
                    </Link>
                  </MenuItem>
                  <MenuItem icon={<MdOutlineGroups />}>
                    <Link
                      to="/administration/groups"
                      className={isActive === 5 ? "active" : null}
                      onClick={() => setIsActive(5)}
                    >
                      Groups
                    </Link>
                  </MenuItem>
                  <MenuItem icon={<SiAdguard />}>
                    <Link
                      to="/administration/roles"
                      className={isActive === 6 ? "active" : null}
                      onClick={() => setIsActive(6)}
                    >
                      Roles
                    </Link>
                  </MenuItem>
                </div>
              )}

              <MenuItem
                icon={<MdAlternateEmail />}
                onClick={handleShowOnAllLinks}
              >
                <Link
                  to="/email-setup"
                  className={isActive === 7 ? "active" : null}
                  onClick={() => setIsActive(7)}
                >
                  Email Setup
                </Link>
              </MenuItem>
              <MenuItem icon={<GoMailRead />} onClick={handleShowOnAllLinks}>
                <Link
                  to="/email-templates"
                  className={isActive === 8 ? "active" : null}
                  onClick={() => setIsActive(8)}
                >
                  Email Templates
                </Link>
              </MenuItem>
              <MenuItem icon={<CgTemplate />} onClick={handleShowOnAllLinks}>
                <Link
                  to="/website-templates"
                  className={isActive === 9 ? "active" : null}
                  onClick={() => setIsActive(9)}
                >
                  Website Templates
                </Link>
              </MenuItem>
              <MenuItem icon={<MdCampaign />} onClick={handleShowOnAllLinks}>
                <Link
                  to="/compaigns"
                  className={isActive === 10 ? "active" : null}
                  onClick={() => setIsActive(10)}
                >
                  Campaigns
                </Link>
              </MenuItem>
              <MenuItem
                icon={<MdOutlineVideoSettings />}
                onClick={handleShowOnAllLinks}
              >
                <Link
                  to="/learning-hub"
                  className={isActive === 11 ? "active" : null}
                  onClick={() => setIsActive(11)}
                >
                  Learning Hub
                </Link>
              </MenuItem>
              <MenuItem icon={<FiSettings />} onClick={handleShowOnAllLinks}>
                <Link
                  to="/setting"
                  className={isActive === 12 ? "active" : null}
                  onClick={() => setIsActive(12)}
                >
                  Setting
                </Link>
              </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default SidebarPro;
