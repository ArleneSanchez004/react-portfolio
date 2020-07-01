import React from 'react';
import './App.css';
//import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Project from "./components/Project";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <p>
          Welcome to Arlene's portfolio
        </p>
      </header>
    </div>
  );
}

export default App;
