import React from 'react';
import useStyles from './styles';
import BillItem from './billItem/billItem';
import {useEffect} from 'react';
import * as ROUTES from '../../constants/routes/routes';
import * as isSignined from '../../constants/isSignined';
import {getCookie, deleteCookie} from "../../constants/userCookie";
import {useState} from 'react';

const Bill = ({items, add, remove}) => {
    
    

    const classes = useStyles();

    return (
        <div className={classes.cart}>
            
            {items.map(item => (
                <BillItem item={item} addToCart={add} removeFromCart={remove}/>
            ))}

            <div className={classes.total}>
                <span>Tổng thanh toán:</span>
                <span>{
                    
                }</span>
            </div>
        </div>

    )
}

export default Bill;
