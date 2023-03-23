import './App.css';
import Categories from './components/categories';
import Header from './components/header';
import Search from './components/search';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Categories />
    </div>
  );
}

export default App;
