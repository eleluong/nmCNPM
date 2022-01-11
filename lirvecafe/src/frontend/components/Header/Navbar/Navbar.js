import styles from "../Header.module.css"
import { Link} from "react-router-dom"
import * as ROUTES from '../../constants/routes/routes'
import * as isSignined from '../../constants/isSignined'
import { useState } from "react"


import { getCookie, deleteCookie } from "../../constants/userCookie"
function Navbar() {
    //let [user, setUser] = useState(getCookie('userInfo'));

    deleteCookie('admin');
    deleteCookie('staff');
    deleteCookie(isSignined.staff);
    deleteCookie(isSignined.admin);
    let signined = getCookie(isSignined.customer);
    let user = getCookie('customer');
    
    if(user) {
        user = JSON.parse(user);
    }
    else {
        user = {}
    }
    // console.log(user);
    
    const handleSignout = () => {
        window.location.href = `${ROUTES.BASE_URL_WEB}`;
        deleteCookie('iscustomerSignined')
    }    
    return (
        <nav className={styles.navbar}>
            <Link to="/" className={styles.navbar_home}> Lirve Coffe</Link>
            
            <ul className={styles.navbar_list}>
                {!signined ? (<>
                    <Link to={ROUTES.REGISTER} className={`${styles.navbar_item} ${styles.navbar_item_separate}`}> Đăng ký</Link> 
                    <Link to={ROUTES.SIGNIN} className={styles.navbar_item}>Đăng nhập</Link>
                </>) : (<li className={styles.navbar_user} >
                            <i className={`${styles.navbar_user_icon} fas fa-user`}></i>
                            <span className={styles.navbar_user_name}>ID: {user.ID}</span>
                            <ul className={styles.navbar_user_menu}>
                                {/* <li className={styles.navbar_user_item}>
                                    <span>ID: {userObj.ID}</span>
                                </li> */}
                                <li className={styles.navbar_user_item}>
                                    <Link to="/">Tài khoản của tôi</Link>
                                </li>
                                <li className={styles.navbar_user_item}>
                                    <span onClick={handleSignout}>Đăng xuất</span>
                                </li>
                            </ul>
                        </li>)}
            </ul>
        </nav> 
      
    )
}

export default Navbar