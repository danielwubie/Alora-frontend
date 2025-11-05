import Styles from '../page.module.css'
import React, { useState } from "react";
import ProductList from "../../component/ProductCard/ProductList";
import { Button, Box } from "@mui/material";

export default function ArtsCrafts() {
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
                onClick={() => setSelectedSub({id: "47", name: "Supllies"})}
                className={`${Styles.filterbutton} ${selectedSub?.id === "47" ? Styles.activeBtn : ""}`}>
            Supllies
            </Button>

            <Button
                onClick={() => setSelectedSub({id: "48", name: "DIY kits"})}
                className={`${Styles.filterbutton} ${selectedSub?.id === "48" ? Styles.activeBtn : ""}`}>
            DIY kits
            </Button>

            <Button
                onClick={() => setSelectedSub({id: "49", name: "painting"})}
                className={`${Styles.filterbutton} ${selectedSub?.id === "49" ? Styles.activeBtn : ""}`}>
            painting
            </Button>

            <Button
                onClick={() => setSelectedSub({id: "50", name: "Scrapbooking"})}
                className={`${Styles.filterbutton} ${selectedSub?.id === "50" ? Styles.activeBtn : ""}`}>
            Scrapbooking
            </Button>

        
      </Box >
      </div>
      <div className={Styles.contianer}>
      {selectedSub ? (
        <ProductList mode="sub" config={selectedSub.id} title={`Men’s ${selectedSub.name}`} />
      ) : (
        <ProductList mode="catag" title="All Men's Products" config="42" />
      )}
      </div>
 </>
  );
}