import React from 'react'
import Products from './products/products';
import Bill from './bill/bill.jsx';
import Checkout from './checkout/checkout';
import { Grid } from '@material-ui/core';

const StaffCreateBill = () => {
    return (
        <div>
            <Grid container>
                <Grid item xs = "6">
                    <Products/>
                </Grid>
                <Grid items xs = "6">
                    <Bill/>
                    <Checkout/>
                </Grid>
            </Grid>
        </div>
    )
}

export default StaffCreateBill
