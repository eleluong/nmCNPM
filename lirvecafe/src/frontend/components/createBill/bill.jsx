import React from 'react';
import useStyles from './styles';
import BillItem from './billItem/billItem';
import {useEffect} from 'react';
import * as ROUTES from '../constants/routes/routes';
import * as isSignined from '../constants/isSignined';
import {getCookie, deleteCookie} from "../constants/userCookie";
import {useState} from 'react';

const Bill = () => {
    const [items, setItems] = useState([]);
    const [change, setChange] = useState(false);
    let signined = getCookie(isSignined.customer);
    let user = getCookie('customer');
    if (user) {
        user = JSON.parse(user);
    } else {
        user = {}
    }
    const id = user.id;
    const axios = require('axios');
    const handleAddToCart = ((itemId) => {
        const temp = {cartId: id, productId: itemId};
        axios({
            method: 'PUT',
            url: "http://localhost:5000/cart/addToCart/",
            data: temp,
        }).then(res => console.log(res));
        console.log(temp);
        setChange(true);

    });
    const handleRemoveFromCart = ((itemId) => {
        const temp = {cartId: id, productId: itemId};
        axios({
            method: 'PUT',
            url: "http://localhost:5000/cart/deleteFromCart/",
            data: temp,
        }).then(res => console.log(res));
        console.log(temp);
        setChange(true);
    });
    useEffect(() => {
        const getCart = async () => {
            const url = 'http://localhost:5000/cart/get/' + id;
            const res = await (await (fetch(url
            ))).json();
            setItems(res);
        }
        getCart();
        setChange(false);
    }, [change]);
    console.log(items);

    const classes = useStyles();

    const item1 = {
        
    }

    return (
        <div className={classes.cart}>
            
            {items.map(item => (
                <BillItem item={item} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart}/>
            ))}
                <BillItem item={item1} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart}/>
                <BillItem item={item1} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart}/>

            
        </div>

    )
}

export default Bill;
