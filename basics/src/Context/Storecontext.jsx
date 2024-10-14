import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const Storecontext = createContext(null);

const Storecontextprovider = (props) => {
    const [cartitem, setcartitem] = useState({});

    const addtocart = (itemid) => { 
        if (!cartitem[itemid]) {
            setcartitem((prev) => ({ ...prev, [itemid]: 1 }));
        } else {
            setcartitem((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
        }
    };

    const removefromcart = (itemid) => {
            setcartitem((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }));
        
    };

    const gettotalcartamount=()=>{
        let totalamount=0;
        for(const item in cartitem)
        {
            if(cartitem[item]>0)
            {
                let iteminfo=food_list.find((product)=>product._id===item)
                totalamount+=iteminfo.price*cartitem[item];
            }
           
        }
        return totalamount;
    }

    const contextvalue = {
        food_list,
        cartitem,
        setcartitem,
        addtocart,
        removefromcart,
        gettotalcartamount
    };

    return (
        <Storecontext.Provider value={contextvalue}>
            {props.children}
        </Storecontext.Provider>
    );
};

export default Storecontextprovider;
