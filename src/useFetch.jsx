import React from 'react';

const useFetch = (url) => {
  const [data, setData] = React.useState(null);
  const [isPending, setIsPending] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, { singla: abortCont.signal })
      .then((response) => {
        if (!response.ok) {
          throw Error('could not fetch data for that resource');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted');
        } else {
          setIsPending(false);
          setError(err.message);
        }
      });

      return () => abortCont.abort();
  }, [url]);

  return {data, isPending, error, setData};
};

export default useFetch;