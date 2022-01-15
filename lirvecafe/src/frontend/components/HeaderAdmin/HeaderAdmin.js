import clsx from "clsx"
import {useState} from "react"
import {Link} from "react-router-dom";
import styles from "../HeaderStaff/HeaderStaffAdmin.module.css"

import {deleteCookie, getCookie} from '../constants/userCookie'
import * as ROUTES from '../constants/routes/routes'
import * as isSignined from '../constants/isSignined'

function HeaderStaff() {
    const [state, setState] = useState('CRUD');
    const classes = clsx(styles.tab_item, styles.active);
    const isActive = (value) => {
        if (value === state) return classes;
        else return styles.tab_item
    }

    // deleteCookie('staff');
    // deleteCookie('customer');
    deleteCookie(isSignined.customer);
    deleteCookie(isSignined.staff);
    let signined = getCookie(isSignined.admin)
    if (!signined) {
        window.location.href = ROUTES.BASE_URL_WEB;
    }
    let admin = getCookie('admin');
    if (admin) {
        admin = JSON.parse(admin);
    } else {
        admin = {}
    }
    //ID cần fetch thông tin
    const ID = admin.id;
    console.log(ID);
    const adminSignout = () => {
        deleteCookie(isSignined.admin);
        deleteCookie('admin');
        window.location.href = ROUTES.BASE_URL_WEB;
    }
    return (
        <div>
            <nav className={styles.navbar_staff}>
                <Link to="/admin" onClick={() => setState('CRUD')} className={styles.navbar_home}> Lirve Coffe</Link>
                <li className={styles.navbar_user}>
                    <i className={`${styles.navbar_user_icon} fas fa-user`}></i>
                    <span className={styles.navbar_user_name}>ID: {admin.id}</span>
                    <ul className={styles.navbar_user_menu}>
                        <li className={styles.navbar_user_item}>
                            <Link to="/admin" className={styles.navbar_user_item_link}>Tài khoản của tôi</Link>
                        </li>
                        <li className={styles.navbar_user_item}>
                            <span onClick={adminSignout} className={styles.navbar_user_item_link}>Đăng xuất</span>
                        </li>
                    </ul>
                </li>
            </nav>
            <div className={styles.tabs}>
                <Link to="CRUD" onClick={() => setState('CRUD')} className={isActive('CRUD')}>Quản lí nhân viên</Link>
                <Link to="Report" onClick={() => setState('Report')} className={isActive('Report')}>Thống kê kinh
                    doanh</Link>
            </div>
        </div>
    )
}

export default HeaderStaff