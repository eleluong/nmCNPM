import styles from "../Header.module.css"
import { Link} from "react-router-dom"
import * as ROUTES from '../../constants/routes/routes'
function Navbar() {
  
    return (
        
        <nav className={styles.navbar}>
            <Link to="/" className={styles.navbar_home}> Lirve Coffe</Link>
            
            <ul className={styles.navbar_list}>
                <Link to={ROUTES.REGISTER} className={`${styles.navbar_item} ${styles.navbar_item_separate}`}> Đăng ký</Link>
                <Link to={ROUTES.SIGNIN} className={styles.navbar_item}>Đăng nhập</Link>
            </ul>
        </nav> 
      
    )
}

export default Navbar