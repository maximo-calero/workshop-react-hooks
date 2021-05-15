import React from 'react';
import './ResultSearch.scss';
import { Movie } from '../../common/interfaces/movie';
import MovieCard from './components/movie-card/MovieCard';

interface Props {
    movies: Movie[];
}

export default function ResultSearch(props: Props) {
    const { movies } = props;
    if (movies.length === 0) {
        return (
            <div className='result-search'>
                <div className='result-search__no-results-message'>La búsqueda no devolvió resultados</div>  
            </div>
        );
    }

    return (
        <div className='result-search'>
            <div className='result-search__items'>
            {movies && movies.length > 0 &&
                movies.map(movie => (<MovieCard movie={movie} />))
            }
            </div>
        </div>
    );
}
