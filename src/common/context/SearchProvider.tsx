import React, { useState, useContext } from 'react';
import { SearchContextInterface } from '../interfaces/search-context-interface';

import { SearchContext } from './SearchContext';

interface Props {
  children: JSX.Element;
}

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearchContext must be used whitin a SearchProvider');
  }
  return context;
};

export function SearchProvider(props: Props) {
  const { children } = props;
  const [queryUrl, setQueryUrl] = useState('');

  const changeQueryUrl = (newQueryUrl: string) => {
    setQueryUrl(newQueryUrl);
  }

  const contextValue: SearchContextInterface = {
    configuration: {
      queryTypes: ['movie', 'tv'],
      baseUrl: `${process.env.REACT_APP_TMDB_API}/search`,
      apiKey: process.env.REACT_APP_API_KEY ?? '',
    },
    queryUrl,
    changeQueryUrl,
  };

  return <SearchContext.Provider value={contextValue}>{children}</SearchContext.Provider>;
}