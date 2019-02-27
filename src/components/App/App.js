import React from 'react';
import { FilmProvider } from '../../contexts/FilmContext';
import FilmList from '../FilmList/FilmList';
import './App.css';

const App = () => (
  <div className="App">
    <FilmProvider>
      <FilmList />
    </FilmProvider>
  </div>
);
  

export default App;
