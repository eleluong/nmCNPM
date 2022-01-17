import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import styles from './Orders.module.css'
const OrdersList = ({ orders, remove, update }) => {
    // var state = orders[0].state;
    // console.log(orders);
    return (
        <TableContainer component={Paper}>
            <Table aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell >Tên khách hàng</TableCell>
                        <TableCell align="right">Số điện thoại</TableCell>
                        <TableCell align="right">Tổng số tiền</TableCell>
                        <TableCell align="right">Địa chỉ</TableCell>
                        <TableCell align="right">Trạng thái</TableCell>
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
                            <TableCell align="right">{order.phone}</TableCell>
                            <TableCell align="right">{order.total}</TableCell>
                            <TableCell align="right">{order.shippingAddress}</TableCell>
                            <TableCell align="right">
                                {
                                    (order.state == 0) ? (
                                        <>
                                            <button className={styles.btn_confirm} onClick={() => update(order)}>Xác nhận</button>
                                            <button className={styles.btn_delete} onClick={() => remove(order)}>Hủy</button>
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

    )
}
export default OrdersList