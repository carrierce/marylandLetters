import Filter from "./Filter";
import { Button } from "@material-ui/core";

const Filters = (props) => {
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
    {
      name: "day",
      displayName: "Day of the Month",
      type: "number",
      min: 1,
      max: 31,
    },
    {
      name: "month",
      displayName: "Month",
      type: "number",
      min: 1,
      max: 12,
    },
    {
      name: "year",
      displayName: "Year",
      type: "number",
      min: 1700,
      max: 1940,
    },
    {
      name: "fromFirstName",
      displayName: "Sender's First Name",
      type: "text",
      min: 1,
      max: 50000,
    },
    {
      name: "fromLastName",
      displayName: "Sender's Last Name",
      type: "text",
      min: 1,
      max: 50000,
    },
    {
      name: "place",
      displayName: "Sent From",
      type: "text",
      min: 1,
      max: 50000,
    },
  ];
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="filter-input-boxes">
        {filters.map((filterName) => {
          return (
            <Filter
              min={filterName.min}
              max={filterName.max}
              key={filterName.name}
              displayName={filterName.displayName}
              filterName={filterName.name}
              filterBackground={filterName.background}
              filterObject={props.filter}
              handleInput={props.handleInput}
              filterApplied={props.filterApplied}
              inputType={filterName.type}
              handleClearFilter={props.handleClearFilter}
            />
          );
        })}
      </div>
      <Button
        style={{ marginLeft: "16px", marginBottom: "16px" }}
        type="submit"
        variant="outlined"
      >
        Submit
      </Button>
    </form>
  );
};

export default Filters;
