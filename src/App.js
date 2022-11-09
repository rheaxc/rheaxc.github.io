import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import FAQ from "./components/FAQ";
import Members from "./components/Members";
import Rush from "./components/Rush";

import './style/App.css';


function App() {
  return (
      <div className="theta tau theta gamma">
        <header className="App-header">
          here is a lil example home page
        </header>
        <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/members" component = { <Members />} />
            </Routes>
        </BrowserRouter>

        heads up: the nav bar doesn't work - will fix later
      </div>
  );
}

export default App;
