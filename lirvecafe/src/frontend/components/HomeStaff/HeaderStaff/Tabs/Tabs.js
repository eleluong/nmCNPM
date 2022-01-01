import clsx from "clsx"
import { useState } from "react"
import { Link } from "react-router-dom";
import styles from "./Tabs.module.css"
function Tabs() {
    const [state, setState] = useState('Tạo đơn hàng');
    // const tab_items = document.getElementsByClassName(styles.tab_item);

    // for (const tab_item of tab_items) {
    //     tab_item.addEventListener("click", function () {
    //         setState(tab_item.innerText);
    //     });
    // }
    const classes = clsx(styles.tab_item, styles.active);
    const isActive = (value) => {
        if (value === state) return classes;
        else return styles.tab_item
    }
    return (
        <div className={styles.tabs} >
            <Link to="/TaoDonHang" onClick ={()=>setState('Tạo đơn hàng')} className={isActive('Tạo đơn hàng')}>Tạo đơn hàng</Link>
            <Link to="/DonHang" onClick ={()=>setState('Đơn hàng')} className={isActive('Đơn hàng')}>Đơn hàng</Link>
            <Link to="/DoUong" onClick ={()=>setState('Đồ uống')} className={isActive('Đồ uống')}>Đồ uống</Link>
            <Link to="/Sach" onClick ={()=>setState('Sách')} className={isActive('Sách')}>Sách</Link>
            <Link to="/TaoSuKien" onClick ={()=>setState('Tạo sự kiện')} className={isActive('Tạo sự kiện')}>Tạo sự kiện</Link>
            <Link to="/SuKien" onClick ={()=>setState('Sự kiện')} className={isActive('Sự kiện')}>Sự kiện</Link>
        </div>
    )
}
export default Tabs