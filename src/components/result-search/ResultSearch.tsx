import React, { useEffect, useState } from 'react';
import './ResultSearch.scss';
import { Media } from '../../common/interfaces/media';
import { SearchResults } from '../../common/interfaces/searchresults';
import { searchMedias } from '../../common/service/dataservice';

import MediaCard from './components/media-card/MediaCard';

interface Props {
    queryUrl: string;
}

export default function ResultSearch(props: Props) {
    const { queryUrl } = props;
    const [medias, setMedias] = useState<Media[]>([]);

    useEffect(() => {
        const getMovies = async (url: string) => {
            const searchResults: SearchResults = await searchMedias(url);
            return searchResults;            
        };
        if (queryUrl)
            getMovies(queryUrl).then((result: SearchResults) => setMedias(result.results));
    }, [queryUrl]);

    if (medias.length === 0) {
        return (
            <div className='result-search'>
                <div className='result-search__no-results-message'>La búsqueda no devolvió resultados</div>  
            </div>
        );
    }

    return (
        <div className='result-search'>
            <div className='result-search__items'>
            {medias && medias.length > 0 &&
                medias.map(media => (<MediaCard key={media.id} media={media} />))
            }
            </div>
        </div>
    );
}
