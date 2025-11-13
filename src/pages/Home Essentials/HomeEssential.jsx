import Styles from '../page.module.css';
import React, { useState, useEffect } from "react";
import ProductList from "../../component/ProductCard/ProductList";
import { Button, Box } from "@mui/material";
import { useSearchParams, useNavigate } from 'react-router-dom';

export default function HomeEssentials() {
  const [selectedSub, setSelectedSub] = useState(null);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const subMap = {
    "32": "Kitchen",
    "33": "Bathroom",
    "34": "Cleaning",
    "35": "Storage",
    "36": "Decor",
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
        <h2 className={Styles.title}>Home Essential Collection</h2>

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
            key="sub"
            mode="sub"
            config={selectedSub.id}
            title={`Home Essential: ${selectedSub.name}`}
          />
        ) : (
          <ProductList
            key="catag"
            mode="catag"
            title="All Home Essential Products"
            config="39"
          />
        )}
      </div>
    </>
  );
}
