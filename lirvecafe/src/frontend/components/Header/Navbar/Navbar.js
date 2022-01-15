import styles from "../Header.module.css";
import styless from "../../HeaderStaff/HeaderStaffAdmin.module.css";
import {Link} from "react-router-dom";
import * as ROUTES from '../../constants/routes/routes';
import * as isSignined from '../../constants/isSignined';
import {useState} from "react";
import {getCookie, deleteCookie} from "../../constants/userCookie";

function Navbar() {
    //let [user, setUser] = useState(getCookie('userInfo'));

    deleteCookie('admin');
    deleteCookie('staff');
    deleteCookie(isSignined.staff);
    deleteCookie(isSignined.admin);
    let signined = getCookie(isSignined.customer);
    let user = getCookie('customer');
    if (user) {
        // console.log(typeof user);
        // console.log(user);
        user = JSON.parse(user);
        //console.log(user);
    } else {
        user = {}
    }
    const ID = user.id;
    console.log(ID);
    // console.log(user);

    const handleSignout = () => {
        window.location.href = `${ROUTES.BASE_URL_WEB}`;
        deleteCookie(isSignined.customer);
    }
    return (
        <nav className={styles.navbar}>
            <Link to="/" className={styles.navbar_home}> Lirve Coffe</Link>

            <ul className={styles.navbar_list}>
                {!signined ? (<>
                    <Link to={ROUTES.REGISTER} className={`${styles.navbar_item} ${styles.navbar_item_separate}`}> Đăng
                        ký</Link>
                    <Link to={ROUTES.SIGNIN} className={styles.navbar_item}>Đăng nhập</Link>
                </>) : (
                    <li className={styless.navbar_user}>
                        <i className={`${styless.navbar_user_icon} fas fa-user`}></i>
                        <span className={styless.navbar_user_name}>{user.name}</span>
                        <ul className={styless.navbar_user_menu}>
                            {/* <li className={styles.navbar_user_item}>
                                    <span>ID: {userObj.ID}</span>
                                </li> */}
                            {/* <li className={styless.navbar_user_item}>
                                <span className={styless.navbar_user_item_link}>{user.name}</span>
                            </li> */}
                            <li className={styless.navbar_user_item}>
                                <Link to="/" className={styless.navbar_user_item_link}>Tài khoản của tôi</Link>
                            </li>
                            <li className={styless.navbar_user_item}>
                                <span onClick={handleSignout} className={styless.navbar_user_item_link}>Đăng xuất</span>
                            </li>
                        </ul>
                    </li>)}
            </ul>
        </nav>

    )
}

export default Navbar