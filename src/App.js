import React from "react";
import "./App.css";
import About from "./components/container/About/About";
import Contact from "./components/container/Contact/Contact";
import Footer from "./components/container/Footer/Footer";
import Home from "./components/container/Home/Home";

import Navbar from "./components/Navbar/Navbar";
import Project from "./components/Project";
import SkiilsPrtfolio from "./components/SkiilsPrtfolio";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <SkiilsPrtfolio />
      <Project />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
