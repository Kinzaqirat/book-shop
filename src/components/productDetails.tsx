
import urlBuilder from '@sanity/image-url'
import Image from 'next/image'
import React, { useContext } from 'react'
import imageUrlBuilder from '@sanity/image-url'
import Link from "next/link";
import { SanityClient } from '@/sanity/sanity.client'
import { CartContext } from '@/app/context/CartContext'
import { Minus, Plus } from 'lucide-react'

const builder = imageUrlBuilder(SanityClient)

function urlFor(source:any) {
  return builder.image(source)
}

export default function ProductDetails({products}:any) {
  const {qty,add,dec,addProduct,items}:any= useContext(CartContext)
  console.log(items);
  
  return (
    <div>
  








<div className="font-[sans-serif] p-4 bg-gray-100">
  <div className="lg:max-w-6xl max-w-xl mx-auto">
    <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8 max-lg:gap-12 max-sm:gap-8">
      <div className="w-full lg:sticky top-0">
        <div className="flex flex-col gap-4">
          <div className="bg-white shadow p-2">
                   
<img src={urlFor(products.thumbnail [0]).width(200).url()}
className="w-full  aspect-[11/8] object-cover object-top"
alt={products.thumbnail}/>
          </div>

        </div>
      </div>

      <div className="w-full">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-800">{products.name}</h3>
          <div className="flex items-center gap-3 mt-1">
            <div className="flex items-center gap-1">
              <p className="text-base text-gray-500">4</p>
              <svg className="w-4 h-4 fill-purple-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg className="w-4 h-4 fill-purple-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg className="w-4 h-4 fill-purple-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg className="w-4 h-4 fill-purple-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg className="w-4 h-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>
            <span className="text-gray-500">|</span>
            <p className="text-sm text-gray-500">76 Ratings</p>
            <span className="text-gray-500">|</span>
            <p className="text-sm text-gray-500">50 Reviews</p>
          </div>
          <div className="mt-2">
            <p className="text-gray-500 mt-1 text-sm">{products.description}</p>
          </div>

          <div className="flex items-center flex-wrap gap-2 mt-4">
            <p className="text-gray-500 text-base"></p>
            <h4 className="text-purple-800 text-2xl sm:text-3xl font-bold">Rs:{products.price}</h4>
           
          </div>

        
        </div>

        <hr className="my-6 border-gray-300" />

        <div>
          <div className="flex gap-2 items-center border border-gray-300 bg-white px-3 py-2.5 w-max">
            <button type="button" className="border-none outline-none">
            <span onClick={dec}><Minus/></span>
            </button>
            <span className="text-gray-800 text-sm font-semibold px-3"> {qty}</span>
            <button type="button" className="border-none outline-none">
            <span onClick={add}><Plus/></span>
            </button>
          </div>

          <div className="mt-4 flex flex-wrap gap-4 ">
            <button type="button"
              className="px-4 py-3 w-[45%] border border-gray-300 bg-white hover:bg-gray-50 text-gray-800 text-sm font-semibold"  onClick={()=>addProduct(products,qty)}>Add
              to cart</button>
            
          </div>
        </div>

        <hr className="my-6 border-gray-300" />

      

       
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
