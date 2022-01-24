import React from 'react';
import useStyles from './styles';
import BillItem from './billItem/billItem';


const Bill = ({items, add, remove, change, total}) => {
    
    

    const classes = useStyles();

    return (
        <div className={classes.cart}>
            
            {items.map(item => (
                <BillItem item={item} addToCart={add} removeFromCart={remove} change = {change}/>
            ))}

            <div className={classes.total}>
                <span>Tổng thanh toán: {total}</span>
                <span>{
                    
                }</span>
            </div>
        </div>

    )
}

export default Bill;
