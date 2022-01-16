import clsx from "clsx";
import {useEffect, useReducer} from "react";
import {useStore} from "../store"

import CheckoutHeading from '../CheckoutHeading'
import Info from "../Info";
import InputBlock from "../InputBlock"
import InfoFooter from "../InfoFooter"
import InfoHeader from "../InfoHeader"
import Bill from '../createBill/bill.jsx'

import {setName, setPhone, setEmail, setAddress, setForm} from "../store/actions";

import styles from "./Checkout.module.css"

////////////////////////////////////////////////////////////////
import {getCookie, deleteCookie} from "../constants/userCookie"


function Checkout() {

    const [state, dispatch] = useStore()

    const {phone, email, name, address} = state

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
                // console.log(info);
                dispatch(setForm(info))
            })
    }, [])



    return (
        <div className={clsx(styles.checkout)}>
            <div className={clsx(styles.checkoutForm)}>
                <CheckoutHeading content="Lirve Cafe"/>
                <Info>
                    <InfoHeader content="Thông tin giao hàng"/>
                    <InputBlock type="text" label="Họ tên" content="name" value={name} action={setName}
                                rules={['require']}/>
                    <InputBlock type="text" label="Phone" content="phone" value={phone} action={setPhone}
                                rules={['require', 'phone']}/>
                    <InputBlock type="text" label="Địa chỉ" content="address" value={address} action={setAddress}
                                rules={['require']}/>
                    <InputBlock type="text" label="Email" content="email" value={email} action={setEmail}
                                rules={['require', 'email']}/>
                    <InfoFooter
                        linkData={{
                            link: "https://www.google.com.vn/",
                            label: "Giỏ hàng",
                        }}
                        textBtn="Thanh toán"
                    />
                </Info>
            </div>

            <Bill></Bill>
        </div>
    )
}

export default Checkout







