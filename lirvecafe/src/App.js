import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import HomeStaff from './frontend/components/HomeStaff/HomeStaff'
import Home from './frontend/components/Home/Home'
import HomeAdmin from './frontend/components/HomeAdmin/HomeAdmin'
import SigninScreen from './frontend/components/Signin/SigninScreen'
import RegisterScreen from './frontend/components/Register/RegisterScreen'
import UserInfor from './frontend/components/UserInfor/UserInfor.js'
import UserCart from './frontend/components/UserCart/UserCart.js'
import UserPassword from './frontend/components/UserPassword/UserPassword.js'
import UserPoint from './frontend/components/UserPoint/UserPoint.js'

import Checkout from './frontend/components/Checkout'
import {FormProvider} from './frontend/components/store'
import GlobalStyle from './frontend/components/GlobalStyle'

import * as ROUTES from './frontend/components/constants/routes/routes'
import Products from './frontend/components/products/products'

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path={ROUTES.HOME} element={<Home/>}></Route>
                    <Route path={ROUTES.HOMESTAFF} element={<HomeStaff/>}></Route>
                    <Route path={ROUTES.HOMEADMIN} element={<HomeAdmin/>}></Route>
                    <Route path={ROUTES.SIGNIN} element={<SigninScreen/>}></Route>
                    <Route path={ROUTES.REGISTER} element={<RegisterScreen/>}></Route>
                    <Route path={ROUTES.CUSTOMERINFO} element={<UserInfor />}></Route>
                    <Route path='/userCart' element={<UserCart />}></Route>
                    <Route path='/userPassword' element={<UserPassword />}></Route>
                    <Route path='/userPoint' element={<UserPoint />}></Route>




                    <Route path={ROUTES.CHECKOUT} element={
                        <GlobalStyle>
                            <FormProvider>
                                <Checkout/>
                            </FormProvider>
                        </GlobalStyle>
                    }></Route>

                    
                </Routes>
            </BrowserRouter>


        </>


    )
}

export default App
