
import { Productitems } from "./Utility/Constant";
import ProductItems from "./ProductItems";
import { useEffect, useState } from "react";
import { __await } from "tslib";
import Skeleton from "./Skeleton"

const Productcart = () => {

const [item, setitem] = useState([]);
const[searchText , setsearchText]  = useState("")   

useEffect(() => {
fetchApi();
}, [])

async function fetchApi() {
const data = await fetch('https://fakestoreapi.com/products')
const ndata = await data.json()
setitem(ndata)
}



return  item.length === 0 ? <Skeleton/> :  (
<div className="Main">
    <div>
        <input type="text" onChange={(e)=> setsearchText(e.target.value)} value={searchText} />
        <button onClick={()=>{
             const filterdata =  Productitems.filter((item)=>item.title.toLowerCase().includes(searchText.toLowerCase()))
             setitem(filterdata)
 }}>Search</button>



        <button onClick={() => {
            const item = Productitems.filter((item) => item.rating.rate >= 4)
            setitem(item);

        }} >Filter</button>
    </div>

    <div className="ProductCart">
        {
            item.map((product, index) => {
                return (
                    <ProductItems itsMychoice={product} />
                )
            })
        }
    </div>
</div>

)
}

export default Productcart