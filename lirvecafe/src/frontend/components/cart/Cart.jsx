import React from 'react';
import CartItem from './cartitem/CartItem';
import useStyles from './styles'
import { useState } from 'react';
import { Drawer } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';


function printItem(item, addToCart, removeFromCart){
    if (item.amount > 0){
        console.log('print item');
        return (
        <CartItem 
            item = {item}
            addToCart = {addToCart}
            removeFromCart = {removeFromCart}
        />);
        
    }else {
        console.log('not print dis');
        return ;
    }
}
const Cart = ({cartItems, addToCart, removeFromCart}) => {
    const calculateTotal = (items) =>
    items.reduce((ack: number, item) => ack + item.amount * item.item.price, 0);
    const [cartOpen, setCartOpen] = useState(false);

    const classes = useStyles();
    return (
        <div className = {classes.cart}>
            <Drawer anchor = 'right' open = {cartOpen} onClose={()=> setCartOpen(false)}>
                <div  align = 'center'>
                    <h2 align ='center'>Your shopping cart</h2>
                    {cartItems.length === 0? <p>No items in cart</p>: null}
                    {cartItems.map(item=> (
                        printItem(item, addToCart, removeFromCart)
                    ))}  
                    <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
                </div>
            </Drawer>
            <div className={classes.button}>
                <IconButton onClick={()=>setCartOpen(true)}>
                    <ShoppingCart/>
                </IconButton>
            </div>
        </div>
      
        
    )
}

export default Cart;
