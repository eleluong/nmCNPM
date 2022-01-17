import React from 'react'
import Products from './products/products';
import Bill from './bill/bill.jsx';
import Checkout from './checkout/checkout';
import { Grid } from '@material-ui/core';
import {useEffect} from 'react';
import {getCookie, deleteCookie} from "../constants/userCookie";
import {useState} from 'react';
const StaffCreateBill = () => {
    const [change, setChange] = useState(0);
    const [items, setItems] = useState([]);
    let user = getCookie('staff');
    if (user) {
        user = JSON.parse(user);
    } else {
        user = {}
    }
    const id = user.id;
    const axios = require('axios');
    const handleAddToCart = ((itemId, price) => {
        const temp = {staffId: user.id, productId: itemId, price: price};
        axios({
            method: 'PUT',
            url: "http://localhost:5000/staffcart/addToCart",
            data: temp,
        }).then(res => {
            setChange(change+1);
        });
        console.log(temp);

    });
    const handleRemoveFromCart = ((itemId) => {
        const temp = {staffId: id, productId: itemId};
        axios({
            method: 'PUT',
            url: "http://localhost:5000/staffcart/deleteFromCart",
            data: temp,
        }).then(res => {
            setChange(change+1);
        });
        console.log(temp);
    });
    useEffect(() => {
        const getCart = async () => {
            const url = 'http://localhost:5000/staffcart/get/' + id;
            const res = await (await (fetch(url
            ))).json();
            setItems(res);
        }
        getCart();
        console.log(change);
    }, [change]);
    console.log(items);

    return (
        <div paddingTop = '50px'>
            <Grid container>
                <Grid item xs = "8">
                    <Products handleAdd = {handleAddToCart}/>
                </Grid>
                <Grid items xs = "4">
                    <Bill items = {items} add = {handleAddToCart} remove = {handleRemoveFromCart} change = {change}/>
                    <Checkout/>
                </Grid>
            </Grid>
        </div>
    )
}

export default StaffCreateBill
