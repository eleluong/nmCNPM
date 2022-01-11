import React from 'react';
import CartItem from './cartitem/CartItem';
import useStyles from './styles'

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
    const classes = useStyles();
    return (
        <div className = {classes.cart} align = 'center'>
            <h2 align ='center'>Your shopping cart</h2>
            {cartItems.length === 0? <p>No items in cart</p>: null}
            {cartItems.map(item=> (
                printItem(item, addToCart, removeFromCart)
            ))}  
            <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
        </div>
    )
}

export default Cart;
