const FilterTags = props => {
  const elements = props.filters;
  return (
    <div>
      {Object.keys(elements).map(filter => {
        if (elements[filter] !== "") {
          return (
            <div key={filter}>
              <p>
                {filter}: {elements[filter]}
              </p>
              <button
                onClick={() => {
                  props.handleClearFilter(filter);
                }}
              >
                X
              </button>
            </div>
          );
        }
      })}
    </div>
  );
};

export default FilterTags;
