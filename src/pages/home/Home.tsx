import React, { useState } from 'react';
import './Home.scss';
import SearchParameters from '../../components/search-parameters/SearchParameters';
import ResultSearch from '../../components/result-search/ResultSearch';
import { Movie } from '../../common/interfaces/movie';
import { dataService } from '../../common/service/dataservice';
import { SearchResults } from '../../common/interfaces/searchresults';

export default function Home(){
  const [queryText, setQueryText] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleQueryText = (value: string) => {
    setQueryText(value);
  };

  const handleSearchClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (queryText) {
      const searchResults: SearchResults = await dataService.searchMovies(queryText, 1);
      setMovies(searchResults.results);
    }
  };

  return (
    <div className="main-container">
      <h1 className='main-container__title'>Buscador de películas</h1>
      <SearchParameters onClickSearchButton={handleSearchClick} onChangeQueryText={handleQueryText} />
      <ResultSearch movies={movies} />
    </div>
  );
}
