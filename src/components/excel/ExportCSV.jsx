import React, { useState } from "react";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx/dist/xlsx.mini.min";
import { Select, Button } from "antd";
import useFetch from "utils/useFetch";
import { getAllTableList } from "api/index";
import { service } from "utils/request";
import { getUrl } from "./constants";

const { Option } = Select;

const saveTableToCSV = async (type, fileName) => {
  const url = getUrl(type);
  service
    .get(url)
    .then(res => {
      const csvData = res.data.data;
      const fileType =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
      const fileExtension = ".xlsx";
      const ws = XLSX.utils.json_to_sheet(csvData);
      const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
      const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
      const data = new Blob([excelBuffer], { type: fileType });
      FileSaver.saveAs(data, fileName + fileExtension);
    })
    .catch(error => {
      console.error(error);
    });
};

export const ExportCSV = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  // 获取excel列表
  const list = useFetch(getAllTableList);

  const handleChange = value => {
    console.log(`selected ${value}`);
    setSelectedItem(value);
  };

  return (
    <div>
      <Select style={{ width: 200 }} onChange={handleChange}>
        {list
          ? list.map(item => (
              <Option key={item.collection} value={item.collection}>
                {item.text}
              </Option>
            ))
          : null}
      </Select>
      <Button
        className={styles["export-btn"]}
        style={{ marginLeft: "20px" }}
        type="primary"
        disabled={selectedItem ? false : true}
        onClick={() => saveTableToCSV(selectedItem, selectedItem)}
      >
        导出
      </Button>
    </div>
  );
};
