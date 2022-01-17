import React, {Fragment} from 'react';
import styles from "./User.css"
import { useState, useEffect } from 'react';

import {getCookie, deleteCookie} from "../constants/userCookie"


var link_ava = 'https://scontent-hkt1-1.xx.fbcdn.net/v/t1.15752-9/267201581_265268222375351_7213697060078493469_n.png?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_ohc=nu5k9VpyfpcAX-vIX5K&_nc_ht=scontent-hkt1-1.xx&oh=03_AVJ-2WaM8wUSO04Wr2ozlHW_Jap-3I4RAsXiLMz1MvkCPw&oe=61FFE492'


const User = () => {

    const [name, setName] = useState('')

    let user = getCookie('customer');
    if (user) {
        user = JSON.parse(user);
    } else {
        user = {}
    }
    const ID = user.id;

    console.log('ID: ', ID);

    useEffect(() => {
        fetch('http://localhost:5000/customer/getInfo/' + ID)
            .then(response => response.json())
            .then(user => {
                // console.log(user);
                const { password, ...info } = user
                console.log(info);
                setName(info.name)
            })
    }, [])


    return (
        <div className="div-nav">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"
                  integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk=" crossorigin="anonymous"/>
            <div class="col-lg-3">
                <aside class="user-info-wrapper">
                    <div class="user-cover">
                        <div class="info-label" data-toggle="tooltip" title=""
                             data-original-title="You currently have 290 Reward Points to spend"><i
                            class="icon-medal"></i>290 points
                        </div>
                    </div>
                    <div class="user-info">
                        <div class="user-avatar">
                            <a class="edit-avatar" href="#"></a><img src={link_ava} alt="User"/></div>
                        <div class="user-data">
                            <h4>{name}</h4>
                        </div>
                    </div>
                </aside>
                <nav class="list-group" id='nav'>
                    <a name="info" class="list-group-item with-badge active" href="/UserInfo"><i class="fa fa-user"></i>Thông
                        tin cá nhân<span class="badge badge-primary badge-pill"></span></a>
                    <a name="password" class="list-group-item with-badge " href="/UserPassword"><i class="fa "></i>Đổi
                        mật khẩu<span class="badge badge-primary badge-pill"></span></a>
                    <a name="cart" class="list-group-item" href="/UserCart"><i class="fa fa-th"></i>Đơn hàng</a>

                    {/* <a class="list-group-item with-badge" href="/Event"><i class="fa fa-heart"></i>Sự kiện<span class="badge badge-primary badge-pill">3</span></a> */}
                    <a name="point" class="list-group-item with-badge" href="/UserPoint"><i class="fa fa-tag"></i>Điểm
                        của tôi<span class="badge badge-primary badge-pill"></span></a>
                </nav>
            </div>
        </div>
    )

}
export default User