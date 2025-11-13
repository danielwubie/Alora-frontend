import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "../src/component/Navbar/navbar";
import Footer from "../src/component/FooterCard/Footer";
import Home from "../src/pages/home page/home";
import CartPage from "../src/pages/CartPage/CartPage";
import Login from "../src/component/login/login";
import SignUp from "../src/component/signup/SignUp";
import ProfilePage from "../src/pages/ProfilePage/ProfileP";
import Womens from "../src/pages/Women's Fashtion/wemens";
import Mens from "../src/pages/mens clothes/mens";
import KidsAndBaby from "../src/pages/Kids and baby/Kids-Baby";
import HomeEssentials from "../src/pages/Home Essentials/HomeEssential";
import Furniture from "../src/pages/Furniture/Furniture";
import ToynGames from "../src/pages/Toys & Games/ToysGames"
import BeautyCare from "../src/pages/Beauty & Care/BeautyCare"
import ArtsCrafts from "../src/pages/Arts & crafts/Artscrafts"

import SearchResultsPage from "../src/pages/SearchResultsPage/SearchResultsPage";
import ScrollToTop from '../src/component/sroll'
function App() {

  return (
    <Router>
      <ScrollToTop />
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
        
          <Route path="/search" element={<SearchResultsPage />} />
       
      </Routes>

      <Footer />
    </Router>
    
  );
}

export default App;
