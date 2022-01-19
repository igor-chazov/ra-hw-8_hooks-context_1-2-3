import { useState, useEffect } from 'react';

export default function useJsonFetch(url, opts = null) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, opts);
        if (!response.ok) throw new Error(`${response.url} ${response.status} ${response.statusText}`);
        const data = await response.json();
        setData(data);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();

  }, [url, opts]);

  return [{ data, error, loading }];
}
