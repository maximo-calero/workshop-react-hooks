import React from 'react';
import './ResultSearch.scss';
import { Movie } from '../../common/interfaces/movie';
import MovieCard from './components/movie-card/MovieCard';

interface Props {
    movies: Movie[];
}

class ResultSearch extends React.Component<Props,{}> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render() {
        if (this.props.movies.length === 0) {
            return (
                <div className='result-search'>
                    <div className='result-search__no-results-message'>La búsqueda no devolvió resultados</div>  
                </div>
            );
        }

        return (
            <div className='result-search'>
                <div className='result-search__items'>
                {this.props.movies && this.props.movies.length > 0 &&
                    this.props.movies.map(movie => (<MovieCard movie={movie} />))
                }
                </div>
            </div>        
        );
    }
}

export default ResultSearch;