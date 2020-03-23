import React from "react";
import { useLocation } from "react-router-dom";
import { LineChart } from "../../components/charts/Chart";
import { BarChart } from "../../components/charts/Bar";
import { PieChart } from "../../components/charts/Pie";

const Charts = () => {
  let location = useLocation();
  let { pathname } = location;

  let chart;
  if (pathname.indexOf("line-chart") > -1) {
    chart = <LineChart />;
  } else if (pathname.indexOf("bar-chart") > -1) {
    chart = <BarChart />;
  } else if (pathname.indexOf("pie-chart") > -1) {
    chart = <PieChart />;
  }

  return <div>{chart}</div>;
};

export default Charts;
