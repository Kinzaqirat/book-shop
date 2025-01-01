import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  

export default function Categorie() {
  return (
    <div className="flex items-center justify-center sacramento-regular">
      <DropdownMenu>
  <DropdownMenuTrigger className="text-[30px]  cursor-pointer text-white">Categories</DropdownMenuTrigger>
  <DropdownMenuContent className="sacramento-regular text-[40px]">
    <DropdownMenuLabel className="sacramento-regular text-[30px] text-white">Geners</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem  className="sacramento-regular text-[30px] cursor-pointer text-white"> Happy Ending</DropdownMenuItem>
    <DropdownMenuItem  className="sacramento-regular text-[30px]  cursor-pointer text-white">Sad</DropdownMenuItem>
    <DropdownMenuItem  className="sacramento-regular text-[30px]  cursor-pointer text-white ">Suspense</DropdownMenuItem>
    <DropdownMenuItem  className="sacramento-regular text-[30px]  cursor-pointer text-white">Mystery</DropdownMenuItem>
    <DropdownMenuItem  className="sacramento-regular text-[30px]  cursor-pointer text-white">Horror</DropdownMenuItem>
    <DropdownMenuItem  className="sacramento-regular text-[30px]  cursor-pointer text-white">Spiritual</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

    </div>
  )
}
