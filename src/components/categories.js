import { BsArrowRightCircle } from 'react-icons/bs';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from '../redux/categoriesSlice';
import Search from './search';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.countries.status);
  const countries = useSelector((state) => state.countries.countryList);

  const searchCountry = useSelector((state) => state.countries.search);

  const displayCountries = () => {
    if (searchCountry === undefined) {
      return countries;
    }

    const filtered = countries.filter(
      (country) => country.country.toLowerCase().includes(searchCountry.toLowerCase()),
    );

    return filtered;
  };

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCountries());
    }
  }, [status, dispatch]);

  return (
    <>
      <Search />
      <div className="grid-container">
        {displayCountries().map((country) => (
          <div className="country" key={country.id}>
            <img src={country.flag} alt="search" />
            <div className="description">
              <div className="text">
                <p>{country.country}</p>
                <p>{country.cases}</p>
              </div>
              <Link to={`/country/${country.id}`}><BsArrowRightCircle /></Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Categories;
