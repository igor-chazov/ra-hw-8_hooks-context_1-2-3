import { useState, useEffect, useContext } from 'react';
import ProfilesContext from '../ProfilesContext/ProfilesContext';
import getAvatarUrl from '../utils/getAvatarUrl';

export default function useFetch({ url, initialData, dataName }) {
  const { setIsLoading } = useContext(ProfilesContext);
  const [data, setData] = useState(initialData);
  const fetchController = new AbortController();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading((prevValue) => ({ ...prevValue, [dataName]: true }));

      try {
        const response = await fetch(process.env.REACT_APP_PROFILES_DATA_URL + url, { signal: fetchController.signal });
        if (!response.ok) throw new Error(`${response.url} ${response.status}`);
        const data = await response.json();
        if (data.avatar) data.avatar = getAvatarUrl(data.avatar);
        setData(data);
        setIsLoading((prevValue) => ({ ...prevValue, [dataName]: false }));

      } catch (error) {
        console.log('⛔', error.message);

        if (error.name !== 'AbortError') {
          setIsLoading((prevValue) => ({ ...prevValue, [dataName]: false }));
        }
      }
    }

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return [{ data, fetchController }];
}
