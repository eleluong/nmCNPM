import React from 'react'
import { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import UpdateProduct from './UpdateProduct';
import styles from './Products.module.css'
import AlertDialog from '../Dialog/AlertDialog';
const ProductList = ({ change, IsChange, type, products, remove }) => {
    const [isOpenUpdate, setIsOpenUpdate] = useState(false);
    const [isOpenDialog, setIsOpenDialog] = useState(false);
    const [product, setProduct] = useState([]);
    function handleUpdateProduct(product) {
        setIsOpenUpdate(true);
        setProduct(product);
    }
    function handleDialog(product){
        setIsOpenDialog(true);
        setProduct(product)
    }
    // console.log(product);
    return (
        <>
            {isOpenUpdate && <UpdateProduct change={change} IsChange={IsChange} setIsOpen={setIsOpenUpdate} product={product}></UpdateProduct>}
            {isOpenDialog && <AlertDialog setOpen={setIsOpenDialog} remove={remove} data={product}></AlertDialog>}
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
                                        <button className={styles.btn_delete} onClick={() => handleDialog(product)}>Xóa</button>
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
