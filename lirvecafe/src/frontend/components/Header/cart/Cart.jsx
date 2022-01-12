import React from 'react';
import CartItem from './cartitem/CartItem';
import useStyles from './styles'
import { useState } from 'react';
import { Drawer } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';


function printItem(item){
    if (item.amount > 0){
        console.log('print item');
        return (
        <CartItem 
            item = {item}
            
        />);
        
    }else {
        console.log('not print dis');
        return ;
    }
}
const Cart = () => {
    const calculateTotal = (items) =>
    items.reduce((ack: number, item) => ack + item.amount * item.item.price, 0);
    const [cartOpen, setCartOpen] = useState(false);
    const cartItems = [];
    const classes = useStyles();
    return (
        <div>
            <div>
                <IconButton onClick={()=>setCartOpen(true)}>
                    <ShoppingCart/>
                </IconButton>
            </div>
            <Drawer anchor = 'right' open = {cartOpen} onClose={()=> setCartOpen(false)}>
                <div className = {classes.cart} align = 'center'>
                    <h2 align ='center'>Your shopping cart</h2>
                    {cartItems.length === 0? <p>No items in cart</p>: null}
                    {cartItems.map(item=> (
                        printItem(item)
                    ))}  
                    <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
                </div>
            </Drawer>
            
        </div>
      
        
    )
}

export default Cart;
