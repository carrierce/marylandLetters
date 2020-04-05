import Filter from "./Filter";
import { Button } from "@material-ui/core";

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
    {
      name: "year",
      background: "bg-gray-200",
      type: "number",
      min: 1700,
      max: 1940
    },
    { name: "day", background: "bg-red-200", type: "number", min: 1, max: 31 },
    {
      name: "month",
      background: "bg-orange-200",
      type: "number",
      min: 1,
      max: 12
    },
    {
      name: "wordCount",
      background: "bg-yellow-200",
      type: "number",
      min: 1,
      max: 50000
    }
  ];
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="filter-input-box">
        {filters.map(filterName => {
          return (
            <Filter
              min={filterName.min}
              max={filterName.max}
              key={filterName.name}
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
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default Filters;
