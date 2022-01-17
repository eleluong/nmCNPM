import React from 'react';
import CartItem from './cartitem/CartItem';
import useStyles from './styles'
import {useState} from 'react';
import {Button, Drawer} from '@material-ui/core';
import {IconButton} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import {useEffect} from 'react';
import * as ROUTES from '../../constants/routes/routes';
import * as isSignined from '../../constants/isSignined';
import {getCookie, deleteCookie} from "../../constants/userCookie";


const Cart = () => {
    const [cartOpen, setCartOpen] = useState(false);
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
    const handleAddToCart = ((itemId, productprice) => {
        const temp = {cartId: id, productId: itemId, price: productprice};
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
            url: "http://localhost:5000/cart/deleteFromCart",
            data: temp,
        }).then(res => console.log(res));
        console.log(temp);
        setChange(true);
    });
    useEffect (()=>{
        const getCart = async()=>{
            const url = 'http://localhost:5000/cart/get/'+id;
            const res = await( await(fetch(url
                ))).json();
            setItems(res);
        }
        if(signined){
            getCart();
            setChange(false);
        }
    },[cartOpen, change]);

    console.log(items);

    const classes = useStyles();
    return (
        <div>
            <div>
            {signined?(
                    <IconButton onClick={() => setCartOpen(true)} style ={{'position': 'inherit'}}>
                        <ShoppingCart style ={{'font-size': '2rem'}} />
                    </IconButton>
                    ):(<></>)}
            </div>
            <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
                <div className={classes.cart} align='center'>

                    <div>
                        <h2>Your shopping cart</h2>
                        <Button
                            onClick={() => window.location.href = '/checkout'}
                        >Checkout</Button>
                    </div>
                    {items.map(item => (
                        <CartItem
                        key={item.id}
                            item={item}
                            add={handleAddToCart}
                            remove={handleRemoveFromCart}
                        />
                    ))}
                </div>
            </Drawer>
        </div>
    )
}

export default Cart;
