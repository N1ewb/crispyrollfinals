import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Search from './pages/search';
import Animepage from './pages/Animepage';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  
  return (
    <Router>
      <Header />
      <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path={`/Animepage/:id`} element={<Animepage />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
