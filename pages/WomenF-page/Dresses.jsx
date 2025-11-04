import ProductList from "../../component/ProductCard/ProductList"
import styles from "../WomenF-page/Dresses.module.css"

 function Dresses() {
  return (
    <>
      <div>
        <div className={styles.Header}>
          <h1 className={styles.Title}>Dresses</h1>
          <p  className={styles.text}>Discover our collection of dresses</p>
        </div>
        <ProductList/>
            
      </div>
    </>
  );
}

export default Dresses;