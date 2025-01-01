"use client"
import { SanityConfig } from "@/sanity/sanity.config"
// import { Book, getData } from "@/sanity/sanity.query"
import { NextStudio } from "next-sanity/studio"

export default function SanityStudio(){
  
    return <NextStudio config={SanityConfig} />
}




// export async function Productpage() {
// const data2:Book[] = await getData()

//   return (
//     <div>
      
//     </div>
//   )
// }
