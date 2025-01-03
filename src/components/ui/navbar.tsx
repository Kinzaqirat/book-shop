"use client"

import { FaBook } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { CiSearch } from "react-icons/ci";

import { CiMenuBurger } from "react-icons/ci";
import Categorie from "./categorie";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";

import { IoBagOutline } from "react-icons/io5";
import Cart from "./Cart";
import { CartContext } from "@/app/context/CartContext";
import AddCart from "./Cart";
import Link from "next/link";

export default function Navbar() {
//   const [search,setSeacrh]=useState<string>("");
//   const router = useRouter();
//   const handleSearch= async ()=>{
// router.push(`/search/${search}`)
// const result = await fetch('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyCChHg-E02ruzdUQOOh7OytyES1QwIqn3c ')
  // }
  const {totalQuantity}:any=useContext(CartContext)
  return (
    <>
 <div className="w-full h-[90px] xl:px-64 bg-white py-3 max-sm:px-32  ">
<div className="flex justify-between" >
<Link href={"/"}><h1 className="text-2xl font-bold text-yellow-400">Shop</h1></Link>

  
  <AddCart/> 



</div>


 </div>
 {/* <Cart }/> */}
 </>
  )
}


// <div className="lg:hidden md:hidden">

// <Sheet >
//   <SheetTrigger><CiMenuBurger className=" text-white  w-[25px] h-[20px] mt-1 " /></SheetTrigger>
//   <SheetContent className="bg-white">
//     <SheetHeader>
//       <SheetTitle className="sacramento-regular text-[40px] font-bold">Menu Bar</SheetTitle>
//       <SheetDescription>
//    <ul className="sacramento-regular text-[30px]">
//     <li>Home </li>
//     <br />
//     <li>Contact</li>
//     <br />
//     <li>About</li>
//    </ul>
//       </SheetDescription>
//     </SheetHeader>
//   </SheetContent>
// </Sheet>
// </div>