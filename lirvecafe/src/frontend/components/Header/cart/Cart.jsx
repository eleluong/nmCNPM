import React from 'react';
import CartItem from './cartitem/CartItem';
import useStyles from './styles'
import {useState} from 'react';
import {Button, Drawer} from '@material-ui/core';
import {IconButton} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import {useEffect} from 'react';
import * as isSignined from '../../constants/isSignined';
import {getCookie} from "../../constants/userCookie";


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

    const handleAddToCart =  (async (itemId) => {
        const temp = {cartId: id, productId: itemId};
        const url = "http://localhost:5000/cart/addToCart/";
        await fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(temp),
        })
        .then(res => setChange(true));

    });
    const handleRemoveFromCart = (async (itemId) => {
        const temp = {cartId: id, productId: itemId};
        const url = "http://localhost:5000/cart/deleteFromCart/";
        await fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(temp),
        })
        .then(res => setChange(true));        ;
    });

    useEffect (()=>{
        const getCart = async()=>{
            const url = 'http://localhost:5000/cart/get/'+id;
            await(await(fetch(url)))
            .json()
            .then(res => setItems(res))
            .then(() => setChange(false));
        }
            getCart()
        
    },[cartOpen, change]);

    // console.log(items);

    const classes = useStyles();
    return (
        <div>
            <div>
                <IconButton onClick={() => setCartOpen(true)}>
                    <ShoppingCart/>
                </IconButton>
            </div>
            <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
                <div className={classes.cart} align='center'>

                    <div>
                        <h2>Your shopping cart</h2>
                    </div>
                    <Button
                        onClick={() => window.location.href = '/checkout'}
                    >Checkout</Button>
                    {items.map(item => (
                        <CartItem
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