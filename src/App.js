import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import SearchPage from './pages/SearchPage.js';
// import SearchResults from './pages/SearchResults';

function App() {
  return (
    <main className="App">
      <Header />
      <div>
        {<SearchPage></SearchPage>
        // <SearchResults></SearchResults> 
      }
      </div>
    </main>
  );
}

export default App;
