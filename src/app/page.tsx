import Navbar from "@/components/ui/navbar";
// import Home2 from "./blog/page";
import { SanityClient } from "@/sanity/sanity.client";
// import {  getData } from "@/sanity/sanity.query";
import { CartContext } from "./context/CartContext";
import {groq} from  "next-sanity"
import { Image, Slug } from "sanity";
import ProductCard from "@/components/productCard";
import Hero from "@/components/ui/hero";



// export interface Book{
//   name:string,
//   description :string,
//   thumbnail:Image,
//   price:number,
//   genre:{
//      name:string
//   },
//   slug:Slug
// } 

export default async function   Home() {
  const data=await SanityClient.fetch(groq `  *[_type=="book" ]
   `)
    console.log(data);
    
    ;
  
  
  
  return(
    // <Home2/>
    <div>
   <Hero/>

<ProductCard/>

    </div>
  )
}
