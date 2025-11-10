import React from "react";
import { useLocation } from "react-router-dom";
import ProductList from "../../component/ProductCard/ProductList";
import Styles from '../page.module.css';

function SearchResultsPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get("query") || "";

  return (
    <div className={Styles.contianer}>
      <ProductList
        mode="all"
        transform={(products) => {
          if (!query) return products;
          return products.filter(
            (p) =>
              p.name.toLowerCase().includes(query.toLowerCase()) ||
              p.description.toLowerCase().includes(query.toLowerCase())
          );
        }}
        title="Search Results"
        info={query ? `Results for "${query}"` : "No query entered"}
      />
    </div>
  );
}

export default SearchResultsPage;
