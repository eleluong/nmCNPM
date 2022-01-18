import { useEffect, useState } from 'react'

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import UpdateEvent from './UpdateEvent';
import styles from "./Events.module.css"
import AlertDialog from '../Dialog/AlertDialog';
function Events() {
    const [events, setEvents] = useState([]);
    const [event, setEvent] = useState([]);
    const [change, setChange] = useState(0);
    const [isOpenUpdate, setIsOpenUpdate] = useState(false);
    const [isOpenDialog, setIsOpenDialog] = useState(false);
    useEffect(() => {
        const getEvents = async () => {
            var eventsAPI = 'http://localhost:5000/shopevent/get_all';
            const res = await (await fetch(eventsAPI)).json();
            setEvents(res);
        };
        getEvents();
    }, [change]);

    function handleDeleteEvent(event) {
        var eventsDeleteAPI = 'http://localhost:5000/shopevent/delete';
        fetch(eventsDeleteAPI, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(event)
        })
            .then(res => setChange(change+1))
    }
    function dialogDeleteEvent(event) {
        setIsOpenDialog(true);
        setEvent(event);
    }
    function handleUpdateEvent(event) {
        setIsOpenUpdate(true);
        setEvent(event);
    }
    // console.log(events);

    return (
        <div className={styles.events}>
            <h1 className={styles.side_bar}>Danh sách sự kiện</h1>
            {isOpenUpdate && <UpdateEvent event={event} isOpen={setIsOpenUpdate} change={change} isChange={setChange}></UpdateEvent>}
            {isOpenDialog && <AlertDialog setOpen={setIsOpenDialog} remove={handleDeleteEvent} data={event}  ></AlertDialog>}
            <TableContainer component={Paper}>
                <Table aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell className={styles.item}>Tên khách hàng</TableCell>
                            <TableCell align="center">Số điện thoại</TableCell>
                            <TableCell align="center">Số người tham gia</TableCell>
                            <TableCell align="center">Thời gian</TableCell>
                            <TableCell align="center">Cập nhật</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {events.map((event) => (
                            <TableRow
                                id={event.id}
                                key={event.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {event.name}
                                </TableCell>
                                <TableCell align="center">{event.phone}</TableCell>
                                <TableCell align="center">{event.number}</TableCell>
                                <TableCell align="center">{event.time}</TableCell>
                                <TableCell align="center">
                                    <button className={styles.btn_update} onClick={() => handleUpdateEvent(event)}>Sửa</button>
                                    <button className={styles.btn_delete} onClick={() => dialogDeleteEvent(event)}>Hủy</button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );

}

export default Events