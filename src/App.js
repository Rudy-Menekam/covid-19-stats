import { Route, Routes } from 'react-router-dom';
import './App.css';
import Categories from './components/categories';
import CountryDetails from './components/countryDetails';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/country/:id" element={<CountryDetails />} />
      </Routes>

    </div>
  );
}

export default App;
