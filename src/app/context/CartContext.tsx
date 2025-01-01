"use client"
import {  createContext,useState } from "react"

 export const CartContext= createContext({})

 
export const CartProvider= ({children}:any)=>{
    const [qty,setQuanity]=useState(1)
    const [items,setItems]=useState<any[]>([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const add = ()=>(
        setQuanity((prequantity)=>prequantity +1)
    )
    const dec = ()=>{
       
        if (qty > 0) {
            if(qty ===1) return 1
            setQuanity((prevQunality) => prevQunality - 1);
          }
       
        
    }
    
    const addProduct = (products:any, quantity:number)=>{
        // check that product exits in cart and has same id
        let checkProduct = items.find((item:any)=>item._id === products._id)
        // updated cart icon
        setTotalQuantity((pre)=>pre +qty);
        // set total price
        setTotalPrice((prePrice)=> prePrice + products.price*qty)
        // delete
        

// if that item is exits then only increase their quantity not add same product again and again
if(checkProduct){
// if this product is exist
const updatedCart=items.map((CartProduct:any)=>{
    if(CartProduct._id === products._id){
return{
      ...CartProduct, quantity: CartProduct.quantity + qty

}
    }
    else{

        CartProduct;
    }

})
// to upadated cart 
setItems(updatedCart)
}else{
    // if that product is not exist
           // product qunatity is equal 
           products.quantity=qty
           // pass array of items and products
           setItems([...items, {...products}])
}

 
    }

    const itemQty=(id:any,value:any)=>{
        let FoundProduct = items.find((item)=>item._id === id)
        let index=items.findIndex((Product)=>Product._id===id)
let otherProducts= items.filter((item)=> item._id !==id)
let UpdatedCart=[...items]
        if(value ==="plus"){
            UpdatedCart[index]={...UpdatedCart[index],quantity:UpdatedCart[index].quantity+1}
            setItems([...UpdatedCart])
            setTotalPrice((pre)=>pre +FoundProduct.price)
            setTotalQuantity((pre)=> pre +1)
        }
        else if(value ==="sub" && FoundProduct.qty>1){

            // if (FoundProduct.qty>1){
                UpdatedCart[index]={...UpdatedCart[index],quantity:UpdatedCart[index].quantity-1}
                setItems([...UpdatedCart])
                setTotalPrice((pre)=>pre -FoundProduct.price)
                setTotalQuantity((pre)=> pre -1)
            // }
            
        }
       
    }

    const remove=(product:any)=>{

        let FoundProduct = items.find((item)=>item._id === product._id)
        const NewItems= items.filter((item)=>item._id !==product._id)


        setItems(NewItems)
        setTotalPrice((pre)=> pre - FoundProduct.price*FoundProduct.quantity)
        setTotalQuantity((pre)=>pre- FoundProduct.quantity)
    }
return(

    <CartContext.Provider
    value={{totalPrice,totalQuantity,qty,add ,dec,items,addProduct,itemQty,remove}} >

        <div>{children}</div>
        
    </CartContext.Provider>
)

   
 }