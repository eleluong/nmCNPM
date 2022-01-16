import { Grid, Typography } from "@material-ui/core";
import Product from '../../products/product/product'
import React, {useState} from 'react'
import axios from 'axios'

const Search = () => {
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    let products = [];

    if (searchInput.length > 0) {
        axios({
            method: 'get',
            url: "http://localhost:5000/product/get_all"
          })
          .then(response => {
              //console.log('1', response.data);
              const items = response.data;
              products = items.filter(item => {
                  //console.log(item.name.toLowerCase());
                  return item.name.toLowerCase().includes(searchInput.toLowerCase().trim());
              })
              console.log('2', products);
          })
          .catch(e => {
              console.log(e);
          })
    }

    return <div>
        <input type="search" placeholder="Search here" onChange={handleChange} value={searchInput} />
        <Grid container justify= "center" spacing = {4}>
            {products.map((product) => (
                <Grid item key = {product.id} xs = {4} sm = {4} lg = {2}>
                    <Product product = {product} />
                </Grid>
            ))}
        </Grid>
    </div>
};
export default Search;
