import React, { useEffect, useState } from 'react';
import './SearchParameters.scss';


const queryTypes = ['movie', 'tv'];
const baseUrl = `${process.env.REACT_APP_TMDB_API}/search`;
const apiKey = process.env.REACT_APP_API_KEY;

interface Props {
  onChangeQueryUrl: (value: string) => void;
}

export default function SearchParameters(props: Props) {
  const { onChangeQueryUrl } = props;
  const [queryType, setQueryType] = useState('movie');
  const [queryText, setQueryText] = useState('');
  const [queryUrl, setQueryUrl] = useState('');

  useEffect(()=> {
    if (queryText.length >= 3) 
      setQueryUrl(`${baseUrl}/${queryType}?api_key=${apiKey}&query=${queryText}&page=1`);
  }, [queryText, queryType]);

  useEffect(()=> {
    if (queryUrl) 
    onChangeQueryUrl(queryUrl);
  }, [queryUrl, onChangeQueryUrl]);

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
