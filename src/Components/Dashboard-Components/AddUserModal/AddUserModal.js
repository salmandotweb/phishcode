import React from "react";
import classes from "./AddUserModal.module.css";

const AddUserModal = ({ setAddUser }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.overlay} onClick={() => setAddUser(false)}></div>
      <div className={classes.container}>
        <div className={classes.header}>Add User</div>
        <div className={classes.content_container}>
          <div className={classes.input_container}>
            <div className={classes.input}>
              <label htmlFor="name">First & Last Name</label>
              <input id="input" type="text" placeholder="First & Last Name" />
            </div>
            <div className={classes.input}>
              <label htmlFor="email">Email Address</label>
              <input id="email" type="email" placeholder="name@email.com" />
            </div>
          </div>
          <div className={classes.role}>
            <label htmlFor="role">Role</label>
            <select name="user" id="user">
              <option value="user">User</option>
            </select>
          </div>
          <span className={classes.addGroups}>Add to Groups</span>
          <div className={classes.groups_wrapper}>
            <div className={classes.groups}>
              <h3>Avalaible Groups</h3>
              <div className={classes.groups_container}>
                <input type="search" placeholder="Search" />
                <div className={classes.groups_header}>
                  <div>
                    <input type="checkbox" />
                    <p>Avalaible Groups</p>
                  </div>
                  <p className={classes.groups_number}>0</p>
                </div>
              </div>
            </div>
            <div className={classes.groups}>
              <h3>Assigned Groups</h3>
              <div className={classes.groups_container}>
                <input type="search" placeholder="Search" />
                <div className={classes.groups_header}>
                  <div>
                    <input type="checkbox" />
                    <p>Assigned Groups</p>
                  </div>
                  <p className={classes.groups_number}>0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.footer}>
          <button
            className={classes.cancelBtn}
            onClick={() => setAddUser(false)}
          >
            Cancel
          </button>
          <button>Save and Add Another</button>
          <button>Save</button>
        </div>
      </div>
    </div>
  );
};

export default AddUserModal;
