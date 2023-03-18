import './App.css';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import React from 'react';
import Header from './Components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import TourDetails from './Components/TourDetails/TourDetails';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      {/* <h1>App Component</h1> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/city/:id" element={<TourDetails />}></Route>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
