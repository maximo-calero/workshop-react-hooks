import React from 'react';
import './ResultSearch.scss';
import { Movie } from '../../common/interfaces/movie';
import { truncateLongString } from '../../common/utils/utils'

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
                    this.props.movies.map(movie => {
                        return (
                            <div 
                                key={movie.id} 
                                className='result-search__items__item'
                            >
                                <div 
                                    className="result-search__items__item__image"
                                    style={{
                                        backgroundImage: `url(${movie.imageUrl})`,
                                    }}
                                ></div>
                                <h2 title={movie.title} className="result-search__items__item__title">{truncateLongString(movie.title).truncate(30, 1)}</h2>
                                <p className="result-search__items__item__overview">{truncateLongString(movie.overview).truncate(150, 1)}</p>
                                <span className="result-search__items__item__release-date">{movie.releaseDate.format('DD/MM/YYYY')}</span>
                                <span className="result-search__items__item__rate">{movie.rate}</span>
                            </div>
                        );
                    })
                }
                </div>
            </div>        
        );
    }
}

export default ResultSearch;