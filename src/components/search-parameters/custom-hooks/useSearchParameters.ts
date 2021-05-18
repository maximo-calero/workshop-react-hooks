import { useState, useEffect } from 'react';

interface Props {
  baseUrl: string;
  apiKey: string;
  initialQueryType: string;
  changeQueryUrl: (newQueryUrl: string) => void;
}

interface UseSearchParametersInterface {
  queryType: string;
  queryText: string;
  onQueryTypeChange: (event: any) => void;
  onQueryTextChange: (event: any) => void;
}

export default function useSearchParameters(props: Props): UseSearchParametersInterface {
  const { baseUrl, apiKey, initialQueryType, changeQueryUrl  } = props;
  const [queryType, setQueryType] = useState(initialQueryType);
  const [queryText, setQueryText] = useState('');
  const [queryUrl, setQueryUrl] = useState('');

  useEffect(()=> {
    if (queryText.length >= 3) 
      setQueryUrl(`${baseUrl}/${queryType}?api_key=${apiKey}&query=${queryText}&page=1`);
  }, [queryText, queryType, baseUrl, apiKey]);

  useEffect(()=> {
    if (queryUrl) 
      changeQueryUrl(queryUrl);
  }, [queryUrl, changeQueryUrl]);

  const handleQueryType = (event: any) => {
    setQueryType(event.target.value);
  };

  const handleQueryText = (event: any) => {
    setQueryText(event.target.value);
  };

  return {
    queryType,
    queryText,
    onQueryTypeChange: handleQueryType,
    onQueryTextChange: handleQueryText,
  };
}