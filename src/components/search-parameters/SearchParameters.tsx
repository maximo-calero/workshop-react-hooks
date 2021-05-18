import React from 'react';
import { useSearchContext } from '../../common/context/SearchProvider';
import useSearchParameters from './custom-hooks/useSearchParameters';

import './SearchParameters.scss';

export default function SearchParameters() {
  const { configuration : { queryTypes, baseUrl, apiKey }, changeQueryUrl, } = useSearchContext();
  const { 
    queryType,
    queryText,
    onQueryTypeChange,
    onQueryTextChange 
  } = useSearchParameters({
    baseUrl,
    apiKey,
    initialQueryType: 'movie',
    changeQueryUrl
  });

  return (
      <div className='search-parameters-container'>
        <select value={queryType} onChange={onQueryTypeChange}>
          {queryTypes.map((item) => (<option key={item}>{item}</option>))}
        </select>
        <input 
          onChange={onQueryTextChange}
          className='search-parameters-container__search-text-box' 
          type='text' value={queryText} 
          placeholder='Introduzca el nombre de una película'
        />
      </div>        
  );
}
