import React from 'react';
import useStyles from './styles';
import BillItem from './billItem/billItem';

const Bill = ( ) => {
    const [items, setItems] = useState([]);
    const [change, setChange] = useState(false);
    let signined = getCookie(isSignined.customer);
    let user = getCookie('customer');
    if (user) {
        user = JSON.parse(user);
    }
    else {
        user = {}
    }
    const id = user.id;
    const axios = require('axios');
    const handleAddToCart=((itemId)=>{
        const temp = {cartId: id,productId: itemId};
        axios({
            method:'PUT',
            url : "http://localhost:5000/cart/addToCart/",
            data: temp,
        }).then(res=> console.log(res));
        console.log(temp);
        setChange(true);
        
    });
    const handleRemoveFromCart=((itemId)=>{
        const temp = {cartId: id,productId: itemId};
        axios({
            method:'PUT',
            url : "http://localhost:5000/cart/deleteFromCart/",
            data: temp,
        }).then(res=> console.log(res));
        console.log(temp);
        setChange(true);
    });
    useEffect (()=>{
        const getCart = async()=>{
            const url = 'http://localhost:5000/cart/get/'+id;
            const res = await( await(fetch(url
                ))).json();
            setItems(res);
        }
        getCart();
        setChange(false);
    },[change]);
    console.log(items);

    const classes = useStyles();
    return (
        <div> 
            <div className = {classes.cart}>
                <div>
                    {cartItems.map(item =>(
                        <BillItem item = {item} addToCart = {handleAddToCart} removeFromCart = {handleRemoveFromCart}/>
                    ))}
                </div>
                <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
            </div>
        </div>
    )
}

export default Bill;
