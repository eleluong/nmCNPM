import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Grid } from '@material-ui/core';
import useStyles from './styles';
import { Typography } from '@material-ui/core';
import * as ROUTES from '../../constants/routes/routes';
import * as isSignined from '../../constants/isSignined';
import { getCookie, deleteCookie } from "../../constants/userCookie";
import { useState } from 'react';

const CartItem = ({item}) => {
    /*
    let signined = getCookie(isSignined.customer);
    let user = getCookie('customer');
    if (user) {
        // console.log(typeof user);
        // console.log(user);
        user = JSON.parse(user);
        //console.log(user);
    }
    else {
        user = {}
    }
    const id = user.id;
    console.log(id);
    const handleAddToCart=((itemID)=>{
        const temp = {id, itemId};
        useEffect(() => {
            fetch("http://localhost:5000/cart/addToCart/",{
                headers:{"Content-type":"Appilcation/json"},
                body:JSON.stringify(temp),
            })
        }, [])
        
    });
    const handleRemoveFromCart=((itemID)=>{
        const temp = {id, itemId};
        useEffect(() => {
            fetch("http://localhost:5000/cart/deleteFromCart/",{
                headers:{"Content-type":"Appilcation/json"},
                body:JSON.stringify(temp),
            })
        }, [])
    });
    const [product, setProduct] = useState();
    useEffect(() => {
        const getProduct = async()=>{
            const res = await (await(fetch("http://localhost:5000/product/getproductbyid",{
                headers:{"Content-type":"Appilcation/json"},
                body:JSON.stringify({}),
            }))).json();
            setProduct(res);
        }
        getProduct;
    }, []);

    const classes = useStyles();
    return (
        <Card className={classes.item}>
            <Grid container spacing = {1}>
                <Grid item xs = {6}>
                    <CardContent className={classes.content}>
                        <Typography variant='h7' >{}</Typography>
                        <div>
                            <p>Price: ${}</p>
                            <p>Total: ${}</p>
                        </div>
                    </CardContent>
                </Grid>
                <Grid item xs = {2}>
                    <CardActions className={classes.buttons}>
                        <Button
                            disableElevation
                            variant='contained'
                            onClick = {()=>handleAddToCart(item.id)}
                        >
                        -
                        </Button>
                        <p align = 'center'>{item.quantity}</p>
                        <Button
                            disableElevation
                            variant= 'contained'
                            onClick = {()=>handleRemoveFromCart(item.id)}
                        >
                        + 
                        </Button>
                    </CardActions>
                </Grid>
                <Grid item xs = {4}>
                    <CardMedia>
                        <img className = {classes.img}  />
                    </CardMedia>
                </Grid>
            </Grid>
        </Card>
    )
    */
}

export default CartItem
