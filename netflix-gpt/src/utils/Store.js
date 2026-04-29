import {configureStore} from "@reduxjs/toolkit"
import userReducer from "../utils/userSlice"
import movieRuducer from "../utils/movieSlice"

export const store=configureStore({
    reducer:{
       user:userReducer,
       movies:movieRuducer
    }
})

export default store