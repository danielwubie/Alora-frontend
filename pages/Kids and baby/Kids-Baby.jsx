import Styles from '../page.module.css';
import React, { useState, useEffect } from "react";
import ProductList from "../../component/ProductCard/ProductList";
import { Button, Box } from "@mui/material";
import { useSearchParams, useNavigate } from 'react-router-dom';

export default function KidsAndBaby() {
  const [selectedSub, setSelectedSub] = useState(null);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const subMap = {
    "23": "Girls",
    "24": "Boys",
    "25": "Babys",
    "26": "Toys",
    
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
        <h2 className={Styles.title}>Kids and Babys Collection</h2>

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
            title={`Kids and Babys: ${selectedSub.name}`}
          />
        ) : (
          <ProductList
            mode="catag"
            title="All Kids and Babys Products"
            config="37"
          />
        )}
      </div>
    </>
  );
}
