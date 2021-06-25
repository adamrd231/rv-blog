import React, { useState, useEffect } from 'react';
import './App.css';

import Menu from './components/menus/menu';
import LandingImage from './components/landing-page/landing-image';
import Footer from './components/footer';
import Blogs from './components/blogs';
import LandingTitle from './components/landing-page/landing-title';


function App() {

 return (
      <div className="App">
        <header>
          <Menu />
          <LandingImage />
        </header>
        <React.Fragment>
          <LandingTitle />
          <Blogs />
          <Footer />
        </React.Fragment>
          
      </div>
    );
  }

export default App;
