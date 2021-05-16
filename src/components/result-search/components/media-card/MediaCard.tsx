import React from 'react';

import { Media } from '../../../../common/interfaces/media';
import { truncateLongString } from '../../../../common/utils/utils';

interface Props {
  media: Media;
}

export default function MediaCard(props: Props): JSX.Element {
  const { media } = props;
  return (
    <div 
        key={media.id} 
        className='result-search__items__item'
    >
        <div 
            className="result-search__items__item__image"
            style={{
                backgroundImage: `url(${media.imageUrl})`,
            }}
        ></div>
        <h2 title={media.title} className="result-search__items__item__title">{truncateLongString(media.title).truncate(30, 1)}</h2>
        <p className="result-search__items__item__overview">{truncateLongString(media.overview).truncate(150, 1)}</p>
        <span className="result-search__items__item__release-date">{media.releaseDate.format('DD/MM/YYYY')}</span>
        <span className="result-search__items__item__rate">{media.rate}</span>
    </div>
  );
}
