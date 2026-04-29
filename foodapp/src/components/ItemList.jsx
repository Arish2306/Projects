import React from 'react'
import { useDispatch } from 'react-redux';
import { addItems } from '../utils/Slices/cartSlice';

const ItemList = ({items}) => {

  // let {itemCards}=items
  console.log('itemlist',items);
  const disPatch=useDispatch()
  
const handleAddItem=(item)=>{
disPatch(addItems(item))   

}

    // const itemCards = Array.isArray(items) ? items : items?.itemCards || [];

    


  return (
    <div>

      {Array.isArray(items.itemCards)?items.itemCards.map((item)=>{
           return <div className='p-2 m-2 border-gray-200 border-b-2 text-left flex'>
            <div className='w-9/12'>
              <div className='py-2'>
                <span>{item.card.info.name}</span>
                <span>-{item.card.info.price /100}</span>
              </div>
              <p className='text-xs'>{item.card.info.description}</p>
            </div>
            <div className='p-4 w-3/12'>
            <div className='absolute'>
              <button className='p-2 mx-16 rounded-lg bg-black text-white shadow-lg ' onClick={()=>handleAddItem(item)}>Add +</button>
            </div>
              <img className='h-20 w-40' src={item.card.info.imageId} alt="" />
            </div>
           </div>
        }):items.map((item)=>{
           return <div className='p-2 m-2 border-gray-200 border-b-2 text-left flex'>
            <div className='w-9/12'>
              <div className='py-2'>
                <span>{item.card.info.name}</span>
                <span>-{item.card.info.price /100}</span>
              </div>
              <p className='text-xs'>{item.card.info.description}</p>
            </div>
            <div className='p-4 w-3/12'>
            <div className='absolute'>
              <button className='p-2 mx-16 rounded-lg bg-black text-white shadow-lg ' onClick={()=>handleAddItem(item)}>Add +</button>
            </div>
              <img className='h-20 w-40' src={item.card.info.imageId} alt="" />
            </div>
           </div>
        })}
    
      {/* {itemCards.map((item)=>{
           return <div className='p-2 m-2 border-gray-200 border-b-2 text-left flex'>
            <div className='w-9/12'>
              <div className='py-2'>
                <span>{item.card.info.name}</span>
                <span>-{item.card.info.price /100}</span>
              </div>
              <p className='text-xs'>{item.card.info.description}</p>
            </div>
            <div className='p-4 w-3/12'>
            <div className='absolute'>
              <button className='p-2 mx-16 rounded-lg bg-black text-white shadow-lg ' onClick={()=>handleAddItem(item)}>Add +</button>
            </div>
              <img className='h-20 w-40' src={item.card.info.imageId} alt="" />
            </div>
           </div>
        })} */}
    </div>
  )
}

export default ItemList