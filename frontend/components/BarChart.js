import React, { Component } from "react";
import Chart from "react-google-charts";
const BarChart = (props) => {
  return (
    <Chart
      height={"300px"}
      chartType="Bar"
      loader={<div>Loading Chart</div>}
      data={props.barChartData}
      options={{
        // Material design options
        chart: {
          title: "Letters By Year",
        },
        legend: { position: "none" },
        width: "100%",
      }}
      // For tests
      rootProps={{ "data-testid": "2" }}
    />
  );
};
export default BarChart;
