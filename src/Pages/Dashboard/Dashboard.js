import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../../Components/Dashboard-Components/Home/Home";
import SidebarPro from "../../Components/Dashboard-Components/SidebarPro/SidebarPro";
import Topbar from "../../Components/Dashboard-Components/Topbar/Topbar";
import Groups from "../Groups/Groups";
import Users from "../Users/Users";
import classes from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={classes.dashboard}>
      <Topbar />
      <div className={classes.dashboard_container}>
        <SidebarPro />
        <div className={classes.others}>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/administration/users" element={<Users />} />
            <Route path="/administration/groups" element={<Groups />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
