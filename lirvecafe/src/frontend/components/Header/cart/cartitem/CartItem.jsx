import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Grid} from '@material-ui/core';
import useStyles from './styles';
import {Typography} from '@material-ui/core';
import {useState} from 'react';
import * as ROUTES from '../../../constants/routes/routes';
import * as isSignined from '../../../constants/isSignined';
import {getCookie, deleteCookie} from "../../../constants/userCookie";
import {useEffect} from 'react';


const CartItem = ({item, add, remove}) => {

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
        <div className={classes.item}>
            <Grid item xs={3}>
                <CardMedia>
                    <img className={classes.img} src={data.image} alt={data.name}/>
                </CardMedia>
            </Grid>
            <Grid container spacing={0} className={classes.contentWrapper}>
                <Grid item xs={6}>
                    <CardContent className={classes.content}>
                        <Typography variant='h7' className={classes.productName}>{data.name}</Typography>
                        <div className={classes.productInfo}>
                            <p>Price: {data.price}đ</p>
                            <p style={{marginTop: '4px'}}>Quantity: {item.quantity}</p>
                        </div>
                    </CardContent>
                </Grid>
                <Grid item xs={3}>
                    <CardActions className={classes.buttons}>
                        <Button
                            disableElevation
                            variant='contained'
                            onClick={() => remove(item.productId)}
                        >
                            -
                        </Button>
                        <p style={{
                            paddingTop: '4px', 
                            color: '#4b4b4b',
                            fontWeight: '500'
                        }}>{item.quantity * data.price}đ</p>
                        <Button
                            disableElevation
                            variant='contained'
                            onClick={() => add(item.productId, data.price)}
                        >
                            +
                        </Button>
                    </CardActions>
                </Grid>
            </Grid>
        </div>
    )

}

export default CartItem
