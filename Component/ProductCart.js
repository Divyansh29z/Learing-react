
import { Productitems } from "./Utility/Constant";
import ProductItems from "./ProductItems";
import { useState } from "react";
const Productcart = () => {
    const [item, setitem] = useState(Productitems);
    return (
        <div className="Main">
            <div>
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