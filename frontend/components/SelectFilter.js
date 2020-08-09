import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { useState, useEffect } from "react";
import axios from "axios";
import { PROD_BASE_URI } from "../serverconfig";
const BASE_URI = PROD_BASE_URI;

const SelectFilter = (props) => {
  const [years, setYears] = useState([]);
  const getYears = async () => {
    const letterYears = await axios(`${BASE_URI}/years`);
    setYears(letterYears.data);
  };
  useEffect(() => {
    getYears();
  }, []);
  const filterName = props.filterName;
  return (
    <div className={`filters-div m-4 pb-2 ${props.filterBackground}`}>
      <div className="filter-label-div">
        <label htmlFor="year-select">{props.displayName}</label>
        {props.filterApplied && props.filterObject[filterName] != "" && (
          <IconButton
            className="filter-cancel-button ml-1"
            aria-label="delete"
            onClick={() => {
              props.handleClearFilter(filterName);
            }}
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        )}
      </div>
      <select
        id="year-select"
        className="border-2 w-3/5"
        onChange={props.handleInput}
        name={filterName}
      >
        {years.map((year, i) => {
          return (
            <option key={i} value={year}>
              {year}
            </option>
          );
        })}
      </select>
      <span className="filter-right-border"></span>
    </div>
  );
};

export default SelectFilter;
