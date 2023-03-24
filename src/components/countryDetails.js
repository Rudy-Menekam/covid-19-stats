import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const CountryDetails = () => {
  const { id } = useParams();

  const countries = useSelector((state) => state.countries.countryList);
  const country = countries.find((c) => c.id === parseInt(id, 10));
  return (
    <>
      <div className="detailsContainer">
        {/* <BsArrowLeft /> */}
        <span className="profile">
          <Link to="/">
            <BsArrowLeft
              style={{
                color: '#0290FF',
                height: '30px',
                width: '30px',
                cursor: 'pointer',
                transition: 'all ease-in 300ms',
              }}
            />
          </Link>
        </span>
        <img src={country.flag} alt="search" />
        <ul>
          <h2>{country.country}</h2>
          <div>
            <li>
              <p>
                <b>Total Population:   </b>
                {country.population}
              </p>
            </li>
            <li>
              <p>
                <b>Total Population Tested:   </b>
                {country.tests}
              </p>
            </li>
            <li>
              <p>
                <b>Total Cases:    </b>
                {country.cases}
              </p>
            </li>
            <li>
              <p>
                <b>Total Recovered:    </b>
                {country.recovered}
              </p>
            </li>
            <li>
              <p>
                <b>Total Deaths:    </b>
                {country.deaths}
              </p>
            </li>
            <li>
              <p>
                <b>Total Active Cases:    </b>
                {country.active}
              </p>
            </li>
            <li>
              <p>
                <b>Total Critical Cases:    </b>
                {country.critical}
              </p>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
};
export default CountryDetails;
