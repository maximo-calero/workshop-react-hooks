import React from 'react';

import { Movie } from '../../../../common/interfaces/movie';
import { truncateLongString } from '../../../../common/utils/utils';

interface Props {
  movie: Movie;
}

export default function MovieCard(props: Props): JSX.Element {
  const { movie } = props;
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
}
