import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList'
import { clearItems } from '../utils/Slices/cartSlice'

const Cart = () => {
  const disPatch=useDispatch()
  const cartItems = useSelector((state) => state.cart.items)
  console.log('cart', cartItems);

  const handleClearCart=()=>{

    disPatch(clearItems())
    
  }

  return (
    <div className='text-center m-4 p-4'>
      <h1 className='font-bold text-2xl'>Cart</h1>
      <div className='w-6/12 m-auto'>
      <button className='p-2 m-2 bg-black rounded-lg text-white' onClick={()=>{handleClearCart()}}>Clear Cart</button>
      {
        cartItems.length===0 && (<h1 className='font-bold'>Cart is empty mame.Add some foods in cart</h1>)
      }
        <ItemList items={cartItems} />
      </div>

    </div>
  )
}

export default Cart