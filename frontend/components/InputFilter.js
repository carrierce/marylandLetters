import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const InputFilter = (props) => {
  const filterName = props.filterName;
  return (
    <div className={`filters-div m-4 pb-2 ${props.filterBackground}`}>
      <div className="filter-label-div">
        <label>{props.displayName}</label>
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
      <input
        type={props.inputType}
        min={props.min}
        max={props.max}
        value={props.filterObject[filterName]}
        className="border-2 w-3/5"
        onChange={props.handleInput}
        name={filterName}
      ></input>
      <span className="filter-right-border"></span>
    </div>
  );
};

export default InputFilter;
