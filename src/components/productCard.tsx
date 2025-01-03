import { SanityClient } from "@/sanity/sanity.client";
import { Image,  Slug } from "sanity";
import {groq} from  "next-sanity"
// import Image from "next/image";


import imageUrlBuilder from '@sanity/image-url'
import Link from "next/link";

const builder = imageUrlBuilder(SanityClient)

function urlFor(source:any) {
  return builder.image(source)
}
export interface Book{
    name:string,
    description :string,
    thumbnail:Image,
    price:number,
    genre:{
       name:string
    },
    slug:Slug
  } 
export default async  function     ProductCard() {
    const data=await SanityClient.fetch(groq ` *[_type == "book" ] 
        `)
         console.log(data);
  return (
  
    <div className="flex justify-center py-20">
      <br />
      
  <div className="decoration-transparent  grid grid-cols-2  gap-[100px] w-[400px] h-[400px]  max-sm:grid-cols-1">
   {data.map((items:any,index:number)=>(
 <div className="flex justify-center">
<Link href={`book/${items.slug.current}`}>  <img src={urlFor(items.thumbnail && items.thumbnail [0]).url()}
alt={items.slug}
className=" h-[200px] rounded w-[200px]"
/>
<div className="py-3">
<h1 className="text-black text-2xl max-sm:text-[20px]  ">{items.name}</h1>
<br />
<button className="text-white bg-yellow-400 w-[150px] h-[50px] rounded">Veiw more..</button>
</div>
</Link>
 </div>


   ))}
    </div>
    </div> 
  )
}

