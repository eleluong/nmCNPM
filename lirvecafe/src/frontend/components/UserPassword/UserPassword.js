import React, {Fragment} from "react";
import {useStore} from "../UserStore"
import {useEffect, useReducer} from "react";
import {setName, setPhone, setEmail, setAddress, setForm} from "../UserStore/actions";
import {useContext} from "react"
import {Context} from "../UserStore"

import reducer, {initState} from "../UserStore/reducer";
// import UserPassword from "../UserPassword/UserPassword";
import User from "../User/User";
import "../../css/bootstrap.min.css";
import "../../css/bootstrap.css";
import Footer from '../Footer/Footer';
import Header from '../Header/Header'


const UserPassword = () => {

    // const [state, dispatch] = useStore()

    // const { phone, email, name, address} = state

    // useEffect(() => {
    //     fetch('http://localhost:3000/user') //??????
    //         .then(response => response.json())
    //         .then (users => {
    //             dispatch(setForm(users[0]))
    //         })
    // }, [])

    return (
        <Fragment>
            <Header></Header>
            <User></User>
            <div class="div-content">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"
                      integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk=" crossorigin="anonymous"/>

                <div class="col-lg-14">
                    <div class="card">
                        <div class="card-body">
                            <div class="row mb-3">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">Mật khẩu cũ</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    <input type="password" class="form-control"/>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">Mật khẩu mới</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    <input type="password" class="form-control"/>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">Nhập lại mật khẩu mới</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    <input type="password" class="form-control"/>
                                </div>
                            </div>


                            <div class="row">
                                <div class="col-sm-3"></div>
                                <div class="col-sm-9 text-secondary">
                                    <button type="button" class="button-7">Lưu thay đổi</button>
                                    &nbsp;                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>


        </Fragment>
    )
}

export default UserPassword