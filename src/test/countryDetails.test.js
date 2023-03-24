import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Categories from '../components/categories';
import store from '../redux/store';

describe('Test for countryDetails', () => {
  test('should render', () => {
    const country = {
      id: 24,
      death: '1968',
      critical: '13',
      country: 'Cameroon',
      active: '133',
      cases: '124741',
      recovered: '122640',
      tests: '1751774',
    };
    const tree = renderer.create(
      <Provider store={store}>
        <Categories countries={country} key={24} />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
