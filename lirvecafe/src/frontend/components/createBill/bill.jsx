import React from 'react';
import useStyles from './styles';
import BillItem from './billItem/billItem';
import {useEffect} from 'react';
import * as isSignined from '../constants/isSignined';
import {getCookie, deleteCookie} from "../constants/userCookie";
import {useState} from 'react';

const Bill = () => {
    const [items, setItems] = useState([]);
    const [change, setChange] = useState(0);
    let signined = getCookie(isSignined.customer);
    let user = getCookie('customer');
    if (user) {
        user = JSON.parse(user);
    } else {
        user = {}
    }
    const id = user.id;
    const axios = require('axios');
    const handleAddToCart = ((itemId, price) => {
        const temp = {cartId: user.id, productId: itemId, price: price};
        axios({
            method: 'PUT',
            url: "http://localhost:5000/cart/addToCart",
            data: temp,
        }).then(res => {
            setChange(change+1);
            console.log(res);
        });
        console.log(temp);

    });
    const handleRemoveFromCart = ((itemId) => {
        const temp = {cartId: id, productId: itemId};
        axios({
            method: 'PUT',
            url: "http://localhost:5000/cart/deleteFromCart",
            data: temp,
        }).then(res => {
            setChange(change+1);
            console.log(res);
        });
        console.log(temp);
    });
    useEffect(() => {
        const getCart = async () => {
            const url = 'http://localhost:5000/cart/get/' + id;
            const res = await (await (fetch(url
            ))).json();
            setItems(res);
        }
        getCart();
    }, [change]);
    console.log(items);

    const classes = useStyles();

    const [total, setTotal] = useState();

    useEffect(() => {
        fetch('http://localhost:5000/cart/get_total/' + id)
            .then(response => response.json())
            .then(total => {
                setTotal(total);
            })
    }, [change])


    return (
        <div className={classes.cart}>
            
            {items.map(item => (
                <BillItem item={item} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart}/>
            ))}

            <div className={classes.total}>
                <span className={classes.totalText}>Tổng cộng:</span>
                <span className={classes.totalPrice}>{total || 0}VNĐ</span>
            </div>
        </div>

    )
}

export default Bill;