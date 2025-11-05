import Styles from '../page.module.css';
import React, { useState, useEffect } from "react";
import ProductList from "../../component/ProductCard/ProductList";
import { Button, Box } from "@mui/material";
import { useSearchParams, useNavigate } from 'react-router-dom';

export default function Furniture() {
  const [selectedSub, setSelectedSub] = useState(null);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const subMap = {
    "37": "Living Room",
    "38": "Bedroom",
    "39": "Dining",
    "40": "Office",
    "41": "Outdoors",
  };

  
  useEffect(() => {
    const subId = searchParams.get('sub');
    if (subId && subMap[subId]) {
      setSelectedSub({ id: subId, name: subMap[subId] });
    } else {
      setSelectedSub(null);
    }
  }, [searchParams]);

  return (
    <>
      <div className={Styles.titlebox}> 
        <h2 className={Styles.title}>Furniture Collection</h2>

        <Box sx={{ mb: 3 }}>
         
          <Button
            onClick={() => {
              setSelectedSub(null);
              navigate("");
            }}
            className={`${Styles.filterbutton} ${selectedSub === null ? Styles.activeBtn : ""}`}
          >
            All
          </Button>

          
          {Object.entries(subMap).map(([id, name]) => (
            <Button
              key={id}
              onClick={() => {
                setSelectedSub({ id, name });
                navigate(`?sub=${id}`);
              }}
              className={`${Styles.filterbutton} ${selectedSub?.id === id ? Styles.activeBtn : ""}`}
            >
              {name}
            </Button>
          ))}
        </Box>
      </div>

      <div className={Styles.contianer}>
        {selectedSub ? (
          <ProductList
            mode="sub"
            config={selectedSub.id}
            title={`Furniture: ${selectedSub.name}`}
          />
        ) : (
          <ProductList
            mode="catag"
            title="All Furniture Products"
            config="40"
          />
        )}
      </div>
    </>
  );
}
