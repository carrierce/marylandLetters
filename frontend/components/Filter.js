const Filter = props => {
  const filterName = props.filterName;
  const upperCaseFilterName =
    filterName.charAt(0).toUpperCase() + filterName.slice(1);
  return (
    <div
      className={`m-4 border-b-2 border-grey pb-5 ${props.filterBackground}`}
    >
      <label className="mx-2 block">{upperCaseFilterName}</label>
      <input
        type={props.inputType}
        min={props.min}
        max={props.max}
        value={props.filterObject[filterName]}
        className="border-2 ml-2 w-3/5"
        onChange={props.handleInput}
        name={filterName}
      ></input>
      {props.filterApplied && props.filterObject[filterName] != "" && (
        <button
          onClick={() => {
            props.handleClearFilter(filterName);
          }}
        >
          X
        </button>
      )}
    </div>
  );
};

export default Filter;
