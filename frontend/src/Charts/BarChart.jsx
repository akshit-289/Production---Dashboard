import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Month", "Offline Sales", "Online Sales"],
  ["Jan", 900, 800],
  ["Feb", 570, 660],
  ["Mar", 910, 970],
  ["Apr", 540, 940],
  ["May", 660, 400]
];
  
  export default function BarChart() {
    return (
      <Chart
        chartType="Bar"
        width="101%"
        height="300px"
        data={data}
      />
    );
  }