import Styles from '../page.module.css'
import React, { useState } from "react";
import ProductList from "../../component/ProductCard/ProductList";
import { Button, Box } from "@mui/material";

export default function Furniture() {
  const [selectedSub, setSelectedSub] = useState(null);

  return (
    <>
        <div className={Styles.titlebox}> 
      <h2 className={Styles.title}>Furniture Collection</h2>

      <Box sx={{ mb: 3 }}>
            <Button
                onClick={() => setSelectedSub(null)}
                className={`${Styles.filterbutton} ${selectedSub === null ? Styles.activeBtn : ""}`}>
            All
            </Button>

            <Button
                onClick={() => setSelectedSub({id: "37", name: "Living Room"})}
                className={`${Styles.filterbutton} ${selectedSub?.id === "37" ? Styles.activeBtn : ""}`}>
            Living Room
            </Button>

            <Button
                onClick={() => setSelectedSub({id: "38", name: "Bedroom"})}
                className={`${Styles.filterbutton} ${selectedSub?.id === "38" ? Styles.activeBtn : ""}`}>
            Bedroom
            </Button>

            <Button
                onClick={() => setSelectedSub({id: "39", name: "Dinig"})}
                className={`${Styles.filterbutton} ${selectedSub?.id === "39" ? Styles.activeBtn : ""}`}>
            Dinig
            </Button>

            <Button
                onClick={() => setSelectedSub({id: "40", name: "Office"})}
                className={`${Styles.filterbutton} ${selectedSub?.id === "40" ? Styles.activeBtn : ""}`}>
            Office
            </Button>

            <Button
            onClick={() => setSelectedSub({id: "41", name: "Outdoors"})}
            className={`${Styles.filterbutton} ${selectedSub?.id === "41" ? Styles.activeBtn : ""}`}
            >
            Outdoors
            </Button>
        
      </Box >
      </div>
      <div className={Styles.contianer}>
      {selectedSub ? (
        <ProductList mode="sub" config={selectedSub.id} title={`Furniture ${selectedSub.name}`} />
      ) : (
        <ProductList mode="catag" title="All Furniture Products" config="40" />
      )}
      </div>
 </>
  );
}