import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './frontend/components/Home/Home'
// import HomeStaff from './frontend/components/HomeStaff/HomeStaff'

import SigninScreen from './frontend/components/Signin/SigninScreen'
import RegisterScreen from './frontend/components/Register/RegisterScreen'

import * as ROUTES from './frontend/components/constants/routes/routes'
const App = () => {
    return (
       
        <BrowserRouter>
            <Routes>
                <Route exac path="/" element={<Home/>}></Route>
                <Route path={ROUTES.SIGNIN} element={<SigninScreen/>}></Route>
                <Route path={ROUTES.REGISTER} element={<RegisterScreen/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
