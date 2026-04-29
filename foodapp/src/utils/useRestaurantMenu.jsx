import React, { useState,useEffect } from 'react'

const useRestaurantMenu = (id) => {
   const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const res = await fetch(`http://localhost:3000/restaurants/${id}`);
    const data = await res.json();
    setResInfo(data);
  };

  return resInfo

}

export default useRestaurantMenu