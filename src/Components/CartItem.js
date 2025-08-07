import React from 'react'
import toast from 'react-hot-toast';
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import{remove} from "../redux/CartSlice";

const CartItem = ({item,itemIndex}) => {
  
  const dispatch = useDispatch();
  const removeFromCart = ()=>{
     dispatch(remove(item.id));
     toast.success("Item Removed");
  }

  return (
    <div className=''>
      <div className='flex justify-center items-center gap-5 p-3'>
         
         <div className='w-[30%]'>
           <img src={item.image} className="object-cover"/>
         </div>

         <div className='w-[70%] space-y-5'>
           <h1 className="text-gray-700 font-semibold text-xl">{item.title}</h1>
           <h1 className=" text-gray-400 font-medium text-base">{item.description}</h1>
           <div className='flex justify-between items-center'>
            <p className='font-bold text-lg text-green-600'>${item.price}</p>
            <div className='text-red-800 bg-red-200 rounded-full p-3 hover:bg-red-400 transition-transform duration-300 cursor-pointer'
            onClick={removeFromCart}>
              <AiFillDelete />
            </div>
           </div>
         </div>

      </div>
    </div>
  )
}

export default CartItem