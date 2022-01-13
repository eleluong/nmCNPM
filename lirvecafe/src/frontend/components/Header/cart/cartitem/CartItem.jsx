import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Grid } from '@material-ui/core';
import useStyles from './styles';
import { Typography } from '@material-ui/core';

const CartItem = ({ item}) => {
    const url = "";
    const handleAddToCart=((itemId)=>{
        
    });
    const handleRemoveFromCart=((itemId)=>{

    });
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
}

export default CartItem
