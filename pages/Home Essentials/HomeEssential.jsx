import Styles from '../page.module.css'
import React, { useState } from "react";
import ProductList from "../../component/ProductCard/ProductList";
import { Button, Box } from "@mui/material";

export default function HomeEssentials() {
  const [selectedSub, setSelectedSub] = useState(null);

  return (
    <>
        <div className={Styles.titlebox}> 
      <h2 className={Styles.title}>Home Essentials Collection</h2>

      <Box sx={{ mb: 3 }}>
            <Button
                onClick={() => setSelectedSub(null)}
                className={`${Styles.filterbutton} ${selectedSub === null ? Styles.activeBtn : ""}`}>
            All
            </Button>

            <Button
                onClick={() => setSelectedSub({id: "32", name: "Kitchen"})}
                className={`${Styles.filterbutton} ${selectedSub?.id === "32" ? Styles.activeBtn : ""}`}>
            Kitchen
            </Button>

            <Button
                onClick={() => setSelectedSub({id: "33", name: "Bathroom"})}
                className={`${Styles.filterbutton} ${selectedSub?.id === "33" ? Styles.activeBtn : ""}`}>
            Bathroom
            </Button>

            <Button
                onClick={() => setSelectedSub({id: "34", name: "Cleaning"})}
                className={`${Styles.filterbutton} ${selectedSub?.id === "34" ? Styles.activeBtn : ""}`}>
            Cleaning
            </Button>

            <Button
                onClick={() => setSelectedSub({id: "35", name: "Storage"})}
                className={`${Styles.filterbutton} ${selectedSub?.id === "35" ? Styles.activeBtn : ""}`}>
            Storage
            </Button>

            <Button
            onClick={() => setSelectedSub({id: "36", name: "Decor"})}
            className={`${Styles.filterbutton} ${selectedSub?.id === "36" ? Styles.activeBtn : ""}`}
            >
            Decor
            </Button>
        
      </Box >
      </div>
      <div className={Styles.contianer}>
      {selectedSub ? (
        <ProductList mode="sub" config={selectedSub.id} title={`Home Essentials ${selectedSub.name}`} />
      ) : (
        <ProductList mode="catag" title="All Home Essentials Products" config="39" />
      )}
      </div>
 </>
  );
}