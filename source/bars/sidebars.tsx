import React from 'react';
import {adminSidebars} from "@/source/constant/data";
import NavigationBar from "@/source/components/common/navigationBar";

const Sidebars = () => {

    return (
        <div>
            {
                adminSidebars.map((item,i)=>(
                   <NavigationBar item={item} key={i}/>
                ))
            }
        </div>
    );
};

export default Sidebars;
