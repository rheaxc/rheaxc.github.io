import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import FAQ from "./components/FAQ";
import Members from "./components/Members";
import Rush from "./components/Rush";
import HomePage from "./components/HomePage";

import './style/App.css';


function App() {
  return (
    <React.Fragment>
        <Router>
          <div className="content-wrapper">
           <Navbar />
              <Routes>

                <Route path="/" element={<HomePage />}/>

                <Route path="/members" element={<Members />}/>

                <Route path="/rush" element={<Rush />}/>

                <Route path="/faq" element={<FAQ/>}/>

              </Routes>
          </div>
        </Router>
    </React.Fragment>
  );
}

export default App;
