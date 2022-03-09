import React from "react";
import classes from "./ImportUsersModal.module.css";

const ImportUsersModal = ({ setUserModal }) => {
  return (
    <div className={classes.wrapper}>
      <div
        className={classes.overlay}
        onClick={() => setUserModal(false)}
      ></div>
      <div className={classes.content_container}>
        <div className={classes.header}>Import users from CSV</div>
        <div className={classes.content}>
          <div className={classes.left}>
            <p>
              The users to import new users requires setting of 'name' and
              'email'.
            </p>
            <p>
              As optional fields you can add 'manager email', 'exchange login'
              and 'group'.
            </p>
            <p>
              If you have users who are in several groups you can add additional
              'group' fields followed by a number. For example 'group1' and
              'group2'.
            </p>
            <p>
              As a formatting example you can have a look at the following
              examples:
            </p>
            <div className={classes.links}>
              <a href="/">&#8226; Blank template with header</a>
              <a href="/">&#8226; Template with example data</a>
            </div>
          </div>
          <div className={classes.right}>
            <p>CSV File</p>
            <div className={classes.fileUpload}>
              <input type="file" accept=".csv" className={classes.upload} />
              <span>Upload</span>
            </div>
            <div className={classes.checkbox}>
              <input type="checkbox" />
              <p>Create New Groups</p>
            </div>
            <div className={classes.checkbox}>
              <input type="checkbox" />
              <p>Give users access to Sophos Central Self Service.</p>
            </div>
            <div className={classes.tooltip}>
              <p>Max file size is 2MB</p>
              <p>CSV file should be utf-8 encoded</p>
            </div>
          </div>
        </div>
        <div className={classes.footer}>
          <button onClick={() => setUserModal(false)}>Cancel</button>
          <button>Add</button>
        </div>
      </div>
    </div>
  );
};

export default ImportUsersModal;
