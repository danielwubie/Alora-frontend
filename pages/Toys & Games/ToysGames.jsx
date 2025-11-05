import Styles from '../page.module.css'
import React, { useState } from "react";
import ProductList from "../../component/ProductCard/ProductList";
import { Button, Box } from "@mui/material";

export default function ToynGames() {
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
                onClick={() => setSelectedSub({id: "42", name: "Educational"})}
                className={`${Styles.filterbutton} ${selectedSub?.id === "42" ? Styles.activeBtn : ""}`}>
            Educational
            </Button>

            <Button
                onClick={() => setSelectedSub({id: "43", name: "Action Figures"})}
                className={`${Styles.filterbutton} ${selectedSub?.id === "43" ? Styles.activeBtn : ""}`}>
            Action Figures
            </Button>

            <Button
                onClick={() => setSelectedSub({id: "44", name: "Board games"})}
                className={`${Styles.filterbutton} ${selectedSub?.id === "44" ? Styles.activeBtn : ""}`}>
            Board games
            </Button>

            <Button
                onClick={() => setSelectedSub({id: "45", name: "Electronics"})}
                className={`${Styles.filterbutton} ${selectedSub?.id === "45" ? Styles.activeBtn : ""}`}>
            Electronics
            </Button>

            <Button
            onClick={() => setSelectedSub({id: "46", name: "Outdoors"})}
            className={`${Styles.filterbutton} ${selectedSub?.id === "46" ? Styles.activeBtn : ""}`}
            >
            Outdoors
            </Button>
        
      </Box >
      </div>
      <div className={Styles.contianer}>
      {selectedSub ? (
        <ProductList mode="sub" config={selectedSub.id} title={`Men’s ${selectedSub.name}`} />
      ) : (
        <ProductList mode="catag" title="All Men's Products" config="41" />
      )}
      </div>
 </>
  );
}