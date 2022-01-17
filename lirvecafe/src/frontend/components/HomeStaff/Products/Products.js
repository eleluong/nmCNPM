import { useEffect, useState } from 'react'
import { Routes, Route, Link } from "react-router-dom"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import styles from "./Products.module.css"
import AddProduct from './AddProduct';
import NotifyConfirm from './NotifyConfirm';

function Products() {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState([]);
    const [isOpen, setIsOpen] = useState(['false']);
    useEffect(() => {
        const getProduct = async () => {
            const url = "http://localhost:5000/product/get_all";
            const res = await (await fetch(url)).json();
            setProducts(res);
        };
        getProduct();
    }, []);
    function handleConfirmDelete(product){
        setIsOpen("true");
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

    return (
        <div className={styles.products}>
            <NotifyConfirm isOpen={isOpen} />
            <div className={styles.header}>
                <h1 className={styles.label}>Danh sách sản phẩm</h1>
                <Link to='ThemSanPham' className={styles.AddProduct_link}> Thêm sản phẩm</Link>
            </div>
            <TableContainer component={Paper}>
                <Table aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Hình ảnh</TableCell>
                            <TableCell align="center">Tên sản phẩm</TableCell>
                            <TableCell align="center">Phân loại</TableCell>
                            <TableCell align="center">Giá tiền</TableCell>
                            <TableCell align="center">Số lượng còn lại</TableCell>
                            <TableCell align="center">Hành động</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow
                                id={product.productId}
                                key={product.productId}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                style={{ 'padding': '4px 8px' }}
                            >
                                <TableCell component="th" scope="row" align="center">
                                    <img src={product.image} className={styles.img}></img>
                                </TableCell>
                                <TableCell align="center">{product.name}</TableCell>
                                <TableCell align="center">{product.type}</TableCell>
                                <TableCell align="center">{product.price}</TableCell>
                                <TableCell align="center">{product.stock}</TableCell>
                                <TableCell align="center">
                                    <button className={styles.btn_delete} onClick={() => handleConfirmDelete(product)}>Xóa
                                    </button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Routes>
                <Route path='ThemSanPham' element={<AddProduct/>}></Route>
            </Routes>
        </div>
    );

}

export default Products