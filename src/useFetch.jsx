import { useState, useEffect } from "react";
import axios from 'axios';

export default function useFetch(url) {
  const [data, setData] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios(url)
    .then(res => {
      console.log(res.data)
      setData(res.data);
      setIsLoading(false);
      setError(false);
    })
    .catch(e => {
      console.log(e)
      console.log(e.toString())
      setData(false);
      setIsLoading(false);
      setError(e);
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [data, isLoading, error];
}