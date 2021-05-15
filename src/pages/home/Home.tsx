import React from 'react';
import './Home.scss';
import SearchParameters from '../../components/search-parameters/SearchParameters';
import ResultSearch from '../../components/result-search/ResultSearch';
import { Movie } from '../../common/interfaces/movie';
import { dataService } from '../../common/service/dataservice';
import { SearchResults } from '../../common/interfaces/searchresults';

export interface Props {

}

export interface State {
  queryText: string;
  movies: Movie[];
}

class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      queryText: '',
      movies: []
    };
  }

  handleQueryText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    this.setState(prevState => ({
      ...prevState,
      queryText: target.value
    }));
  }

  handleSearchClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (this.state.queryText) {
      const searchResults: SearchResults = await dataService.searchMovies(this.state.queryText, 1);
      this.setState(prevState => (
        {
          ...prevState,
          movies: searchResults.results
        }
      ));  
    }
  }

  render() {
    return (
      <div className="main-container">
        <h1 className='main-container__title'>Buscador de películas</h1>
        <SearchParameters onClickSearchButton={this.handleSearchClick} onChangeQueryText={this.handleQueryText} queryText={this.state.queryText} />
        <ResultSearch movies={this.state.movies} />
      </div>
    );
  }
}

export default Home;
