import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./product/product"
import useStyles from "./style";
const Products = ({products, handleAddToCart}) => {
    const classes = useStyles();
    return(
        <main className = {classes.content}>
            <div className = {classes.toolbar}/>
            <Grid container justify= "center" spacing = {4}>
                {products.map((product) =>(
                    <Grid item key = {product.id} xs = {4} sm = {4} lg = {2}>
                        <Product product = {product} handleAddToCart={handleAddToCart}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
    
}
export default Products;