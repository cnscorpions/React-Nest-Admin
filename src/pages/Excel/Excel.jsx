import React from "react";
import { useLocation } from "react-router-dom";

import { ExportCSV } from "../../components/excel/ExportCSV";

const ExcelPage = () => {
  let location = useLocation();
  let { pathname } = location;

  let ExcelComponent;

  if (pathname.indexOf("export-csv")) {
    ExcelComponent = <ExportCSV />;
  }

  return <div>{ExcelComponent}</div>;
};

export default ExcelPage;
