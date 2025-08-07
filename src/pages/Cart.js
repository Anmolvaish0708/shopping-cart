import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CartItem from '../Components/CartItem';

const Cart = () => {

  const {cart} = useSelector( (state) => state);
  console.log("printing cart data...");
  console.log(cart);
  const [totalAmount,setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc,curr) => acc+curr.price,0));
  },[cart]);
  return (
    <div>
       {
        cart.length > 0? (
           <div className='flex  flex-col md:flex-row max-w-6xl mx-auto justify-center '>
              <div className='flex w-full flex-col md:w-[60%] p-2 justify-center'>
                {
                  cart.map((item,index) =>{
                    return <CartItem key={item.id} item={item} itemIndex={index}/>
                  })
                }
              </div>

              <div className='flex w-full  flex-col md:w-[40%] mt-5 justify-center '>
                 
                 <div className='flex flex-col h-[100%] p-5 my-14 justify-between'>
                   
                <div className='flex flex-col gap-2'>
                   <div className='text-lg font-semibold text-green-600'>Your Cart</div>
                   <div className='text-5xl font-semibold text-green-600'>Summary</div>
                   <p>
                     <span className='text-lg font-semibold text-gray-700'>Total Items: {cart.length}</span>
                   </p>

                </div>

                <div className='flex flex-col'>
                   <p  className='text-lg font-semibold text-gray-700'>Total Amount: <span className='text-lg font-bold text-black'>${totalAmount}</span></p>
                   <button className='w-[80%] bg-green-700 text-white mt-5 font-bold p-3 rounded-md text-xl border-2 border-x-green-600 '>
                     CheckOut Now
                   </button>
                </div>
                
                 </div>

              </div>
           </div>
        ):
        (
          <div className='min-h-[80vh] flex flex-col justify-center gap-3 items-center'>
            <h1 className='text-gray-700 font-semibold text-xl'>Cart Empty</h1>
            <Link to="/">
               <button className='bg-green-600 text-white p-3 rounded-lg font-semibold border-2 border-green-600 px-10 tracking-wider hover:bg-green-700 transition duration-300 ease-in'>Shop Now</button>
            </Link>
          </div>
        )
       }
    </div>
  )
}

export default Cart