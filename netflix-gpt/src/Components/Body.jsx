import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  let disPatch = useDispatch();
  let appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "browse",
      element: <Browse />,
    },
  ]);


  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
