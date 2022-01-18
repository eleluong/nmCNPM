import React, {Fragment} from "react";
import {useState} from "react"
import {useEffect, useReducer} from "react";
import {setName, setPhone, setEmail, setAddress, setForm} from "../UserStore/actions";
import {useContext} from "react"
import {Context} from "../UserStore"
import clsx from "clsx";
import styles from './UserPassword.module.css'

import reducer, {initState} from "../UserStore/reducer";
// import UserPassword from "../UserPassword/UserPassword";
import User from "../User/User";
import "../../css/bootstrap.min.css";
import "../../css/bootstrap.css";
import Footer from '../Footer/Footer';
import Header from '../Header/Header'
import {getCookie, deleteCookie} from "../constants/userCookie"



const UserPassword = () => {

    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [isSuccess, setIsSuccess] = useState(true)

    console.log({ password, rePassword });

    let user = getCookie('customer');
    if (user) {
        user = JSON.parse(user);
    } else {
        user = {}
    }
    const ID = user.id;

    console.log('ID: ', ID);


    function changePassword(){
        fetch('http://localhost:5000/customer/update_password/' + ID,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                password: password,
                rePassword: rePassword,
            }),
        }) 
            .then(res => res.json())
            .then (result => {
                console.log('xxx');
                console.log(result);
                setIsSuccess(false);
            })
            .catch(error => {
                console.log('yyy');
                console.log(error)
                setIsSuccess(true);

            })

    }

    return (
        <Fragment>
            <Header></Header>
            <User></User>
            <div class="div-content">
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk=" crossorigin="anonymous" />
			
			<div class="col-lg-14">
					<div class="card">
						<div class="card-body">
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Mật khẩu cũ</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="password" class="form-control" value={password} placeholder="Mật khẩu cũ"
                                        onChange={e => setPassword(e.target.value)}
                                    />
								</div>
                                <div className={clsx(styles.inputError, isSuccess && styles.inputSuccess)}>Mật khẩu không chính xác</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Mật khẩu mới</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="password" class="form-control" value={rePassword} placeholder="Mật khẩu mới"
                                        onChange={e => setRePassword(e.target.value)}
                                    />
								</div>
							</div>
							{/* <div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Nhập lại mật khẩu mới</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="password" class="form-control" />
								</div>
							</div> */}
							
							
							<div class="row">
								<div class="col-sm-3"></div>
								<div class="col-sm-9 text-secondary">
                                    <button type="button" class="button-7"
                                        onClick={changePassword}
                                    >Lưu thay đổi
                                    </button>&nbsp;								
                                </div>
							</div>
						</div>
					</div>
     
      
            </div>
            </div>


        </Fragment>
    )
}

export default UserPassword