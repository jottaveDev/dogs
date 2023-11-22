import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setError(null); // reseta o erro
      setLoading(true); // ativa o loading

      // request
      response = await fetch(url, options);
      json = await response.json();

      // tratando erro
      if (!response.ok) throw new Error(json.message);
    } catch (err) {
      json = null; // reseta o json em caso de erro
      setError(err.message); // setando mensagem de erro
    } finally {
      setData(json); // setando data
      setLoading(false); // removendo loading
      return { response, json };
    }
  }, []);

  return {
    data,
    error,
    loading,
    request,
  };
};

export default useFetch;
