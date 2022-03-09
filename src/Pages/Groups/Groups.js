import React, { useEffect, useRef, useState } from "react";
import SectionLabel from "../../Components/Dashboard-Components/SectionLabel/SectionLabel";
import DataTable from "react-data-table-component";
import Card from "@mui/material/Card";
import groups from "../../groupData";
import { AiFillCaretDown } from "react-icons/ai";
import classes from "./Groups.module.css";
import AddGroupModal from "../../Components/Dashboard-Components/AddGroupModal/AddGroupModal";

const columns = [
  {
    id: 1,
    name: "Name/Users",
    selector: (row) => row.name,
    reorder: true,
  },
  {
    id: 2,
    name: "Description",
    selector: (row) => row.description,
    reorder: true,
  },
  {
    id: 3,
    name: "Total Users",
    selector: (row) => row.total_users,
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

const Groups = () => {
  const ref = useRef();
  const [filterText, setFilterText] = useState("");
  const [show, setShow] = useState(false);
  const [showGroup, setShowGroup] = useState(false);
  const filteredItems = groups.filter(
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

  return (
    <>
      <SectionLabel label="PhishCode | Groups" />
      <div className={classes.container}>
        <div className={classes.header_2}>
          <div className={classes.left}>
            <FilterComponent
              onFilter={(e) => setFilterText(e.target.value)}
              filterText={filterText}
            />
            <div className={classes.select_btn}>
              <p onClick={() => setShow(!show)}>
                Show all Groups <AiFillCaretDown />
              </p>
              {show && (
                <div className={classes.user_dropdown} ref={ref}>
                  <button>AD Groups</button>
                </div>
              )}
            </div>
          </div>
          <div className={classes.right}>
            <button onClick={() => setShowGroup(!showGroup)}>Add Group</button>
            <button>Edit</button>
            <button>Delete</button>
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
      {showGroup && <AddGroupModal setGroup={setShowGroup} />}
    </>
  );
};

export default Groups;
