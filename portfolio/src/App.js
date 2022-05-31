import React from "react";
import "./styles/App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./views/Home";
import Projects from "./views/Projects";
import Nav from "./components/Nav";

function App() {
  return (
<div className="App">
      <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={<Home />}
            />
            <Route
              exact
              path="*"
              element={<Home />}
            />
            <Route exact path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route
              path="/detection"
              element={
                <>
                  <div className="app-nav">
                    <Nav />
                  </div>
                </>
              }
            />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
