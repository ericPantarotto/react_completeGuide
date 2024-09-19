import { useEffect, useState } from 'react';

const useFetch = (fetchFn, initialValue, errorMessage = 'Failed to fetch data.') => {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  const [fetchedData, setFetchedData] = useState(initialValue);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const data = await fetchFn();
        setFetchedData(data);
      } catch (error) {
        setError({
          message: error.message || errorMessage,
        });
      }
      
      setIsFetching(false);
    }

    fetchData();
  }, [fetchFn, errorMessage]);

  return { isFetching, fetchedData, error };
};

export default useFetch;
