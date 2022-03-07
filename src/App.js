import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './components/pages/HomePage/Home';
import Project from './components/pages/Projects/Projects';
import Products from './components/pages/Products/Products';
import SignUp from './components/pages/Github/Github';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

import { Navbar, Footer } from './components';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;