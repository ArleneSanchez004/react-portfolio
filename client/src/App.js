import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";



function App() {
  return (
    <Router>
        <div className="App">
            <Header />
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
            <Footer />
        </div>
      </Router>
  );
}

export default App;
