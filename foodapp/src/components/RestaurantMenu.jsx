import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategery from "./RestaurantCategery";

const RestaurantMenu = () => {
  const { id } = useParams();

  let [showIndex,setShowIndex]=useState(null)

  let resInfo=useRestaurantMenu(id)

  console.log('res',resInfo);
  

 
  if (!resInfo) {
    return <h1>Loading...</h1>;
  }

    let {name,cuisines,avgRating}=resInfo.info

  console.log(resInfo);
  let {cards}=resInfo.menu
  
console.log('menu',cards);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">{cuisines.join(", ")}</p>
      <p>{avgRating}⭐Ratings</p>
          
     {
        cards.map((items,index)=>(  <RestaurantCategery
           key={items.card.card.title}
            items={items} 
            showItems={index===showIndex?true:false}
            setShowIndex={()=>{setShowIndex(index)}}
            />)
        )
     }
     

    </div>
  );
};

export default RestaurantMenu;