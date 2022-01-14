import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Grid } from '@material-ui/core';
import useStyles from './styles';
import { Typography } from '@material-ui/core';
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
    const productID = item.id;
    const handleAddToCart=((itemID)=>{
        const temp = {cartID: id,productID: itemId};
        useEffect(() => {
            fetch("http://localhost:5000/cart/addToCart/",{
                headers:{"Content-type":"Appilcation/json"},
                body:JSON.stringify(temp),
            })
        }, []);
        
    });
    const handleRemoveFromCart=((itemId)=>{
        const temp = {cartID: id ,productID: itemId};
        useEffect(() => {
            fetch("http://localhost:5000/cart/deleteFromCart/",{
                headers:{"Content-type":"Appilcation/json"},
                body:JSON.stringify(temp),
            })
        }, []);
    });
    const [data, setData] = useState();
    useEffect(() => {
        const getData = async ()=>{
            const res = await (await(fetch("http://localhost:5000/product/getproductbyid",{
            headers:{"Content-type": "Application/json"},
            body:JSON.stringify({productID: productID}),}
            ))).json();
            setData(res);
        }
        getData();
    }, [])
    const classes = useStyles();
    return (
        <Card className={classes.item}>
            <Grid container spacing = {1}>
                <Grid item xs = {6}>
                    <CardContent className={classes.content}>
                        <Typography variant='h7' >{item.item.title}</Typography>
                        <div>
                            <p>Price: ${item.item.price}</p>
                            <p>Total: ${(item.amount*item.item.price).toFixed(2)}</p>
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
                        <p align = 'center'>{item.amount}</p>
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
                        <img className = {classes.img} src = {item.item.image} alt = {item.item.title}/>
                    </CardMedia>
                </Grid>
            </Grid>
        </Card>
    )
    */
}

export default CartItem
