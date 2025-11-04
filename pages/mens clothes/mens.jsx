import React, { useState } from "react";
import ProductList from "../../component/ProductCard/ProductList";
import { Button, Box } from "@mui/material";

export default function Mens() {
  const [selectedSub, setSelectedSub] = useState(null);

  return (
    <> 
    <div>
      <h2>Men’s Collection</h2>

      <Box sx={{ mb: 3 }}>
        <Button onClick={() => setSelectedSub({ id: "13", name: "Shirts" })}>Shirts</Button>
        <Button onClick={() => setSelectedSub({ id: "2", name: "Pants" })}>Pants</Button>
        <Button onClick={() => setSelectedSub({ id: "28", name: "Shoes" })}>Shoes</Button>
        <Button onClick={() => setSelectedSub(null)}>All</Button>
      </Box>
    </div>
    <div>
      {selectedSub ? (
        <ProductList mode="sub" config={selectedSub.id} title={`Men’s ${selectedSub.name}`} />
      ) : (
        <ProductList mode="all" title="All Men's Products" />
      )}
      </div>
    </>
  );
}