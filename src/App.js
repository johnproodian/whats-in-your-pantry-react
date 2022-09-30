import './App.css';
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import SearchPage from './pages/SearchPage.js';
import SavedRecipes from './pages/SavedRecipes';
// import SearchResults from './pages/SearchResults';

function App() {
  return (
    <Router>
      <main className="App">
        <Header />
          <Routes>
            <Route exact path="/" element={<SearchPage />} />
            <Route path="/saved" element={<SavedRecipes />} />
          </Routes>
      </main>
    </Router>
    
  );
}

export default App;
