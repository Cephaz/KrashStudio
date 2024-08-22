import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import SearchBar from './components/SearchBar';
import ResultsList from './components/ResultsList';
import DetailCard from './components/DetailCard';
import './App.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="app-container">
        <header className="app-header">
          <h1>Star Wars API Search</h1>
        </header>
        <main className="app-main">
          <SearchBar />
          <div className="results-container">
            <ResultsList />
            <DetailCard />
          </div>
        </main>
      </div>
    </Provider>
  );
};

export default App;
