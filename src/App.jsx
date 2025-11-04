import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import  MyCard  from '../component/ProductCard/productCard'
import './App.css'
import ProductList from '../component/ProductCard/ProductList'
import Sidebar from "../component/sidebar/sidebar";
import Footer from "../component/FooterCard/Footer";
import Login from "../component/login/login";
import Heroposter from "../component/heroposter/heroposter"
import PrimarySearchAppBar from "../component/Navbar/navbar"
import Home from "../pages/home page/home"
import { Toolbar } from '@mui/material';
import CatCard from "../component/catagory/categorycard";
import Mens from '../pages/mens clothes/mens'
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
