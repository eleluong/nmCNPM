import styles from "./NavbarStaff.module.css"
import { Link } from "react-router-dom"
function NavbarStaff(){
    return(
        <nav className={styles.navbar_staff}>
            <Link to="/" className={styles.navbar_home}> Lirve Coffe</Link>
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
    )
}
export default NavbarStaff