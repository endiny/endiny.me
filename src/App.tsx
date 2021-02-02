import React from "react";
import "./App.css";
import { Router } from "./Router";
import { stores, StoresContext } from "./stores";

function App() {
  return (
    <StoresContext.Provider value={stores}>
      <Router />
    </StoresContext.Provider>
  );
}

export default App;
