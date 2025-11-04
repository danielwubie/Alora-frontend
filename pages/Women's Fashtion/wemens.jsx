import React, { useState } from "react";
import ProductList from "../../component/ProductCard/ProductList";
import { Button, Box } from "@mui/material";

export default function Womens() {
  const [selectedSub, setSelectedSub] = useState(null);

  return (
    <> 
    <div>
      <h2>Women's Collection</h2>

      <Box sx={{ mb: 3 }}>
        <Button onClick={() => setSelectedSub(null)}>All</Button>
        <Button onClick={() => setSelectedSub({ id: "13", name: "Dresses" })}>Dresses</Button>
        <Button onClick={() => setSelectedSub({ id: "14", name: "Tops" })}>Tops</Button>
        <Button onClick={() => setSelectedSub({ id: "15", name: "Bottoms" })}>Bottoms</Button>
        <Button onClick={() => setSelectedSub({ id: "16", name: "Shoes" })}>Shoes</Button>
        <Button onClick={() => setSelectedSub({ id: "17", name: "Accessories" })}>Accessories</Button>
      </Box>
    </div>
    <div>
      {selectedSub ? (
        <ProductList mode="sub" config={selectedSub.id} title={`Women's ${selectedSub.name}`} />
      ) : (
        <ProductList mode="all" title="All Women's Products" />
      )}
      </div>
    </>
  );
}