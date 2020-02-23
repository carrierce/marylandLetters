const Filter = props => {
  const filterName = props.filterName;
  return (
    <div className="container m-4 border-b-2 border-grey pb-5">
      <label>{filterName}</label>
      <input
        type="checkbox"
        value={props.filterObject[filterName].enabled}
        onChange={props.handleCheckbox}
        name={filterName}
      />
      <input
        type="text"
        value={props.filterObject[filterName].value}
        className="border-2 ml-2"
        onChange={props.handleInput}
        name={filterName}
      ></input>
    </div>
  );
};

export default Filter;
