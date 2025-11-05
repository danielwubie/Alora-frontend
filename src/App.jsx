import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "../component/Navbar/navbar";
import Footer from "../component/FooterCard/Footer";
import Home from "../pages/home page/home";
import CartPage from "../pages/CartPage/CartPage";
import Login from "../component/login/login";
import SignUp from "../component/signup/SignUp";
import ProfilePage from "../pages/ProfilePage/ProfileP";
import Womens from "../pages/Women's Fashtion/wemens";
import Mens from "../pages/mens clothes/mens";
import KidsAndBaby from "../pages/Kids and baby/Kids-Baby";
import HomeEssentials from "../pages/Home Essentials/HomeEssential";
import Furniture from "../pages/Furniture/Furniture";
import ToynGames from "../pages/Toys & Games/ToysGames"
import BeautyCare from "../pages/Beauty & Care/BeautyCare"
import ArtsCrafts from "../pages/Arts & crafts/Artscrafts"

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/category/1" element={<Womens />} />
        <Route path="/category/2" element={<Mens />} />
        <Route path="/category/37" element={<KidsAndBaby />} />
        <Route path="/category/38" element={<BeautyCare />} />
        <Route path="/category/39" element={<HomeEssentials />} />
        <Route path="/category/40" element={<Furniture />} />
        <Route path="/category/41" element={<ToynGames />} />
        <Route path="/category/42" element={<ArtsCrafts />} />
        
       
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
