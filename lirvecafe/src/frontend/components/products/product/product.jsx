import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography,  IconButton } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './style'

const Product = ({product, handleAddToCart}) => {
    const classes = useStyles();
    function titlechange(string){
        if (string.length > 18) {
            string = string.substring(0, 15) + "...";
        }
        return string;
    }
    return (
        <Card className = {classes.root}>
            <CardMedia  className = {classes.media} image = {product.image} title = {product.name}/>
            <CardContent>
                <div className = {classes.cardContent}>
                    <Typography variant = "h6" align='left' >
                        {titlechange(product.title)}
                    </Typography>
                </div>
                {/*<Typography dangerouslySetInnerHTML = {{ __html: product.description}} variant = "body2" color = "textSecondary"></Typography>*/}
            </CardContent>
            <CardActions disableSpacing className = {classes.cardActions}>
                <Typography>
                    {product.price}$
                </Typography>
                <Button aria-label ="Add to Cart" onClick= {()=> {handleAddToCart(product)}}>
                    <AddShoppingCart/> 
                </Button>
            </CardActions>
        </Card>
    )
}

export default Product
