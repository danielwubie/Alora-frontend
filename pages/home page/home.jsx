import Styles from "../home page/home.module.css"
import Heroposter from "../../component/heroposter/heroposter"
import ProductList from '../../component/ProductCard/ProductList'
import CatList from '../../component/catagory/categorylist'
export default function Home(){
    return <>
    <div className={Styles.container}>
       
        <Heroposter/>
        <div className={Styles.productcontainer2} >
         <CatList
             title="Featured"
            info="Picked items"
            />
            </div>
        <div className={Styles.productcontainer} >
           <ProductList transform={(products) => products.slice(-4)} title="News Products" info="Descover the leatest trands and must have items"/>
            
        </div>    
        <div className={Styles.productcontainer} >
           <ProductList transform={(products) => products.slice(5,9)} title="Longest selling" info="Descover the longest selling and must have items"/>
            
        </div>  
    </div>
    </>
}