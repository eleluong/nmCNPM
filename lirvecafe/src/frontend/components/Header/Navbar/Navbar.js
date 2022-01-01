import styles from "../Header.module.css"
function Navbar() {
    return (
        <nav className={styles.navbar}>
            <a href="" className={styles.navbar_home}> Lirve Coffe</a>
            
            <ul className={styles.navbar_list}>
                <a href="" className={`${styles.navbar_item} ${styles.navbar_item_separate}`}> Đăng ký</a>
                <a href="" className={styles.navbar_item}>Đăng nhập</a>
            </ul>
        </nav>
    )
}

export default Navbar