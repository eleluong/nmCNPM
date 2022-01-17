import { useEffect, useState } from 'react'
import { Box, Tab } from '@material-ui/core';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

import { TabContext, TabList, TabPanel } from '@material-ui/lab'
import styles from "./Orders.module.css"
import OrdersList from './OrdersList';

export default function Orders() {
    const [awaitOrders, setAwaitOrders] = useState([]);
    const [comfirmOrders, setConfirmOrders] = useState([]);
    const [completeOrders, setCompleteOrders] = useState([]);
    const [value, setValue] = useState('1');
    var Await = 0;
    var Comfirm = 1;
    var Complete = 2;

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    useEffect(() => {
        const getOrders = async (state) => {
            const url = 'http://localhost:5000/bill/get_by_state/' + state;
            const res = await (await (fetch(url
            ))).json();
            // console.log(res);
            if (state == 0) {
                setAwaitOrders(res);
            }
            else if (state == 1) {
                setConfirmOrders(res);
            }
            else setCompleteOrders(res);
        }
        getOrders(Await);
        // getOrders(Comfirm);
        // getOrders(Complete);
    }, []);
    const handleDeleteOrder = (order) => {
        console.log(order);
    }
    const handleUpdateOrder = (order) => {
        console.log(order);
    }


    console.log(awaitOrders);

    return (
        <div className={styles.orders}>
            {/* <div className={styles.header}>
                <h1 className={styles.label}>Danh sách đơn hàng</h1>
            </div> */}
            <div className={styles.tabs}>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className={styles.tabs_list}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Chờ xác nhận" value="1" style={{ 'font-weight': '700' }} />
                                <Tab label="Đang giao" value="2" style={{ 'font-weight': '700' }} />
                                <Tab label="Hoàn thành" value="3" style={{ 'font-weight': '700' }} />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <OrdersList
                                orders={awaitOrders}
                                remove={handleDeleteOrder}
                                update={handleUpdateOrder}
                            />
                        </TabPanel>
                        <TabPanel value="2">
                            <OrdersList
                                orders={comfirmOrders}
                                update={handleUpdateOrder}
                            />
                        </TabPanel>
                        <TabPanel value="3">
                            <OrdersList
                                orders={completeOrders}
                            />
                        </TabPanel>
                    </TabContext>
                </Box>
            </div>
        </div>
    );
}
