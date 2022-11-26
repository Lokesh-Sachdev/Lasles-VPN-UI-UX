import React from 'react';

import { Banner1, Banner2, Navbar } from './components';
import {
  Header,
  Footer,
  Features,
  Plans,
  Network,
  Testimonial,
} from './container';

import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Banner1 />
      <Features />
      <Plans />
      <Network />
      <Testimonial />
      <Banner2 />
      <Footer />
    </div>
  );
};

export default App;
