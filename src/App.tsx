import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Routes } from "./Router";
import { stores, StoresContext } from "./stores";
import {TopBar} from './shared/TopBar';

function App() {
  return (
    <StoresContext.Provider value={stores}>
      <BrowserRouter>
        <TopBar />
        <Routes />
      </BrowserRouter>
    </StoresContext.Provider>
  );
}

export default App;
