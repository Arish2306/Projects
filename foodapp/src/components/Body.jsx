import React, { useState, useEffect, useContext } from 'react'
import RestaurantCart, { withpromtedLabel } from './RestaurantCart'
import bbqData from "../utils/mockData"
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'
import userContext from '../utils/userContext'


const Body = () => {
    let [listData, setListData] = useState([])
    let [filterRes, setFliterRes] = useState([])
    let [searchVal, setSearchVal] = useState('')

    let {loggedInUser,setUserName}=useContext(userContext)

    let RestauruantCardPromted = withpromtedLabel(RestaurantCart)

    let handleFilter = () => {

        setListData((curr) => {
            //    curr.filter((res) => {
            //         return res.resData.info.avgRating > 4
            //         // console.log(res.resData.resData);

            //     })


            const filtered = listData.filter(
                (res) => res.avgRating > 4
            );
            setFliterRes(filtered);

        })

    }

    useEffect(() => {
        fetchData()

    }, [])

    // let fetchData = async () => {
    //     let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.93519298&lng=77.62448069999999&page_type=DESKTOP%20WEB_LISTING")
    //     let json = await data.json()


    //     setListData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    //     setFliterRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)


    // }

    const fetchData = async () => {
        let data = await fetch("http://localhost:3000/restaurants")
        let json = await data.json()
        console.log(json);

        setListData(json)
        setFliterRes(json)

    }


    console.log('fil', listData);


    let onlineStatus = useOnlineStatus()

    console.log(onlineStatus);




    if (!listData || listData.length === 0) {
        return <Shimmer />;
    }


    if (onlineStatus === false) {
        return (
            <h1>Check your internet</h1>
        )
    }




    return (
        <div className='body'>
            <div className='filter flex'>
                <div className='search m-4 p-4'>
                    <input type="text" className='border border-solid border-b-neutral-900' value={searchVal}
                        onChange={(e) => {
                            setSearchVal(e.target.value)
                        }}
                    />
                    <button className='bg-green-100 px-3 py-1.4 m-4 rounded-lg' onClick={() => {
                        let filterRes = listData.filter((res) => {
                            console.log(res.info.name);

                            return res.info.name.toLowerCase().includes(searchVal.toLowerCase())
                        })
                        setFliterRes(filterRes)
                    }} >Search</button>
                </div>
                <div className='search m-4 p-4 flex items-center '>
                    <button className='px-4 py-1.4 bg-gray-100 rounded-lg' onClick={handleFilter}>Top Rated </button>
                </div>
                 <div className='search m-4 p-4 flex items-center'>
                    <label htmlFor="" className='m-2'>UserName:</label>
                    <input type="text" className='border border-solid border-b-neutral-900 rounded-1xl' value={loggedInUser}
                        onChange={(e) => {setUserName(e.target.value)
                          
                        }}
                    />
                
                </div>

            </div>


            <div className="flex flex-wrap">
                {
                    filterRes.map((res) => (


                        <Link to={`/restaurants/${res.info.id}`}>{res.info.promoted?<RestauruantCardPromted resData={res}/>:<RestaurantCart key={res.info.id} resData={res} />} </Link>
                    ))
                }
            </div>

        </div>
    )
}

export default Body