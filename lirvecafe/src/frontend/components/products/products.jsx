import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Product from "./product/product"
import useStyles from "./style";
import { useEffect } from "react";
import { useState } from "react";


const Products = (type) => {
    const classes = useStyles();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProduct = async () => {
            const url = "http://localhost:5000/product/get_all";
            const res = await (await fetch(url)).json();
            setProducts(res);
            // console.log(res);
        };
        getProduct();
    }, []);
    return (
        <div className={classes.root}>
            <Grid container justify="center" spacing={4}>
                {products.map(function (product) {
                    if (product.type == type.type) {
                        return (
                            <Grid item key={product.id} xs={4} sm={4} lg={2}>
                                <Product product={product} />
                            </Grid>
                        );
                    }
                })}

            </Grid>
        </div>


    )

}
export default Products;