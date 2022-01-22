import { Grid, Typography } from "@material-ui/core";
import Product from '../../products/product/product'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from '../Header.module.css'

const Search = () => {
    const [searchInput, setSearchInput] = useState("");
    const [products, setProducts] = useState([]);
    const [open, setOpen] = useState(false);

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };
    function handleOpenSearch() {
        setOpen(true);
    }
    let productArray = [];

    useEffect(() => {
        if (searchInput == "") {
            setOpen(false);
        }
        else {
            axios({
                method: 'get',
                url: "http://localhost:5000/product/get_all"
            })
                .then(response => {
                    //console.log('1', response.data);
                    const items = response.data;
                    productArray = items.filter(item => {
                        //console.log(item.name.toLowerCase());
                        return item.name.toLowerCase().includes(searchInput.toLowerCase().trim());
                    })
                    // console.log('2', productArray);
                    setProducts(productArray);
                    setOpen(true);
                })
                .catch(e => {
                    console.log(e);
                })
        }

    }, [searchInput]);



    return (

        <div className={styles.search}>
            <input type="search" className={styles.search_input} placeholder="Nhập để tìm kiếm sản phẩm" onChange={handleChange} value={searchInput}></input>
            <button className={styles.search_btn}>
                <i className={`${styles.search_btn_icon} fas fa-search`} onClick={handleOpenSearch}></i>
            </button>
            {open && (
                (products.length == 0) ? (
                    <div className={styles.main_search}>
                        <h1 style={{textAlign: 'center'}}> Không tìm thấy sản phẩm</h1>
                    </div>
                ) : (
                    <div className={styles.main_search}>
                        <div >
                            <Grid container justify="center" spacing={4}>
                                {products.map((product) => (
                                    <Grid item key={product.id} xs={4} sm={4} lg={2}>
                                        <Product product={product} />
                                    </Grid>
                                ))}
                            </Grid>
                        </div>
                    </div>
                )
            )}
        </div >
    )
};
export default Search;
