import { useState, useEffect } from "react";
import { service } from "../../utils/request";

const useFetch = url => {
  const [data, updateData] = useState(undefined);

  useEffect(() => {
    service
      .get(url)
      .then(res => {
        const { data } = res.data;
        updateData(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [url]);

  return data;
};

export default useFetch;
