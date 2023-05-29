import React from 'react';
import {vendorSidebars} from "@/source/constant/data";
import NavigationBar from "@/source/components/common/navigationBar";

const ShopSidebar = () => {
    return (
        <div>
            {
                vendorSidebars.map((item,i)=>(
                    <NavigationBar item={item} key={i}/>
                ))
            }
        </div>
    );
};

export default ShopSidebar;
