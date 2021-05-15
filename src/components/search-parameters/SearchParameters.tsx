import React, { useState } from 'react';
import './SearchParameters.scss';
import searchIcon from '../../images/search-icon.png';

const queryTypes = ['movie', 'tv'];

interface Props {
  onChangeQueryText: (value: string) => void;
  onClickSearchButton: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function SearchParameters(props: Props) {
  const { onChangeQueryText, onClickSearchButton } = props;
  const [queryType, setQueryType] = useState('movie');
  const [queryText, setQueryText] = useState('');

  const handleQueryType = (event: any) => {
    setQueryType(event.target.value);
  };

  const handleQueryText = (event: any) => {
    setQueryText(event.target.value);
    onChangeQueryText(event.target.value);
  };

  return (
      <div className='search-parameters-container'>
        <select value={queryType} onChange={handleQueryType}>
          {queryTypes.map((item) => (<option key={item}>{item}</option>))}
        </select>
        <input 
          onChange={handleQueryText} 
          className='search-parameters-container__search-text-box' 
          type='text' value={queryText} 
          placeholder='Introduzca el nombre de una película'
        />
        <button 
          onClick={onClickSearchButton} 
          className='search-parameters-container__search-button' 
          value='Buscar'
        > 
          <img alt='search icon' className='search-parameters-container__search-icon' src={searchIcon} />            
        </button>
      </div>        
  );
}
