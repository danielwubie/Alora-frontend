import Styles from "../home page/home.module.css"
import Heroposter from "../../component/heroposter/heroposter"
import ProductList from '../../component/ProductCard/ProductList'
import CatList from '../../component/catagory/categorylist'
import React, { useState, useEffect } from "react";
import Snackbar from '@mui/material/Snackbar'
import { useLocation } from "react-router-dom";
export default function Home(){
    const [message,setMessage]= useState("")
      const [color,setColor]= useState("")
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const handleClosee = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  useEffect(() => {
    
   
if(location.state?.toast){ 
    setMessage(location.state.message);                
    setColor( "#5aebaaff");   
    setOpen(true);  }
                  
}, [location.state]);
    return <>
    <div className={Styles.container}>
       
        <Heroposter/>
        <div className={Styles.productcontainer2} >
         <CatList
             title="Featured"
            info="Picked items"
            />
            </div>
        <div className={Styles.productcontainer} >
           <ProductList transform={(products) => products.slice(-4)} title="News Products" info="Descover the leatest trands and must have items"/>
            
        </div>    
        <div className={Styles.productcontainer} >
           <ProductList transform={(products) => products.slice(5,9)} title="Longest selling" info="Descover the longest selling and must have items"/>
            
        </div>  
        <Snackbar
                    open={open}
                    autoHideDuration={2000}
                    onClose={handleClosee}
                    message={message}
                    sx={{
                "& .MuiSnackbarContent-root": {
                  backgroundColor: `${color}`,
                  color: "#fff",
                  borderRadius: "10px",
                  fontSize: "16px",
                  fontWeight: "600",
                  padding: "10px 16px",
                }
              }}
                  />
    </div>
    </>
}