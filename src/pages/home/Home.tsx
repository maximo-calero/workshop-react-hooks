import React from 'react';
import './Home.scss';
import SearchParameters from '../../components/search-parameters/SearchParameters';
import ResultSearch from '../../components/result-search/ResultSearch';
import { SearchProvider } from '../../common/context/SearchProvider';

export default function Home(){
  return (
    <div className="main-container">
      <h1 className='main-container__title'>Buscador de películas o series</h1>
      <SearchProvider>
        <>
          <SearchParameters />
          <ResultSearch />
        </>
      </SearchProvider>
    </div>
  );
}
