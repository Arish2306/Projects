import React, { useContext, useState } from 'react'
import foodImage from "../Images/31089167_7778439.jpg";
import { Link } from "react-router-dom"
import useOnlineStatus from '../utils/useOnlineStatus';
import userContext from '../utils/userContext';
import { useSelector } from 'react-redux';


const Header = () => {
    let [btnName, setBtnName] = useState('login')
    let onlineStatus=useOnlineStatus()
    let {loggedInUser}=useContext(userContext)
    let cart=useSelector((state)=>state.cart.items)
    console.log("carts",cart);
    
    return (
        <div className='flex justify-between bg-pink-200 shadow-lg m-2'>
            <div className='w-50 '>
                <img src={foodImage} alt="" className='h-30'/>
            </div>
            <div className='flex items-center ' >
                <ul  className=' flex p-6 mx-6'>
                    <li className='px-2'>Online Status:{onlineStatus?"✅":"🔴"}</li>
                    <li className='px-2' ><Link to={'/'}>Home</Link>  </li>
                    <li className='px-2'> <Link to={'/about'}>About</Link></li>
                    <li className='px-2'><Link to={'/contact'}>Contact Us</Link></li>
                    <li className='px-2'><Link to={'/grocery'}>Grocery</Link></li>
                    <li className='px-2 font-bold text-1xl'><Link to={'/cart'}>Cart({cart.length}-Items)</Link></li>
                  <li className='px-2'><button className='login-btn' onClick={() => btnName === 'login' ? setBtnName('logout') : setBtnName('login')}>{btnName}</button></li>  
                  <li className='px-2 font-bold'>{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header