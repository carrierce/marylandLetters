import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import PeopleCard from "../components/PeopleCard";
import axios from "axios";
const BASE_URI = "https://lettersbowlinggreen.com/api";

const People = () => {
  const [people, setPeople] = useState(null);
  const [counter, setCounter] = useState(1);
  const [maxPage, setMaxPage] = useState(null);

  const getPeople = async () => {
    let peopleData = await axios(`${BASE_URI}/names`, {
      params: { counter: counter },
    });
    let trueData = await peopleData.data;
    return trueData;
  };

  const handleClick = (name) => {
    if (counter > 1 && name == "Previous") {
      setCounter((prev) => prev - 1);
    } else if (counter < maxPage && name == "Next") {
      setCounter((prev) => prev + 1);
    }
  };

  useEffect(() => {
    let result = {};
    getPeople().then((data) => {
      result = data.data;
      setPeople(result);
      setMaxPage(data.pagination.lastPage);
    });
  }, []);

  useEffect(() => {
    let result = {};
    getPeople().then((data) => {
      result = data.data;
      setPeople(result);
      setMaxPage(data.pagination.lastPage);
    });
  }, [counter]);

  return (
    <Layout>
      <div>
        <button onClick={() => handleClick("Previous")}>Previous</button>. . .
        <button onClick={() => handleClick("Next")}>Next</button>
      </div>
      <div className="people-card-wrapper">
        {people != null &&
          people.map((person) => {
            return (
              <PeopleCard
                key={person.fromFirstName + person.fromLastName}
                firstName={person.fromFirstName}
                lastName={person.fromLastName}
              />
            );
          })}
      </div>
    </Layout>
  );
};

export default People;
