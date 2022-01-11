import clsx from "clsx"
import { useReducer, useState } from "react"
import { Link } from "react-router-dom";
import styles from "./HeaderStaffAdmin.module.css"

import * as ROUTES from '../../components/constants/routes/routes'
import * as isSignined from '../constants/isSignined'
import { deleteCookie, setCookie, getCookie } from '../constants/userCookie'

function HeaderStaff() {
    const [state, setState] = useState('CreateOrder');
    const classes = clsx(styles.tab_item, styles.active);
    const isActive = (value) => {
        if (value === state) return classes;
        else return styles.tab_item
    }

    deleteCookie('admin');
    // deleteCookie('customer');
    deleteCookie('iscustomerSignined');
    deleteCookie('isadminSigined');
    let signined = getCookie(isSignined.staff);
    if(!signined) {
        window.location.href = ROUTES.BASE_URL_WEB;
    }
    let staffInfo = getCookie('staff');
    if(staffInfo) {
        staffInfo = JSON.parse(staffInfo);
    }
    else {
        staffInfo = {};
    }
    
    const staffSignout = () => {
        deleteCookie(isSignined.staff);
        deleteCookie('staff');
        window.location.href = ROUTES.BASE_URL_WEB;
    }
    return (
        <div>
            <nav className={styles.navbar_staff}>
                <Link to="/" onClick={() => setState('CreateOrder')} className={styles.navbar_home}> Lirve Coffe</Link>
                <li className={styles.navbar_user} >
                    <i className={`${styles.navbar_user_icon} fas fa-user`}></i>
                    <span className={styles.navbar_user_name}>{staffInfo.ID}</span>
                    <ul className={styles.navbar_user_menu}>
                        <li className={styles.navbar_user_item}>
                            <Link to="/staff">Tài khoản của tôi</Link>
                        </li>
                        <li className={styles.navbar_user_item}>
                            <span onClick={staffSignout}>Đăng xuất</span>
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