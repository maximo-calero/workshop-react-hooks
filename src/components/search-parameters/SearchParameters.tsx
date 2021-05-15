import React from 'react';
import './SearchParameters.scss';
import searchIcon from '../../images/search-icon.png';

interface Props {
  queryText: string;
  onChangeQueryText: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickSearchButton: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

class SearchParameters extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <div className='search-parameters-container'>
          <input 
            onChange={this.props.onChangeQueryText} 
            className='search-parameters-container__search-text-box' 
            type='text' value={this.props.queryText} 
            placeholder='Introduzca el nombre de una película'
          />
          <button 
            onClick={this.props.onClickSearchButton} 
            className='search-parameters-container__search-button' 
            value='Buscar'
          > 
            <img alt='search icon' className='search-parameters-container__search-icon' src={searchIcon} />            
          </button>
        </div>        
    );
  }
}

export default SearchParameters;