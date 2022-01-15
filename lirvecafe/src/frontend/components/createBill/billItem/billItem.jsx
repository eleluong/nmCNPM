import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Grid} from '@material-ui/core';
import useStyles from './styles';
import {Typography} from '@material-ui/core';
import {useEffect} from 'react';
import * as ROUTES from '../../constants/routes/routes';
import * as isSignined from '../../constants/isSignined';
import {getCookie, deleteCookie} from "../../constants/userCookie";
import {useState} from 'react';

const BillItem = ({item, addToCart, removeFromCart}) => {
    let signined = getCookie(isSignined.customer);
    let user = getCookie('customer');
    if (user) {
        // console.log(typeof user);
        // console.log(user);
        user = JSON.parse(user);
        //console.log(user);
    } else {
        user = {}
    }
    const id = user.id;
    const [data, setData] = useState({})
    useEffect(() => {
        const getData = async () => {
            const url = "http://localhost:5000/product/get_by_id/" + item.productId;
            const res = await (await (fetch(url
            ))).json();
            setData(res);
        }
        getData();
        console.log(data);
    }, []);

    const classes = useStyles();
    return (
        <Card className={classes.item}>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <CardContent className={classes.content}>
                        <Typography variant='h7'>{data.name}</Typography>
                        <div>
                            <p>Price: ${data.price}</p>
                            <p>Total: ${(item.quantity * data.price).toFixed(2)}</p>
                        </div>
                    </CardContent>
                </Grid>
                <Grid item xs={2}>
                    <CardActions className={classes.buttons}>
                        <Button
                            disableElevation
                            variant='contained'
                            onClick={() => removeFromCart(item.id)}
                        >
                            -
                        </Button>
                        <p align='center'>{item.quantity}</p>
                        <Button
                            disableElevation
                            variant='contained'
                            onClick={() => addToCart(item.id)}
                        >
                            +
                        </Button>
                    </CardActions>
                </Grid>
                <Grid item xs={4}>
                    <CardMedia>
                        <img className={classes.img} src={data.image} alt={data.name}/>
                    </CardMedia>
                </Grid>
            </Grid>
        </Card>
    )
}

export default BillItem
