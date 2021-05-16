import React, { useState } from 'react';
import './Home.scss';
import SearchParameters from '../../components/search-parameters/SearchParameters';
import ResultSearch from '../../components/result-search/ResultSearch';

export default function Home(){
  const [queryUrl, setQueryUrl] = useState('');

  const handleQueryUrl = (value: string) => {
    setQueryUrl(value);
  };

  return (
    <div className="main-container">
      <h1 className='main-container__title'>Buscador de películas o series</h1>
      <SearchParameters onChangeQueryUrl={handleQueryUrl} />
      <ResultSearch queryUrl={queryUrl} />
    </div>
  );
}
