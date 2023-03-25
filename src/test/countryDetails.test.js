import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Categories from '../components/categories';
import store from '../redux/store';

describe('Test for countryDetails', () => {
  test('should render', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Categories />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
