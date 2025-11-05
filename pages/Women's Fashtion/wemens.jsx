import Styles from '../page.module.css'
import React, { useState } from "react";
import ProductList from "../../component/ProductCard/ProductList";
import { Button, Box } from "@mui/material";

export default function Womens() {
  const [selectedSub, setSelectedSub] = useState(null);

  return (
    <>
        <div className={Styles.titlebox}> 
      <h2 className={Styles.title}>Women's Collection</h2>

      <Box sx={{ mb: 3 }}>
            <Button
                onClick={() => setSelectedSub(null)}
                className={`${Styles.filterbutton} ${selectedSub === null ? Styles.activeBtn : ""}`}>
            All
            </Button>

            <Button
                onClick={() => setSelectedSub({id: "13", name: "Dresses"})}
                className={`${Styles.filterbutton} ${selectedSub?.id === "13" ? Styles.activeBtn : ""}`}>
            Dresses
            </Button>

            <Button
                onClick={() => setSelectedSub({id: "14", name: "Tops"})}
                className={`${Styles.filterbutton} ${selectedSub?.id === "14" ? Styles.activeBtn : ""}`}>
            Tops
            </Button>

            <Button
                onClick={() => setSelectedSub({id: "15", name: "Bottoms"})}
                className={`${Styles.filterbutton} ${selectedSub?.id === "15" ? Styles.activeBtn : ""}`}>
            Bottoms
            </Button>

            <Button
                onClick={() => setSelectedSub({id: "16", name: "Shoes"})}
                className={`${Styles.filterbutton} ${selectedSub?.id === "16" ? Styles.activeBtn : ""}`}>
            Shoes
            </Button>

            <Button
            onClick={() => setSelectedSub({id: "17", name: "Accessories"})}
            className={`${Styles.filterbutton} ${selectedSub?.id === "17" ? Styles.activeBtn : ""}`}
            >
            Accessories
            </Button>
        
      </Box >
      </div>
      <div className={Styles.contianer}>
      {selectedSub ? (
        <ProductList mode="sub" config={selectedSub.id} title={`Women's ${selectedSub.name}`} />
      ) : (
        <ProductList mode="catag" title="All Women's Products" config="1" />
      )}
      </div>
 </>
  );
}