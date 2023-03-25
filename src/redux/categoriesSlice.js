import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://disease.sh/v3/covid-19/countries';

const initialState = {
  countryList: [],
  status: 'idle',
  error: null,
  search: '',
};

export const fetchCountries = createAsyncThunk('country/fetchCountries', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const categoriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    searchField: (state, payload) => ({
      ...state,
      search: payload.payload,
    }),
  },
  extraReducers(builder) {
    builder.addCase(fetchCountries.pending, (state) => ({
      ...state,
      status: 'loading',
    }))
      .addCase(fetchCountries.fulfilled, (state, action) => ({
        ...state,
        countryList: action.payload.map((country) => ({
          updated: country.updated,
          country: country.country,
          cases: country.cases,
          tests: country.tests,
          deaths: country.deaths,
          population: country.population,
          recovered: country.recovered,
          active: country.active,
          critical: country.critical,
          id: country.countryInfo._id,
          flag: country.countryInfo.flag,
        })),
        status: 'loaded',
      }))
      .addCase(fetchCountries.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: [...state.error, action.error.message],
      }));
  },

});
export const { searchField } = categoriesSlice.actions;
export default categoriesSlice.reducer;
