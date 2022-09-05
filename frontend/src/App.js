import './App.scss';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import MainPage from './pages/MainPage/mainPage.js';
import AccountPage from './pages/AccountPage/accountPage.js';
import About from './pages/About/about.js';
import Footer from './components/Footer/footer.js';

function App() {

  return (
    <BrowserRouter>
      <div className = "page">
      
        <div className="nav-bar">
          <h1 className="title">
            <NavLink to="/MainPage" activeClassName="is-active">⛺️ CAMPSITE CHECKER</NavLink>
          </h1>
          <div className="nav-bar-right">
            <NavLink to="/AccountPage" activeClassName="is-active">Account</NavLink>
            <NavLink to="/About" activeClassName="is-active">About</NavLink>
          </div>
        </div>

        <Routes>
            <Route path="/MainPage" element={<MainPage />} />
            <Route path="/AccountPage" element={<AccountPage />} />
            <Route path="/About" element={<About />} />
        </Routes>

        <Footer />
      
      </div>
    </BrowserRouter>
  );
}

export default App;
