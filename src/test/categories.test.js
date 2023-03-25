import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import Categories from '../components/categories';
import store from '../redux/store';
import { fetchCountries } from '../redux/categoriesSlice';

it('Country  page renders correctly', () => {
  const tree = renderer
    .create(
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <Categories />
          </BrowserRouter>
        </Provider>
      </React.StrictMode>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// Country  slicer and reducer check
describe('Countries redux state tests', () => {
  it('Should initially hold country data by default', () => {
    const state = store.getState().countries;
    expect(state.countryList.length).toEqual(0);
  });

  it('Countries fetch data from API', async () => {
    const url = 'https://disease.sh/v3/covid-19/countries';
    const axiosSpy = jest.spyOn(axios, 'get');
    jest.setTimeout(10 * 1000);
    const dispatchSpy = jest.fn();
    await fetchCountries(url)(dispatchSpy);
    expect(axiosSpy).toHaveBeenCalledWith(url);
  }, 10000);
});
