import { createContext } from 'react';

import { SearchContextInterface } from '../interfaces/search-context-interface';

export const SearchContext = createContext<SearchContextInterface>({
  configuration: {
    queryTypes: [],
    baseUrl: '',
    apiKey: '',
  },
  queryUrl: '',
  changeQueryUrl: () => { },
});