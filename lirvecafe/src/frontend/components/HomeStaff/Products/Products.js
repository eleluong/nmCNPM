import { useEffect, useState } from 'react'
import { Box, Tab } from '@material-ui/core';
import { TabContext, TabList, TabPanel } from '@material-ui/lab'
import styles from "./Products.module.css"
import AddProduct from './AddProduct';
import ProductList from './ProductList'
function Products() {
    const [products, setProducts] = useState([]);
    const [value, setValue] = useState('1');
    const [change, setChange] = useState(0);
    var drink = 0;
    var book = 1;

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    useEffect(() => {
        const getProduct = async () => {
            const url = "http://localhost:5000/product/get_all";
            const res = await (await fetch(url)).json();
            setProducts(res);
        };
        getProduct();
    }, [change]);

    function handleAddProduct(product) {
        var productsAPI = 'http://localhost:5000/product/add'
        fetch(productsAPI, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product),
        })
            .then(res => setChange(change + 1));

    }

    function handleDeleteProduct(product) {
        var ProductsDeleteAPI = 'http://localhost:5000/product/delete';
        var e = document.getElementById(product.productId);
        if (e) {
            e.remove();
        }
        fetch(ProductsDeleteAPI, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
    }
    function handleUpdateProduct() {

    }
    return (
        <div className={styles.products}>
            <div className={styles.tabs}>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className={styles.tabs_list}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Đồ uống" value="1" style={{ 'font-weight': '700' }} />
                                <Tab label="Sách" value="2" style={{ 'font-weight': '700' }} />
                                <Tab label="Thêm sản phẩm" value="3" style={{ 'font-weight': '700' }} />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <ProductList
                                type={drink}
                                products={products}
                                remove={handleDeleteProduct}
                                update={handleUpdateProduct}
                            />
                        </TabPanel>
                        <TabPanel value="2">
                            <ProductList
                                type={book}
                                products={products}
                                remove={handleDeleteProduct}
                                update={handleUpdateProduct}
                            />
                        </TabPanel>
                        <TabPanel value="3">
                            <AddProduct
                                add={handleAddProduct}
                            />
                        </TabPanel>
                    </TabContext>
                </Box>
            </div>
        </div>
    );

}

export default Products