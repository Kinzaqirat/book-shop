import { SanityClient } from '@/sanity/sanity.client'
import { groq } from 'next-sanity'
import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link'


const builder = imageUrlBuilder(SanityClient)

function urlFor(source:any) {
  return builder.image(source)
}


export default async function Hero({products}:any) {
    const data =await SanityClient.fetch(groq`*[_type == "book" && _id=="610869d9-2a07-4d1a-b3d2-36a4a82a4f26" ]`)
  return (
    <div >
        {data.map((item:any)=>(
        <Link href={`book/${item.slug.current}`}> <div>
        <div className="grid md:grid-cols-2 items-center md:gap-4 gap-8 font-[sans-serif] max-w-5xl max-md:max-w-md mx-auto">
<div className="max-md:order-1 max-md:text-center">
    <h1 className='text-3xl'>NEW ARRIVAL</h1>
    <br />
<h3 className="md:text-3xl text-2xl md:leading-10 font-bold text-yellow-400">{item.name}</h3>
<p className="mt-4 text-sm text-gray-600">{item.description}</p>
<button type="button" className="px-5 py-2.5 mt-8 rounded text-sm outline-none tracking-wide bg-blue-600 text-white hover:bg-blue-700">Explore</button>
</div>
<div className="md:h-[470px]  rounded">

<img src={urlFor(item.thumbnail [0]).width(200).url()}
className='w-full h-full md:object-contain'
alt={item.thumbnail}/>
</div>
</div>
 </div></Link>
        ))}
      
    </div>
  )
}
