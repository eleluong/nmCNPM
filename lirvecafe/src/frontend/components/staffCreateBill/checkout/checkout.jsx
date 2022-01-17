import React from 'react';
import { useState } from 'react';
import useStyles from './styles';
import { Button, TextField } from '@material-ui/core';
import {getCookie, deleteCookie} from "../../constants/userCookie"
const Checkout = () => {
    const [phone, setPhone] = useState(null);
    const [address, setAddress] = useState(null)
    let staff = getCookie('staff');
    if (staff) {
        staff = JSON.parse(staff);
    } else {
        staff = {}
    }
    const axios = require('axios');
    const handleSubmit=((phone, address)=>{
        const temp = {staffId: staff.id, phone: phone, address: address};
        console.log(temp);
        axios({
            method: 'POST',
            url: 'http://localhost:5000/staffcart/add',
            data: temp,
        }).then(res => console.log("error"+res));
    });
    const classes = useStyles();
    const p = null;
    const a = null;
    
    return (
        <div className={classes.checkout}>
            <div className={classes.checkoutForm}>
            <TextField
                id="outlined-uncontrolled"
                label="Phone"
                value={p}
                onChange={p=>setPhone(p.target.value)}
                />
            <TextField
                id="outlined-uncontrolled"
                label="Address"
                value={a}
                onChange={a=>setAddress(a.target.value)}
                />
            <Button onClick={()=>handleSubmit(phone, address)}>Thanh toán</Button>
            
            </div>
        
        </div>
    )
}

export default Checkout
