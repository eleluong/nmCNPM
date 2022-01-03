import clsx from "clsx"
import { useState } from "react"
import { Link } from "react-router-dom";
import styles from "./HeaderStaffAdmin.module.css"
function HeaderStaff() {
    const [state, setState] = useState('CreateOrder');
    const classes = clsx(styles.tab_item, styles.active);
    const isActive = (value) => {
        if (value === state) return classes;
        else return styles.tab_item
    }
    return (
        <div>
            <nav className={styles.navbar_staff}>
                <Link to="/" onClick={() => setState('CreateOrder')} className={styles.navbar_home}> Lirve Coffe</Link>
                <li className={styles.navbar_user} >
                    <i className={`${styles.navbar_user_icon} fas fa-user`}></i>
                    <span className={styles.navbar_user_name}>NguyenVanBien</span>
                    <ul className={styles.navbar_user_menu}>
                        <li className={styles.navbar_user_item}>
                            <Link to="/">Tài khoản của tôi</Link>
                        </li>
                        <li className={styles.navbar_user_item}>
                            <Link to="/">Đăng xuất</Link>
                        </li>
                    </ul>
                </li>
            </nav>
            <div className={styles.tabs} >
                <Link to="/CreateOrder" onClick={() => setState('CreateOrder')} className={isActive('CreateOrder')}>Tạo đơn hàng</Link>
                <Link to="/Orders" onClick={() => setState('Orders')} className={isActive('Orders')}>Đơn hàng</Link>
                <Link to="/Drinks" onClick={() => setState('Drinks')} className={isActive('Drinks')}>Đồ uống</Link>
                <Link to="/Book" onClick={() => setState('Book')} className={isActive('Book')}>Sách</Link>
                <Link to="/CreateEvent" onClick={() => setState('CreateEvent')} className={isActive('CreateEvent')}>Tạo sự kiện</Link>
                <Link to="/Events" onClick={() => setState('Events')} className={isActive('Events')}>Sự kiện</Link>
            </div>
        </div>
    )
}
export default HeaderStaff