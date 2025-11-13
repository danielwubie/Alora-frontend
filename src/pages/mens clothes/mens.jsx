import Styles from '../page.module.css';
import React, { useState, useEffect } from "react";
import ProductList from "../../component/ProductCard/ProductList";
import { Button, Box } from "@mui/material";
import { useSearchParams, useNavigate } from 'react-router-dom';

export default function Mens() {
  const [selectedSub, setSelectedSub] = useState(null);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const subMap = {
    "18": "Accessories",
    "19": "Shirt",
    "20": "Pants",
    "21": "Shoes",
    "22": "Suits",
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
        <h2 className={Styles.title}>Men's  Fashtion Collection</h2>

        <Box sx={{ mb: 3 }}>
         
          <Button
            onClick={() => {
              setSelectedSub(null);
              navigate(location.pathname, { replace: true });
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
            key="sub"
            mode="sub"
            config={selectedSub.id}
            title={`Men's: ${selectedSub.name}`}
          />
        ) : (
          <ProductList
            key="catag"
            mode="catag"
            title="All Men's Fashtion"
            config="2"
          />
        )}
      </div>
    </>
  );
}
