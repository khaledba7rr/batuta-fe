import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from "./components/header/header.tsx";
import Homepage from './pages/homepage/homepage.tsx';
import Search from "./pages/search/search.tsx";
import Favorites from "./pages/favorites/favorites.tsx";


import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/search/:query" element={<Search />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
