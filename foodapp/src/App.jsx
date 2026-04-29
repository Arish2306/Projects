
import './App.css'
import About from './components/About'
import Body from './components/Body'
import Contact from './components/Contact'
import ErrorPage from './components/ErrorPage'
import Header from "./components/Header"
import { createBrowserRouter, Outlet } from 'react-router-dom'
import RestaurantMenu from './components/RestaurantMenu'
// import Grocery from './components/Grocery'
import { lazy, Suspense, useEffect, useState } from 'react'
import Cart from './components/Cart'
import userContext from './utils/userContext'
import {Provider} from "react-redux"
import store from './utils/app/appStore'

const Grocery = lazy(() => import('./components/Grocery'))

function App() {

  let[userName,setUserName]=useState()

  useEffect(()=>{
    const user={
      Name:"Vivega"
    }
    setUserName(user.Name)
  },[])

  return (
    <>
    <Provider store={store}>
    <userContext.Provider value={{loggedInUser:userName,setUserName}}>
      <div className='App'>
        <Header />
        <Outlet/>
      </div>
      </userContext.Provider>
      </Provider>
    </>
  )
}

export let appRouter = createBrowserRouter([

  {
    path: "/",
    element: <App />,
    children: [

      {
        path:"/",
        element:<Body/>
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path:"/restaurants/:id",
        element:<RestaurantMenu/>
      },
        {
        path:"/grocery",
        element:<Suspense fallback={<h1>...Loading</h1>}><Grocery/></Suspense>
      },
       {
        path:"/cart",
        element:<Cart/>
      },



    ],
    errorElement: <ErrorPage />
  },


])



export default App
