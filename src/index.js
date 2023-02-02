import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'normalize.css'

import './assets/sass/index.scss';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function Main() {
  <BrowserRouter>
    <Routes>
      <Header />
      <Routes>
          <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </Routes>
  </BrowserRouter>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home />)