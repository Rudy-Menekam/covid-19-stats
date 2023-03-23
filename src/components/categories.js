import { BsArrowRightCircle } from 'react-icons/bs';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import search from '../images/search.png';
import { fetchCountries } from '../redux/categoriesSlice';

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
      <div className="grid-container">
        {displayCountries().map((country) => (
          <div className="country">
            <img src={country.flag} alt="search" />
            <div className="description">
              <BsArrowRightCircle />
              <div className="text">
                <p>{country.country}</p>
                <p>{country.cases}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Categories;
