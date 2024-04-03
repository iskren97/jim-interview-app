import { useEffect, useState } from 'react';
import flavorData from '../data/flavor.json';

const useFetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Promise.resolve(flavorData).then(({ data }) => setData(data));
  }, []);

  return { data };
};

export default useFetchData;
