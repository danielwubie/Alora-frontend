import Styles from '../page.module.css'
import React, { useState } from "react";
import ProductList from "../../component/ProductCard/ProductList";
import { Button, Box } from "@mui/material";

export default function BeautyCare() {
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
                onClick={() => setSelectedSub({id: "27", name: "Skin care"})}
                className={`${Styles.filterbutton} ${selectedSub?.id === "27" ? Styles.activeBtn : ""}`}>
            Skin care
            </Button>

            <Button
                onClick={() => setSelectedSub({id: "28", name: "Hair care"})}
                className={`${Styles.filterbutton} ${selectedSub?.id === "28" ? Styles.activeBtn : ""}`}>
            Hair care
            </Button>

            <Button
                onClick={() => setSelectedSub({id: "29", name: "Body care"})}
                className={`${Styles.filterbutton} ${selectedSub?.id === "29" ? Styles.activeBtn : ""}`}>
            Body care
            </Button>

            <Button
                onClick={() => setSelectedSub({id: "30", name: "Fragrance"})}
                className={`${Styles.filterbutton} ${selectedSub?.id === "30" ? Styles.activeBtn : ""}`}>
            Fragrance
            </Button>

            <Button
            onClick={() => setSelectedSub({id: "31", name: "Makeup"})}
            className={`${Styles.filterbutton} ${selectedSub?.id === "31" ? Styles.activeBtn : ""}`}
            >
            Makeup
            </Button>
        
      </Box >
      </div>
      <div className={Styles.contianer}>
      {selectedSub ? (
        <ProductList mode="sub" config={selectedSub.id} title={`Men’s ${selectedSub.name}`} />
      ) : (
        <ProductList mode="catag" title="All Men's Products" config="38" />
      )}
      </div>
 </>
  );
}