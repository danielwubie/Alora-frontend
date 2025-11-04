import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "../component/Navbar/navbar";
import Footer from "../component/FooterCard/Footer";
import Home from "../pages/home page/home";
import CartPage from "../pages/CartPage/CartPage";
import Login from "../component/login/login"

import SignUp from "../component/signup/SignUp";
import ProfilePage from "../pages/ProfilePage/ProfileP"
import Dresses from "../pages/WomenF-page/Dresses";

function App() {
  
  return (
    <Router>
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/subcategory/13" element={<Dresses/>}/>
      </Routes>

      <Footer />
    </Router>

    // <Dresses/>

  );
}

export default App;
