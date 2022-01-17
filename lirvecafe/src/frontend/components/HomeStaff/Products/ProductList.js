import React from 'react'
import { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import UpdateProduct from './UpdateProduct';
import styles from './Products.module.css'
const ProductList = ({ change, IsChange, type, products, remove }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [product, setProduct] = useState([]);
    function handleUpdateProduct(product) {
        setIsOpen(true);
        setProduct(product);
    }
    // console.log(product);
    return (
        <>
            {isOpen && <UpdateProduct change={change} IsChange={IsChange} setIsOpen={setIsOpen} product={product}></UpdateProduct>}
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
                            (product.type == type) ? (
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
                                        <button className={styles.btn_update} onClick={() => handleUpdateProduct(product)}>Sửa</button>
                                        <button className={styles.btn_delete} onClick={() => remove(product)}>Xóa</button>
                                    </TableCell>
                                </TableRow>
                            ) : (
                                <></>
                            )
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
export default ProductList