import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography,  IconButton } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './style'
import { useEffect } from 'react';
import * as ROUTES from '../../constants/routes/routes';
import * as isSignined from '../../constants/isSignined';
import { getCookie, deleteCookie } from "../../constants/userCookie";
const Product = ({product}) => {
    const classes = useStyles();
    function titlechange(string){
        if (string.length > 18) {
            string = string.substring(0, 15) + "...";
        }
        return string;
    }
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
    const handleAddToCart=((itemId)=>{
        const temp = {cartID: id,productID: itemId};
        console.log(temp);
        fetch("http://localhost:5000/cart/addToCart/",{
            method: "PUT",
            headers:{"Content-type":"Appilcation/json"},
            body:JSON.stringify(temp),
        })
    });
    return (
        <Card className = {classes.root}>
            <CardMedia  className = {classes.media} image = {product.image} title = {product.name}/>
            <CardContent>
                <div className = {classes.cardContent}>
                    <Typography variant = "h6" align='left' >
                        {titlechange(product.name)}
                    </Typography>
                </div>
                {/*<Typography dangerouslySetInnerHTML = {{ __html: product.description}} variant = "body2" color = "textSecondary"></Typography>*/}
            </CardContent>
            <CardActions disableSpacing className = {classes.cardActions}>
                <Typography>
                    {product.price}$
                </Typography>
                <Button aria-label ="Add to Cart" onClick = {()=> handleAddToCart(product.id)}>
                    <AddShoppingCart/> 
                </Button>
            </CardActions>
        </Card>
    )
}

export default Product
