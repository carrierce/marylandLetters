import React, { createContext, useState } from "react";

export const PeopleContext = createContext();

const PeopleContextProvider = (props) => {
  const [personFirstName, setFirstName] = useState(null);
  const [personLastName, setLastName] = useState(null);
  const handlePersonClick = (firstName, lastName) => {
    setFirstName(firstName);
    setLastName(lastName);
  };
  return (
    <PeopleContext.Provider
      value={{
        personFirstName,
        personLastName,
        handlePersonClick,
      }}
    >
      {props.children}
    </PeopleContext.Provider>
  );
};

export default PeopleContextProvider;
