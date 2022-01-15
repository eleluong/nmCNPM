import React, {Fragment} from "react";
import {useStore} from "../UserStore"
import {useEffect, useReducer} from "react";
import {setName, setPhone, setEmail, setAddress, setForm} from "../UserStore/actions";
import {useContext} from "react"
import {Context} from "../UserStore"

import reducer, {initState} from "../UserStore/reducer";
import User from "../User/User";
import "../../css/bootstrap.min.css";
import "../../css/bootstrap.css";
import "../UserPoint/UserPoint.css"

const UserPoint = () => {

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
            <User></User>
            <div class="div-content">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"
                      integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk=" crossorigin="anonymous"/>
                <div class="col-sm-6 col-lg-4 m-20px-tb">
                    <div class="media box-shadow-only-hover hover-top border-all-1 border-color-gray p-15px">
                        <a class="overlay-link" href="#"></a>
                        <div class="icon-50 theme-bg white-color border-radius-50 d-inline-block">
                            <i class="number">CF</i>
                        </div>
                        <div class="p-20px-l media-body">
                            <span
                                class="theme2nd-bg white-color p-0px-tb p-10px-lr font-small border-radius-15">Point</span>
                            <h6 class="m-5px-tb">290 điểm </h6>
                            <p class="m-0px font-small"></p>

                        </div>

                    </div>
                </div>
                <div class="point-exchange">
                    <button type="button" class="button-7">Đổi điểm ngay</button>
                    &nbsp;
                </div>


            </div>
        </Fragment>
    )
}
export default UserPoint