import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Login from "./page/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Lista from "./page/Lista";
import Cuadricula from "./page/Cuadricula";
import axios from 'axios';
import { useState } from "react";

function App() {
  
  return (
    <div className="App">
      <Counter />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/lista" element={<Lista />} />
          <Route path="/cuadricula" element={<Cuadricula />} />
          <Route path="/detalle" element={<Lista />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
/**
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
      */
