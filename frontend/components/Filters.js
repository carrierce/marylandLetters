import Filter from "./Filter";

const Filters = props => {
  const filters = [
    "year",
    "day",
    "month",
    "wordCount",
    "fromFirstName",
    "fromLastName",
    "notes",
    "openingNote",
    "place",
    "postmark",
    "text",
    "toAddress",
    "toPersonFromPerson",
    "to"
  ];
  return (
    <form onSubmit={props.handleSubmit}>
      {filters.map(data => {
        return (
          <Filter
            key={data}
            filterName={data}
            filterObject={props.filter}
            handleInput={props.handleInput}
            handleCheckbox={props.handleCheckbox}
          />
        );
      })}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Filters;
