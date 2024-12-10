import { Foods } from "../App";
import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
type Props = {
    foods: Food[];
    increase:(id:number)=>void;
    decrease:(id:number)=>void;
    addToCart:(food:Food)=>void;


  }
  
export default function Menuitems({foods,increase,decrease,addToCart }: Props) {
   const handleAddToCart=(food:Food)=>{
    addToCart(food);
    toast.success("Added!")
}
return(
   <main className="mt-20  md:mt-28">
          <h1 className='text-center text-3xl font-extrabold text-orange-950 m-2 '>Menu</h1>
     <section  className='grid grid-cols-2 justify-items-center	gap-3  mr-1 mt-32
     md :grid-cols-3 justify-items-center	gap-3 mr-1 mt-24
     '>
      
        {foods.map((food) => (  <div key={food.id} className='w-48 flex flex-col items-center relative my-14 border-solid border-2 rounded-full p-1 md:w-56' >
          <img src={food.img} className="size-32  z-10 absolute bottom-[340px] 	" alt="food" />
          <div className='  rounded-full	bg-slate-900 text-orange-100	flex flex-col items-center p-4 pt-14 	 gap-2 h-96 '>
          <div className='font-extrabold	text-center'>{food.name}</div>
          <div className='font-medium	h-64'>{food.description}</div>
          <div className='text-red-500 border border-2 border-red-500 rounded-full p-1 text-sm'> Stock:{food.stock}</div>
          <div className='flex flex-row items-center'>
          <div className='font-medium	'>{food.price}$</div>
          <button className='bg-cover bg-center size-10' style={{backgroundImage:"url('addcart.png')"}}
          onClick={()=>handleAddToCart(food)}
          ></button>
          </div>

          <div className='flex flex-row w-20 	'>
          <button className='size-6 bg-orange-400	text-black	font-semibold	rounded-lg text-base  ' onClick={()=>increase(food.id)}>+</button>
          <p   id="number" className='w-10  	bg-slate-900	text-white	outline-none	'>{food.orders}</p>
            <button className='size-6 bg-orange-400 text-black font-semibold	rounded-lg	text-base	'
            onClick={()=>decrease(food.id)}
           >-</button>
          </div>
           
          </div>
        </div>))}

      </section>
   </main>
)
}