import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { PeopleContext } from "../context/PeopleContext";
import Router from "next/router";
import { PROD_BASE_URI } from "../serverconfig";
const BASE_URI = PROD_BASE_URI;

const PeopleCard = ({ firstName, lastName }) => {
  const [count, setCount] = useState(null);
  const { handlePersonClick } = useContext(PeopleContext);
  const getLetterCount = async () => {
    if (firstName != "" || lastName != "") {
      let peopleData = await axios(`${BASE_URI}/getLettersCount`, {
        params: {
          firstName: firstName,
          lastName: lastName,
        },
      });
      let trueData = await peopleData.data;
      return trueData;
    } else {
      return null;
    }
  };

  useEffect(() => {
    getLetterCount().then((data) => {
      if (data) {
        setCount(data[0].count);
      }
    });
  }, []);

  const handleClick = (firstName, lastName) => {
    handlePersonClick(firstName, lastName);
    Router.push({
      pathname: "/profile",
      query: { firstName, lastName },
    });
  };

  return (
    <>
      <div
        className="people-card"
        onClick={() => handleClick(firstName, lastName)}
      >
        <h1>
          {firstName} {lastName}
        </h1>

        <p>Letters Sent: {count}</p>
      </div>
    </>
  );
};

export default PeopleCard;
