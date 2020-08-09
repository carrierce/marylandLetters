import React, { useState, useEffect, useContext } from "react";
import BarChart from "../components/BarChart";
import Layout from "../components/Layout";
import Letter from "../components/Letter";
import axios from "axios";
import Router from "next/router";
import { PROD_BASE_URI } from "../serverconfig";
const BASE_URI = PROD_BASE_URI;

const Profile = () => {
  const [letters, setLetters] = useState(null);
  const [firstYear, setFirstYear] = useState(null);
  const [lastYear, setLastYear] = useState(null);
  const [barChartData, setBarChartData] = useState(null);
  const [yearRange, setYearRange] = useState(null);

  const getPersonDetails = async () => {
    let peopleData = await axios(`${BASE_URI}/getPersonDetails`, {
      params: {
        firstName: Router.query.firstName,
        lastName: Router.query.lastName,
      },
    });
    let trueData = await peopleData.data;
    return trueData;
  };

  const getNumberOfLettersByYear = async () => {
    let peopleData = await axios(`${BASE_URI}/getNumberOfLettersByYear`, {
      params: {
        firstName: Router.query.firstName,
        lastName: Router.query.lastName,
      },
    });
    let trueData = await peopleData.data;
    return trueData;
  };

  useEffect(() => {
    getPersonDetails()
      .then((data) => {
        if (data) {
          setLetters(data);
          setFirstYear(data[0].year);
          setLastYear(data[data.length - 1].year);
        }
      })
      .catch((e) => {
        console.log(e);
      });
    getNumberOfLettersByYear()
      .then((data) => {
        if (data) {
          const startYear = data[0].year;
          const endYear = data[data.length - 1].year;
          const yearRange = endYear - startYear;
          const preppedData = [["Year", "Count"]];
          let count = 0;
          for (let i = startYear; i < endYear + 1; i++) {
            if (parseInt(data[count].year) == i) {
              preppedData.push([
                data[count].year.toString(),
                data[count].letterCount,
              ]);
              count++;
            } else {
              preppedData.push([i.toString(), 0]);
            }
          }
          setBarChartData(preppedData);
          setYearRange(yearRange);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <Layout>
      {yearRange && yearRange > 1 ? (
        <BarChart barChartData={barChartData} />
      ) : (
        <p className="font-medium">
          Bar Charts not displayed if there are only letters from 1 year.
        </p>
      )}
      {letters &&
        letters.map((letter) => {
          return <Letter key={letter.letter_id} data={letter} />;
        })}
    </Layout>
  );
};

export default Profile;
