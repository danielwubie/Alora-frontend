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
import Womens from "../pages/Women's Fashtion/wemens";
import Mens from '../pages/mens clothes/mens'

import BeautyCare from '../pages/Beauty & Care/BeautyCare'
import ArtsCrafts from '../pages/Arts & crafts/Artscrafts'
import ToynGames from '../pages/Toys & Games/ToysGames'
function App() {
  
  return (
    <>
       
       <PrimarySearchAppBar/>
        <Toolbar />
       <Mens/>
       
     
    </>
  )
}

export default App;
