import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import Display from '../Pages/Display'



const MainRoutes = () => {
    return (

        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/display' element={<Display/>} />
        </Routes>
    )
}

export default MainRoutes