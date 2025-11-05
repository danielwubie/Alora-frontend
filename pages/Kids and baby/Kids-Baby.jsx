import Styles from '../page.module.css'
import React, { useState } from "react";
import ProductList from "../../component/ProductCard/ProductList";
import { Button, Box } from "@mui/material";

export default function KidsAndBaby() {
  const [selectedSub, setSelectedSub] = useState(null);

  return (
    <>
        <div className={Styles.titlebox}> 
      <h2 className={Styles.title}>Kids And Baby Collection</h2>

      <Box sx={{ mb: 3 }}>
            <Button
                onClick={() => setSelectedSub(null)}
                className={`${Styles.filterbutton} ${selectedSub === null ? Styles.activeBtn : ""}`}>
            All
            </Button>

            <Button
                onClick={() => setSelectedSub({id: "23", name: "Girls"})}
                className={`${Styles.filterbutton} ${selectedSub?.id === "23" ? Styles.activeBtn : ""}`}>
            Girls
            </Button>

            <Button
                onClick={() => setSelectedSub({id: "24", name: "Boys"})}
                className={`${Styles.filterbutton} ${selectedSub?.id === "24" ? Styles.activeBtn : ""}`}>
            Boys
            </Button>

            <Button
                onClick={() => setSelectedSub({id: "25", name: "Baby"})}
                className={`${Styles.filterbutton} ${selectedSub?.id === "25" ? Styles.activeBtn : ""}`}>
            Baby
            </Button>

            <Button
                onClick={() => setSelectedSub({id: "26", name: "Toys"})}
                className={`${Styles.filterbutton} ${selectedSub?.id === "26" ? Styles.activeBtn : ""}`}>
            Toys
            </Button>

           
        
      </Box >
      </div>
      <div className={Styles.contianer}>
      {selectedSub ? (
        <ProductList mode="sub" config={selectedSub.id} title={`Kids And Baby ${selectedSub.name}`} />
      ) : (
        <ProductList mode="catag" title="All Kids And Baby Products" config="37" />
      )}
      </div>
 </>
  );
}