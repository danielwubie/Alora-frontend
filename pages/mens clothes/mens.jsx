import Styles from '../page.module.css'
import React, { useState } from "react";
import ProductList from "../../component/ProductCard/ProductList";
import { Button, Box } from "@mui/material";

export default function Mens() {
  const [selectedSub, setSelectedSub] = useState(null);

  return (
    <>
        <div className={Styles.titlebox}> 
      <h2 className={Styles.title}>Men’s Collection</h2>

      <Box sx={{ mb: 3 }}>
            <Button
                onClick={() => setSelectedSub(null)}
                className={`${Styles.filterbutton} ${selectedSub === null ? Styles.activeBtn : ""}`}>
            All
            </Button>

            <Button
                onClick={() => setSelectedSub({id: "18", name: "Accessories"})}
                className={`${Styles.filterbutton} ${selectedSub?.id === "18" ? Styles.activeBtn : ""}`}>
            Accessories
            </Button>

            <Button
                onClick={() => setSelectedSub({id: "19", name: "Shrits"})}
                className={`${Styles.filterbutton} ${selectedSub?.id === "19" ? Styles.activeBtn : ""}`}>
            Shrits
            </Button>

            <Button
                onClick={() => setSelectedSub({id: "20", name: "Pants"})}
                className={`${Styles.filterbutton} ${selectedSub?.id === "20" ? Styles.activeBtn : ""}`}>
            Pants
            </Button>

            <Button
                onClick={() => setSelectedSub({id: "21", name: "Shoes"})}
                className={`${Styles.filterbutton} ${selectedSub?.id === "21" ? Styles.activeBtn : ""}`}>
            Shoes
            </Button>

            <Button
            onClick={() => setSelectedSub({id: "22", name: "Suits"})}
            className={`${Styles.filterbutton} ${selectedSub?.id === "22" ? Styles.activeBtn : ""}`}
            >
            Suits
            </Button>
        
      </Box >
      </div>
      <div className={Styles.contianer}>
      {selectedSub ? (
        <ProductList mode="sub" config={selectedSub.id} title={`Men’s ${selectedSub.name}`} />
      ) : (
        <ProductList mode="catag" title="All Men's Products" config="2" />
      )}
      </div>
 </>
  );
}