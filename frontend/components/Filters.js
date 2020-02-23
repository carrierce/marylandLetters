import Filter from "./Filter";

const Filters = props => {
  //   const filters = [
  //     "year",
  //     "day",
  //     "month",
  //     "wordCount",
  //     "fromFirstName",
  //     "fromLastName",
  //     "notes",
  //     "openingNote",
  //     "place",
  //     "postmark",
  //     "text",
  //     "toAddress",
  //     "toPersonFromPerson",
  //     "to"
  //   ];
  const filters = [
    { name: "year", background: "bg-gray-200" },
    { name: "day", background: "bg-red-200" },
    { name: "month", background: "bg-orange-200" },
    { name: "wordCount", background: "bg-yellow-200" }
  ];
  return (
    <form onSubmit={props.handleSubmit}>
      {filters.map(filterName => {
        return (
          <Filter
            key={filterName.name}
            filterName={filterName.name}
            filterBackground={filterName.background}
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
