import React, { useEffect, useRef, useState } from "react";
import SectionLabel from "../../Components/Dashboard-Components/SectionLabel/SectionLabel";
import DataTable from "react-data-table-component";
import Card from "@mui/material/Card";
import users from "../../userData";
import classes from "./Users.module.css";
import { AiFillCaretDown } from "react-icons/ai";
import { CSVLink } from "react-csv";
import ImportUsersModal from "../../Components/Dashboard-Components/ImportUsersModal/ImportUsersModal";
import AddUserModal from "../../Components/Dashboard-Components/AddUserModal/AddUserModal";
import EditUserModal from "../../Components/Dashboard-Components/EditUserModal/EditUserModal";

const columns = [
  {
    id: 1,
    name: "Name",
    selector: (row) => row.name,
    reorder: true,
  },
  {
    id: 2,
    name: "Email",
    selector: (row) => row.email,
    reorder: true,
  },
  {
    id: 3,
    name: "Groups",
    selector: (row) => row.group,
    left: "true",
    reorder: true,
  },
  {
    id: 4,
    name: "Role",
    selector: (row) => row.role,
    left: "true",
    reorder: true,
  },
];

const FilterComponent = ({ filterText, onFilter }) => (
  <>
    <input
      id="search"
      type="search"
      placeholder="Search..."
      aria-label="Search Input"
      value={filterText}
      onChange={onFilter}
      className={classes.search_input}
    />
  </>
);

const Users = () => {
  const ref = useRef();
  const [filterText, setFilterText] = useState("");
  const [userModal, setUserModal] = useState(false);
  const [show, setShow] = useState(false);
  const [addUser, setAddUser] = useState(false);
  const [editUser, setEditUser] = useState(false);
  const filteredItems = users.filter(
    (item) =>
      item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (show && ref.current && !ref.current.contains(e.target)) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [show]);

  const handleSelect = () => {
    setUserModal(true);
    setShow(false);
  };

  const addUserModal = () => {
    setAddUser(true);
    setShow(false);
  };

  return (
    <>
      <SectionLabel label="PhishCode | Users" />
      <div className={classes.container}>
        <div className={classes.header_1}>
          <button>Azure AD Users</button>
          <button>Active Directory Users</button>
        </div>
        <div className={classes.header_2}>
          <div className={classes.left}>
            <FilterComponent
              onFilter={(e) => setFilterText(e.target.value)}
              filterText={filterText}
            />
            <select name="" id="" className={classes.select_btn}>
              <option value="All Users" selected="selected">
                All Users
              </option>
              <option value="Admin Users">Admin Users</option>
              <option value="Active Directory Users">
                Active Directory Users
              </option>
            </select>
          </div>
          <div className={classes.right}>
            <div className={classes.select_btn}>
              <p onClick={() => setShow(!show)}>
                Add <AiFillCaretDown />
              </p>
              {show && (
                <div className={classes.user_dropdown} ref={ref}>
                  <button onClick={addUserModal}>Add User</button>
                  <button onClick={handleSelect}>Import users from CSV</button>
                </div>
              )}
            </div>
            <button
              className={classes.editBtn}
              onClick={() => setEditUser(true)}
            >
              Edit
            </button>
            <button className={classes.deleteBtn}>Delete</button>
            <CSVLink data={users} filename={"Users.csv"} target="_blank">
              <button className={classes.csvBtn}>Export to CSV</button>
            </CSVLink>
          </div>
        </div>
        <Card>
          <DataTable
            columns={columns}
            data={filteredItems}
            subHeader
            selectableRows
            persistTableHead
            defaultSortFieldId={1}
            pagination
          />
        </Card>
      </div>
      {userModal && <ImportUsersModal setUserModal={setUserModal} />}
      {addUser && <AddUserModal setAddUser={setAddUser} />}
      {editUser && <EditUserModal setAddUser={setEditUser} />}
    </>
  );
};

export default Users;
