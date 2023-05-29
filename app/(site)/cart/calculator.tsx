"use client"
import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "@/source/store/store";

const Calculator = () => {
    const {product} = useSelector((state:RootState)=>state.cartState)
    const price =product.reduce((sum,i)=>{
        const calc =i.discountPrice&&i.discountPrice<i.price?i.discountPrice:i.price
        return sum+(i.quantity*calc)
    },0)
    return (
        <div>
            <h2>Total: {product.length} items</h2>
            <span>Sub total: {price}</span>
        </div>
    );
};

export default Calculator;
