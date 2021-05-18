import React, { useEffect, useState } from 'react';
import { useSearchContext } from '../../common/context/SearchProvider';
import './SearchParameters.scss';

export default function SearchParameters() {
  const { configuration : { queryTypes, baseUrl, apiKey }, changeQueryUrl, } = useSearchContext();
  const [queryType, setQueryType] = useState('movie');
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

  return (
      <div className='search-parameters-container'>
        <select value={queryType} onChange={handleQueryType}>
          {queryTypes.map((item) => (<option key={item}>{item}</option>))}
        </select>
        <input 
          onChange={handleQueryText}
          className='search-parameters-container__search-text-box' 
          type='text' value={queryText} 
          placeholder='Introduzca el nombre de una película'
        />
      </div>        
  );
}
