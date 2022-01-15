import clsx from "clsx"
import {useReducer, useState} from "react"
import {Link} from "react-router-dom";
import styles from "./HeaderStaffAdmin.module.css"

import * as ROUTES from '../../components/constants/routes/routes'
import * as isSignined from '../constants/isSignined'
import {deleteCookie, setCookie, getCookie} from '../constants/userCookie'

function HeaderStaff() {
    const [state, setState] = useState('CreateOrder');
    const classes = clsx(styles.tab_item, styles.active);
    const isActive = (value) => {
        if (value === state) return classes;
        else return styles.tab_item
    }

    deleteCookie('admin');
    // deleteCookie('customer');
    deleteCookie(isSignined.admin);
    deleteCookie(isSignined.customer);
    let signined = getCookie(isSignined.staff);
    if (!signined) {
        window.location.href = ROUTES.BASE_URL_WEB;
    }
    let staffInfo = getCookie('staff');
    if (staffInfo) {
        staffInfo = JSON.parse(staffInfo);
    } else {
        staffInfo = {};
    }

    const ID = staffInfo.id;
    // console.log(ID);
    const staffSignout = () => {
        deleteCookie(isSignined.staff);
        deleteCookie('staff');
        window.location.href = ROUTES.BASE_URL_WEB;
    }
    return (
        <div>
            <nav className={styles.navbar_staff}>
                <Link to="/staff" onClick={() => setState('CreateOrder')} className={styles.navbar_home}> Lirve
                    Coffe</Link>
                <li className={styles.navbar_user}>
                    <i className={`${styles.navbar_user_icon} fas fa-user`}></i>
                    <span className={styles.navbar_user_name}>ID: {staffInfo.id}</span>
                    <ul className={styles.navbar_user_menu}>
                        <li className={styles.navbar_user_item}>
                            <Link to="/staff" className={styles.navbar_user_item_link}>Tài khoản của tôi</Link>
                        </li>
                        <li className={styles.navbar_user_item}>
                            <span onClick={staffSignout} className={styles.navbar_user_item_link}>Đăng xuất</span>
                        </li>
                    </ul>
                </li>
            </nav>
            <div className={styles.tabs}>
                <Link to="CreateOrder" onClick={() => setState('CreateOrder')} className={isActive('CreateOrder')}>Tạo
                    đơn hàng</Link>
                <Link to="Orders" onClick={() => setState('Orders')} className={isActive('Orders')}>Đơn hàng</Link>
                <Link to="Products" onClick={() => setState('Products')} className={isActive('Products')}>Sản
                    phẩm</Link>
                <Link to="CreateEvent" onClick={() => setState('CreateEvent')} className={isActive('CreateEvent')}>Tạo
                    sự kiện</Link>
                <Link to="Events" onClick={() => setState('Events')} className={isActive('Events')}>Sự kiện</Link>
            </div>
        </div>
    )
}

export default HeaderStaff