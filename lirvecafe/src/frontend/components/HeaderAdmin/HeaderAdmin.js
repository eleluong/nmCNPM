import clsx from "clsx"
import { useState } from "react"
import { Link } from "react-router-dom";
import styles from "../HeaderStaff/HeaderStaffAdmin.module.css"
function HeaderStaff(){
    const [state, setState] = useState('CRUD');
    const classes = clsx(styles.tab_item, styles.active);
    const isActive = (value) => {
        if (value === state) return classes;
        else return styles.tab_item
    }
    return(
        <div>
            <nav className={styles.navbar_staff}>
                <Link to="/" onClick={() => setState('CRUD')} className={styles.navbar_home}> Lirve Coffe</Link>
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
            <Link to="/CRUD" onClick ={()=>setState('CRUD')} className={isActive('CRUD')}>Quản lí nhân viên</Link>
            <Link to="/Report" onClick ={()=>setState('Report')} className={isActive('Report')}>Thống kê kinh doanh</Link>
        </div>
        </div>
    )
}
export default HeaderStaff