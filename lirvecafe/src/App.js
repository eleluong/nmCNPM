import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomeStaff from './frontend/components/HomeStaff/HomeStaff'
import Home from './frontend/components/Home/Home'
import HomeAdmin from './frontend/components/HomeAdmin/HomeAdmin'
import SigninScreen from './frontend/components/Signin/SigninScreen'
import RegisterScreen from './frontend/components/Register/RegisterScreen'

import * as ROUTES from './frontend/components/constants/routes/routes'
import Products from './frontend/components/products/products'
function App() {

    return (
        <BrowserRouter >
            <Routes>
            <Route exact path={ROUTES.HOME} element={<Home/>}></Route>
                    <Route path={ROUTES.HOMESTAFF} element={<HomeStaff/>}></Route>
                    <Route path={ROUTES.HOMEADMIN} element={<HomeAdmin/>}></Route>
                    <Route path={ROUTES.SIGNIN} element={<SigninScreen/>}></Route>
                    <Route path={ROUTES.REGISTER} element={<RegisterScreen/>}></Route>
            </Routes>
        </BrowserRouter>
        
    )
}

export default App
