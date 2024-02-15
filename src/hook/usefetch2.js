import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [users, setUsers] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.status === 200) {
          setError("Failed to fetch data. Error code: 200");
          setLoader(false);
        } else if (response.status === 400) {
          setError("Failed to fetch data. Error code: 400");
          setLoader(false);
        }
        return response.json();
      })
      .then((result) => {
        setUsers(result.data.surahs);
      
        setLoader(false);
        setError(null);
      })
      .catch((error) => {
        setError("Failed to fetch data. Network error.");
        setLoader(false);
      });
  }, [url]);

  return { loader, users, error };
};

export default useFetch;
