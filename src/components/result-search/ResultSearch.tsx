import React, { useCallback, useEffect, useState } from 'react';
import './ResultSearch.scss';
import { Media } from '../../common/interfaces/media';
import { SearchResults } from '../../common/interfaces/searchresults';
import { searchMedias } from '../../common/service/dataservice';

import MediaCard from './components/media-card/MediaCard';
import { useSearchContext } from '../../common/context/SearchProvider';

export default function ResultSearch() {
    const { queryUrl } = useSearchContext();
    const [medias, setMedias] = useState<Media[]>([]);

    const getMedias = useCallback( async ()=> {
        if (queryUrl) {
            const searchResults: SearchResults = await searchMedias(queryUrl);
            setMedias(searchResults.results);
        }
    }, [queryUrl]);

    useEffect(() => {
        getMedias();
    }, [getMedias]);

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
