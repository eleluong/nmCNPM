import {useEffect, useState} from 'react'

import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@material-ui/core';
import styles from "./Events.module.css"

function Events() {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        const getEvents = async () => {
            var eventsAPI = 'http://localhost:5000/shopevent/get_all';
            const res = await (await fetch(eventsAPI)).json();
            setEvents(res);
        };
        getEvents();
    }, []);

    function handleDeleteEvent(event) {
        var eventsDeleteAPI = 'http://localhost:5000/shopevent/delete';
        var e = document.getElementById(event.id);
        if (e) {
            e.remove();
        }
        fetch(eventsDeleteAPI, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(event)
        })
            .then(res => res.json())
    }

    // console.log(events);

    return (
        <div className={styles.events}>
            <h1 className={styles.side_bar}>Danh sách sự kiện</h1>
            <TableContainer component={Paper}>
                <Table aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell className={styles.item}>Tên khách hàng</TableCell>
                            <TableCell align="right">Số điện thoại</TableCell>
                            <TableCell align="right">Số người tham gia</TableCell>
                            <TableCell align="right">Thời gian</TableCell>
                            <TableCell align="right">Cập nhật</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {events.map((event) => (
                            <TableRow
                                id={event.id}
                                key={event.id}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell component="th" scope="row">
                                    {event.name}
                                </TableCell>
                                <TableCell align="right">{event.phone}</TableCell>
                                <TableCell align="right">{event.number}</TableCell>
                                <TableCell align="right">{event.time}</TableCell>
                                <TableCell align="right">
                                    <button className={styles.btn_delete} onClick={() => handleDeleteEvent(event)}>Hủy
                                    </button>
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