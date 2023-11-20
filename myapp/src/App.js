import React, { useState } from 'react';
import SideMain from './Component/Side/SideMain';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";

function App() {


  return (
    <div className="All">
      <div className="cover">
        <SideMain />
        <Routes >
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
