import React from "react";
import classes from "./AddGroupModal.module.css";

const AddGroupModal = ({ setGroup }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.overlay} onClick={() => setGroup(false)}></div>
      <div className={classes.container}>
        <div className={classes.header}>Add Group</div>
        <div className={classes.content_container}>
          <div className={classes.input_container}>
            <div className={classes.input}>
              <label htmlFor="name">Group Name</label>
              <input id="input" type="text" placeholder="Group Name" />
            </div>
            <div className={classes.input}>
              <label htmlFor="email">Group Description</label>
              <textarea
                name=""
                id=""
                cols="20"
                rows="5"
                placeholder="Group Description"
              ></textarea>
            </div>
          </div>
          <div className={classes.groups_wrapper}>
            <div className={classes.groups}>
              <h3>Avalaible Users</h3>
              <div className={classes.groups_container}>
                <input type="search" placeholder="Search" />
                <div className={classes.groups_header}>
                  <div>
                    <input type="checkbox" />
                    <p>Avalaible Users</p>
                  </div>
                  <p className={classes.groups_number}>0</p>
                </div>
              </div>
            </div>
            <div className={classes.groups}>
              <h3>Assigned Users</h3>
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
          <button className={classes.cancelBtn} onClick={() => setGroup(false)}>
            Cancel
          </button>
          <button className={classes.saveBtn}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default AddGroupModal;
