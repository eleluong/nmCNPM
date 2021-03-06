import React, {Fragment} from "react";
import clsx from "clsx";
import {useStore} from "../UserStore"
import {useEffect, useState} from "react";
import {setName, setPhone, setEmail, setAddress, setForm} from "../UserStore/actions";
import {useContext} from "react"
import {Context} from "../UserStore"

import reducer, {initState} from "../UserStore/reducer";
import User from "../User/User";
import "../../css/bootstrap.min.css";
import "../../css/bootstrap.css";
import Footer from '../Footer/Footer';
import Header from '../Header/Header'
import HeaderStaff from '../HeaderStaff/HeaderStaff'

import styles from './UserInfor.module.css';

import {getCookie, setCookie} from "../constants/userCookie"
import { useTheme } from "@material-ui/core";



const UserInfor = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')

    let user = getCookie('customer');
    if (user) {
        user = JSON.parse(user);
    } else {
        user = {}
    }
    const ID = user.id;
    console.log("UserInfor ~ user", user)
    
    console.log('ID: ', ID);

    useEffect(() => {
        fetch('http://localhost:5000/customer/getInfo/' + ID)
            .then(response => response.json())
            .then(user => {
                // console.log(user);
                const { password, ...info } = user
                console.log(info);
                setName(info.name)
                setEmail(info.email)
                setAddress(info.address)
                setPhone(info.phone)
            })
    }, [])

    function handleSubmit() {
        user.name = name;
        setCookie('customer', JSON.stringify(user), 100)

        fetch('http://localhost:5000/customer/update/' + ID, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, email, phone, address}),
        })
    
    }


    return (
        <Fragment>
            {/* <HeaderStaff /> */}
            <Header/>

            
            <User></User>
            <div  className={clsx(styles.footer)}>
                <div class="div-content">
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"
                        integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk=" crossorigin="anonymous"/>

                    <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12"/>
                    <div class="card h-200">
                        <div class="card-body">
                            <div class="row gutters">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <h6 class="mb-2 text-primary">Th??ng tin chi ti???t</h6>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <label class="label-info" for="fullName">H??? t??n</label>
                                        <input type="text" class="form-control" id="fullName" placeholder="Enter full name"
                                            value={name}
                                            onChange={e => setName(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <label class="label-info" for="eMail">Email</label>
                                        <input type="email" class="form-control" id="eMail" placeholder="Enter email ID"
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <label class="label-info" for="phone">S??? ??i???n tho???i</label>
                                        <input type="text" class="form-control" id="phone" placeholder="Enter phone number"
                                            value={phone}
                                            onChange={e => setPhone(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <label class="label-info" for="website">?????a ch???</label>
                                        <input type="url" class="form-control" id="address" placeholder="Address"
                                            value={address}
                                            onChange={e => setAddress(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="row gutters">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">

                                </div>

                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        {/* <label for="">Gi???i t??nh</label>
        <div class="example ex1">
        
        <label class="radio red">
            <input type="radio" name="group1"/>
            <span>Nam</span>
        </label>
        <label class="radio blue">
            <input type="radio" name="group1"/>
            <span>N???</span>
        </label>
        <label class="radio orange">
            <input type="radio" name="group1"/>
            <span>Kh??c</span>
        </label>
    </div> */}

                                    </div>
                                </div>

                            </div>
                            <div class="row gutters">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="text-right mt-3">
                                        <button type="button" class="button-7"
                                                onClick={handleSubmit}
                                        >L??u thay ?????i
                                        </button>
                                        &nbsp;
                                        <button type="button" class="button-6">H???y</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}
export default UserInfor