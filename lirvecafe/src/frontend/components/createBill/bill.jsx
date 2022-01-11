import React from 'react';

import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import useStyles from './styles';
import BillItem from './billItem/billItem';
const Bill = ({cartItems, handleAddToCart, handleRemoveFromCart} ) => {
    const calculateTotal = (items) =>
    items.reduce((ack: number, item) => ack + item.amount * item.item.price, 0);
    const classes = useStyles();
    return (
        <div> 
            <div className = {classes.cart}>
                <div>
                    {cartItems.map(item =>(
                        <BillItem item = {item} addToCart = {handleAddToCart} removeFromCart = {handleRemoveFromCart}/>
                    ))}
                </div>
                <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
            </div>
        </div>
    )
}

export default Bill;
