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
    // let signined = getCookie(isSignined.customer);
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
    const [data, setData] = useState({
        // name: 'Product Name',
        // price: 100,
        // image: "https://cf.shopee.vn/file/a569e7181216cd0ae2a0f94941902cfa",
    })
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
                            <p>Price: {data.price} VND</p>
                            <p style={{marginTop: '4px'}}>Quantity: {item.quantity}</p>
                        </div>
                    </CardContent>
                </Grid>
                <Grid item xs={4}>
                    <CardActions className={classes.buttons}>
                        <Button
                            disableElevation
                            variant='contained'
                            onClick={() => removeFromCart(item.productId)}
                        >
                            -
                        </Button> 
                        <p style={{
                            paddingTop: '4px',
                            color: '#4b4b4b',
                            fontWeight: '500',
                            margin: '0',
                        }}>{item.quantity * data.price} VND</p>
                        <Button
                            disableElevation
                            variant='contained'
                            onClick={() => addToCart(item.productId, data.price )}
                        >
                            +
                        </Button> 
                    </CardActions>
                </Grid>
            </Grid>
        </div>
    )
}

export default BillItem
