import React, { useEffect } from "react";
import {onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/Constants";
const Header = () => {

  const navigate=useNavigate()
  const disPatch=useDispatch()
  let user=useSelector((store)=>store.user)
  
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/")
      })
      .catch((error) => {
           navigate('error')
      });
  };

  
  useEffect(() => {
    const unSubcribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        disPatch(addUser({ id: uid, email: email, displayName: displayName }));
        navigate("/browse")
      } else {
        disPatch(removeUser());
        navigate("/")
      }
    });
    ()=>unSubcribe()
  }, []);

  return (
    <div className="absolute w-full  px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-40"
        src={LOGO}
        alt=""
      />
{
  user&&  <div className="flex p-2">
        <img
          className="w-10 h-10 m-2"
          src={user?.photoURL}
          alt=""
        />
        <button className="font-bold text-white" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
}
    
    </div>
  );
};

export default Header;
