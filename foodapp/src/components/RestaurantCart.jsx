import React, { useContext } from 'react'
import userContext from '../utils/userContext'


const RestaurantCart = (props) => {

  let {loggedInUser}=useContext(userContext)



  let { name,costForTwo,avgRating,sla,cloudinaryImageId,locality} = props.resData.info

 
  

  return (
    <div className='m-4 p-4 w-[235px] bg-gray-100 hover:bg-gray-200'>
      <img className='rounded-lg border w-auto h-30'src={cloudinaryImageId} alt="foods" />
      <h3 className='font-bold py-1.5 text-2xl'>Vivega Foods</h3>
      <h4 className='font-bold py-1.5 '>{name}</h4>
      <h4 className='font-bold py-1.5 '>{locality}</h4>
      <h4 className='font-bold py-1.5 '>{costForTwo/100}</h4>
      <h4 className='font-bold py-1.5 '>{avgRating}Star</h4>
      <h4 className='font-bold py-1.5 '>{sla.deliveryTime}Minutes</h4>
      <h4 className='font-bold py-1.5 '>User:{loggedInUser}</h4>

    </div>
  )
}

export const withpromtedLabel=(RestaurantCart)=>{

  return(props)=>{
    return(
      <div className="relative" >
        <label className='absolute top-0 left-4 bg-black text-white text-xs px-2 py-1 rounded'>Promoted</label>
        <RestaurantCart {...props}/>
      </div>
    )
  }

}

export default RestaurantCart