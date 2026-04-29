import React, { useState } from 'react'
import ItemList from './ItemList';

const RestaurantCategery = ({items,showItems,setShowIndex}) => {

  console.log('items',items);
  let {title}=items.card.card
  

  const handleClick=()=>{

    setShowIndex()
   
  }
  return (
    <div>
        <div className='w-6/12  mx-auto my-4 bg-gray-50 shadow-lg p-4 '>
        <div className='flex justify-between cursor-pointer' onClick={handleClick}>
            <span className=' font-bold text-lg '>{title}({items.card.card.itemCards.length})</span>
            <span>⬇</span>  
            </div> 
              {showItems&&<ItemList items={items.card.card}/>}  
        </div>
    
    </div>
  )
}

export default RestaurantCategery