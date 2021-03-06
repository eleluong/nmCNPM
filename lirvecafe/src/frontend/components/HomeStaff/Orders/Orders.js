import { useEffect, useState } from 'react'
import { Box, Tab } from '@material-ui/core';
import { TabContext, TabList, TabPanel } from '@material-ui/lab'
import { getCookie } from '../../constants/userCookie';
import styles from "./Orders.module.css"
import OrdersList from './OrdersList';

export default function Orders() {
    const [awaitOrders, setAwaitOrders] = useState([]);
    const [comfirmOrders, setConfirmOrders] = useState([]);
    const [completeOrders, setCompleteOrders] = useState([]);
    const [change, setChange] = useState(0);
    const [value, setValue] = useState('1');
    var Await = 0;
    var Comfirm = 1;
    var Complete = 2;
    let staff = getCookie('staff');
    if (staff) {
        staff = JSON.parse(staff);
    } else {
        staff = {}
    }
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
        getOrders(Comfirm);
        getOrders(Complete);
    }, [change]);
    const handleDeleteOrder = (order) => {
        var id = order.billId;
        var orderDeleteAPI = 'http://localhost:5000/bill/delete/' + id;
        fetch(orderDeleteAPI, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => setChange(change + 1));
    }
    const handleUpdateOrder = (order) => {
        var id = order.billId;
        var orderDeleteAPI = 'http://localhost:5000/bill/update';
        const res = fetch(orderDeleteAPI, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ staffID: staff.id, billId: id })
        })
            .then(res => setChange(change + 1));
    }


    console.log(awaitOrders);

    return (
        <div className={styles.orders}>
            {/* <div className={styles.header}>
                <h1 className={styles.label}>Danh s??ch ????n h??ng</h1>
            </div> */}
            <div className={styles.tabs}>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className={styles.tabs_list}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Ch??? x??c nh???n" value="1" style={{ 'font-weight': '700' }} />
                                <Tab label="??ang giao" value="2" style={{ 'font-weight': '700' }} />
                                <Tab label="Ho??n th??nh" value="3" style={{ 'font-weight': '700' }} />
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
