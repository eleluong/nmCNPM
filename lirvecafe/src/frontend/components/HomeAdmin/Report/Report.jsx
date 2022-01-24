import React from 'react';
import { useState, useEffect } from 'react';
import { LineChart, Line , XAxis, YAxis } from 'recharts';
import useStyles from './styles';
const Report = () => {
    const [data, setData] = useState([]);
    const [mn , setmn]= useState([]);
    const [num, setnum] = useState([]);
    useEffect(()=>{
        const getData = async () =>{
            const url = "http://localhost:5000/bill/get_all";
            const res = await(await fetch(url)).json();
            setData(res);
            data.map(item =>{
                //mn.push({x:item.time, y: item.total });
                setmn([...mn,{x:item.time, y: item.total }]);
                //num.push({x:item.item, y: item.number});
                setnum([...num,{x:item.time, y: item.number}]);

            });
        };
        getData();
        
    }, []);
    console.log('data',data);
    const classes = useStyles();
    return (
        <div className={classes.charts}>
            <div>
                <h4>Tổng doanh thu theo ngày</h4>
                <LineChart width={600} height={400} data={data}>
                    <Line type="monotone" dataKey="total" stroke="#8884d8" />
                    <XAxis dataKey="time"/>
                    <YAxis dataKey="total"/>
                </LineChart>
            </div>
            <div>
                <h4>Tổng số đơn hàng theo ngày</h4>
                <LineChart width={600} height={400} data={data}>
                    <Line type="monotone" dataKey="number" stroke="#8884d8" />
                    <XAxis dataKey="time"/>
                    <YAxis dataKey="number"/>
                </LineChart>
            </div>
        </div>
    );
};

export default Report;
