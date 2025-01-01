"use client"
// import ProductDetails from '@/components/productDetails'
// import React from 'react'

// export default function Product() {
//   return (
//     <div>
//        <ProductDetails/>
//     </div>
//   )
// }



import { useParams } from "next/navigation"
import {groq} from  "next-sanity"
import { SanityClient } from "@/sanity/sanity.client";
import ProductDetails from "@/components/productDetails";
import Hero from "@/components/ui/hero";

export default async function Product() {
    const {slug}:any= useParams();
    console.log(slug);
    
    const data=await SanityClient.fetch(groq ` *[_type == "book" ] `)
       console.log(data);
        
        const products=data.find((product:any)=>product.slug.current ==slug)
        console.log(products);
        
    
  return (
    <div>
        <ProductDetails products={products}/>
        {/* <Hero products={products}/> */}
    </div>
  )
}


// import { useParams } from "next/navigation"
// import {groq} from  "next-sanity"
// import { SanityClient } from "@/sanity/sanity.client";

// export default async function ProductDetails() {
//     const {slug}:any= useParams();
//     const data=await SanityClient.fetch(groq `  *[_type=="book" ]
//         `)
//         const products=data.find((product:any)=>product.slug.current ==slug)
//         console.log(products);
        
    
//   return (
//     <div>
//              <ProductDetails/>
//     </div>
//   )
// }
