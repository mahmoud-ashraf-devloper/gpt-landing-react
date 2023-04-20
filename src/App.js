import React from "react";

import {
  Navbar, Cta, Brand
} from './components';

import {
  Header, Footer, WhatGPT4, Possibility, Features, Blog
} from './containers';


function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT4 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
