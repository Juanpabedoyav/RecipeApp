import axios from "axios";
import { useEffect, useState } from "react";

const useGetData = (API: string) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData(API: string) {
      const response = await axios.get(API);
      setData(response.data);
    }
    fetchData(API);
  }, [API]);


  return data
};

export default useGetData;
