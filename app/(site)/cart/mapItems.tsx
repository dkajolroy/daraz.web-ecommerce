"use client"
import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/source/store/store";
import Image from "next/image";
import Button from "@/source/components/global/button";
import QuantityForm from "@/source/components/common/quantityForm";
import {removeFromCart} from "@/source/slices/cartSlice";
import Link from "next/link";

const MapItems = () => {

    const dispatch = useDispatch()
    const {product} = useSelector((state:RootState)=>state.cartState)


    return (
        <>
            {
                product.map((item,index)=>(
                    <div className="flex my-2 gap-2 items-center justify-between" key={index}>
                        <div className="flex gap-2 items-center">
                          <Link href={`/product?view=${item._id}`}>
                              <Image className="w-auto rounded h-auto" src={item.thumbnail} alt={"item"} width={40} height={40}/>
                          </Link>
                            <div className="flex flex-col">
                                <Link href={`/product?view=${item._id}`}>
                                    <h2>{item.title.slice(0,40)}</h2>
                                </Link>
                               <div className="flex items-center gap-5">
                                   <div className='text-sm'>
                                       <span>Price: </span>
                                       <span className='text-primary'>৳ {item.discountPrice&&item.discountPrice<item.price? item.discountPrice:item.price}</span>
                                   </div>
                                   <QuantityForm className={"text-sm"} item={item}/>
                               </div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <Button  onClick={()=>dispatch(removeFromCart(item))} className="bg-primary hover:opacity-80 text-sm py-1 text-white rounded px-2" title={"Remove"}/>
                        </div>
                    </div>
                ))
            }
        </>
    );
};

export default MapItems;
