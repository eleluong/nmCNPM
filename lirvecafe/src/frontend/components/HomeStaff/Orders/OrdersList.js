import React, { useState } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import styles from './Orders.module.css'
import AlertDialog from '../Dialog/AlertDialog';
import OrderDetail from './OrderDetail';
const OrdersList = ({ orders, remove, update }) => {
    const [isOpenDialog, setIsOpenDialog] = useState(false);
    const [isOpenDetail, setIsOpenDetail] = useState(false);
    const [order, setOrder] = useState([]);

    function handleDialog(order) {
        setIsOpenDialog(true);
        setOrder(order);
    }
    function handleDetail(order) {
        setIsOpenDetail(true);
        setOrder(order);
    }
    return (
        <>
            {isOpenDialog && <AlertDialog setOpen={setIsOpenDialog} remove={remove} data={order}></AlertDialog>}
            {isOpenDetail && <OrderDetail order={order} setOpen={setIsOpenDetail} ></OrderDetail>}
            <TableContainer component={Paper}>
                <Table aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell >Tên khách hàng</TableCell>
                            <TableCell align="center">Số điện thoại</TableCell>
                            <TableCell align="center">Tổng số tiền</TableCell>
                            <TableCell align="center">Địa chỉ</TableCell>
                            <TableCell align="center">Chi tiết</TableCell>
                            <TableCell align="center">Trạng thái</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((order) => (
                            <TableRow
                                id={order.billId}
                                key={order.billId}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {order.name}
                                </TableCell>
                                <TableCell align="center">{order.phone}</TableCell>
                                <TableCell align="center">{order.total}</TableCell>
                                <TableCell align="center">{order.address}</TableCell>
                                <TableCell align="center">
                                    <button className={styles.btn_detail} onClick={() => handleDetail(order)}>Chi tiết</button>
                                </TableCell>
                                <TableCell align="center">
                                    {
                                        (order.state == 0) ? (
                                            <>
                                                <button className={styles.btn_confirm} onClick={() => update(order)}>Xác nhận</button>
                                                <button className={styles.btn_delete} onClick={() => handleDialog(order)}>Hủy</button>
                                            </>
                                        ) : (order.state == 1) ? (
                                            <>
                                                <button className={styles.btn_complete} onClick={() => update(order)}>Hoàn thành</button>
                                            </>
                                        ) : (
                                            <>
                                            </>
                                        )
                                    }
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
export default OrdersList
