import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Surah from "./components/Surah";
// import Navbar from './components/Navbar';
import Single from './components/Single';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'; 

function App() {
  return (
    <div className="container">
      
      <div className="row no-gutter pt-5">
        {/* <Navbar/>  */}
        <Router>
          <Routes>
            <Route exact path="/" element={<Surah/>}></Route >
            <Route path="/single/:surahid" element={<Single/>}></Route >
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
