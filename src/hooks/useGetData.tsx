import { useEffect, useState } from "react";
import axios from "axios";

const useGetData = (API: string) => {
  const [data, setData] = useState<{}>({});

  useEffect(() => {
    async function fetchData(API: string) {
      try {
        
        
        const response = await axios({
          method: 'get',
          url: API,
        })
        setData(response.data.results);
      } catch (error) {
        console.error(error)
      }
    }
    fetchData(API);
  }, []);


  return data
};

export default useGetData;
