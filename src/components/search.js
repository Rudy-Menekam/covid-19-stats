import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchField } from '../redux/categoriesSlice';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');

  const dispatch = useDispatch();

  const searchHandler = (e) => {
    setSearchValue(e.target.value);

    dispatch(searchField(e.target.value));
  };
  return (
    <>
      <div className="section">
        <form className="search">
          <input
            type="search"
            placeholder="Search here..."
            required
            value={searchValue}
            onChange={searchHandler}
          />
          <button
            type="submit"
            onClick={() => {
              setSearchValue('');
              dispatch(searchField(''));
            }}
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
};
export default Search;
