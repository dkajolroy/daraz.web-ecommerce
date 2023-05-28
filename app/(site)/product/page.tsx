import React from 'react';
import {products} from "@/source/constant/dummy";
import Breadcrumbs from "@/source/components/global/breadcrumbs";
import Button from "@/source/components/global/button";
import Rating from "@/source/components/global/rating";
import {discountCalculator} from "@/source/utils/generator";
import ProductCarousel from "@/source/components/global/productCarousel";
import ImageMagnifiers from "@/app/(site)/product/imageMagnifiers";

type Props = {
    searchParams: { view: string | undefined }
}
const ViewProduct = ({searchParams: {view}}: Props) => {
    const data = products.find(x => x._id === view)


    // Home > category > subcategory > child-category > product name
    const breadcrumbList = [
        {
            title: "Category",
            href: `/product?view=${view}`
        }, {
            title: "Subcategory",
            href: `/product?view=${view}`
        }, {
            title: 'Child-category',
            href: `/product?view=${view}`
        }, {
            title: "Product name",
            href: `/product?view=${view}`
        }
    ]
    return (
        <div className="container">
            <Breadcrumbs list={breadcrumbList}/>
            {
                !view || !data ?
                    <div className='h-[75vh] flex justify-center items-center'>
                        <h2 className='text-3xl font-bold text-primary'>Product not found</h2>
                    </div>
                    : <div>
                        {/* View product column */}
                        <div className="grid bg-white p-2 gap-2 grid-cols-3 md:grid-cols-7">
                            {/*Col-1*/}
                            <div className="lg:col-span-2 col-span-3 md:col-span-3">
                               <div className="flex flex-col gap-2">
                                   <div className="flex">
                                      <ImageMagnifiers image={data.thumbnail} />
                                   </div>
                                      <div className="flex overflow-hidden relative justify-center">
                                         <div className="w-10/12">
                                             <ProductCarousel images={data.images}/>
                                         </div>
                                      </div>
                               </div>
                            </div>
                            {/*Col-2*/}
                            <div className="lg:col-span-3 col-span-3   md:col-span-4">
                                <h2 className="text-xl">{data.title}</h2>
                                <div className="my-2 flex items-center gap-2">
                                    <Rating value={3.6}/>
                                    <span className="text-sm text-blue-500">29 ratings</span>
                                </div>

                                {/*  Brand  */}
                                <div className="flex items-center">
                                    <span className="text-gray-500">Brand:</span>
                                    <div className="flex items-center">
                                        <span className="mx-1 text-sm text-blue-500">No BrandMore</span> |
                                        <span className="mx-1 text-sm text-blue-500">Men from No Brand</span>
                                    </div>
                                </div>
                                <div className="bg-gray-200 my-4 h-[1px]"></div>


                                {/*Price*/}
                                <span className="text-primary block font-medium text-3xl">
                                  ৳ {data.discountPrice && data.discountPrice < data.price
                                                                ? data.discountPrice
                                                                : data.price}
                                </span>
                                <div className="flex items-center gap-2">
                                    {data.price > data.discountPrice ? (
                                        <div>
                                            <span className="line-through text-sm text-slate-500">
                                             ৳{data.price}
                                            </span>
                                        </div>
                                    ) : null}
                                    {data.price > data.discountPrice ? (
                                        <span className="text-sm">
                                          -{discountCalculator(data.price, data.discountPrice).toFixed(2) + "%"}
                                        </span>

                                    ) : null}
                                </div>
                                <div className="bg-gray-200 my-4 h-[1px]"></div>

                                {/* Color and sizes information */}
                                <div>
                                    {/* Color */}
                                    <div className="flex">
                                        <h4>Color</h4>
                                    </div>
                                    <div className="flex">
                                        <h4>Sizes</h4>
                                    </div>
                                    <div className="flex">
                                        <h4>Quantity</h4>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Button className="bg-blue-400  py-2 flex-1 text-white" title="Buy Now" />
                                    <Button className="bg-primary  py-2 flex-1 text-white" title="Add to cart" />
                                </div>

                            </div>
                            {/*Col-3*/}
                            <div className="lg:col-span-2 col-span-3  md:col-span-7">
                                {/*Heading*/}
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500">Delivery</span>
                                    <span className="text-sm text-gray-500"><i className="bi bi-info-circle"></i></span>
                                </div>
                                {/*Address*/}
                                <div className="flex items-center my-2">
                                <span className="text-xl mx-2">
                                    <i className="bi bi-geo-alt"></i>
                                </span>
                                    <span className='text-[15px] leading-none'>
                                    Dhaka, Dhaka North, Banani Road No. 12 - 19
                                </span>
                                    <Button title="CHANGE" className="text-blue-500 hover:text-blue-600 transition"/>
                                </div>
                            </div>
                        </div>
                        {/*Description*/}

                    </div>
            }
        </div>
    );
};

export default ViewProduct;
