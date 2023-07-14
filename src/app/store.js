import { configureStore } from '@reduxjs/toolkit'
import showData  from '../features/showSlice'

export const store = configureStore({
    reducer:{
        show:showData,//it is the gobal store data
    },
})