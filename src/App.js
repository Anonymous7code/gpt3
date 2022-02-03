import React from "react";
import "./App.css";
import { Brand, CTA, Navbar } from "./components";
import {
  Blog,
  Features,
  Possiblity,
  WhatGPT3,
  Header,
  Footer,
} from "./containers";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3></WhatGPT3>
      <Features></Features>
      <Possiblity></Possiblity>
      <CTA />
      <Blog></Blog>
      <Footer></Footer>
    </div>
  );
};

export default App;
