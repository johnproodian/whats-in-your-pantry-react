import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import RecipeSearch from './pages/RecipeSearch';
import SearchResults from './pages/SearchResults';

function App() {
  return (
    <main className="App">
      <Header />
      <div>
        {/* <RecipeSearch></RecipeSearch>
        <SearchResults></SearchResults> */}
      </div>
    </main>
  );
}

export default App;
