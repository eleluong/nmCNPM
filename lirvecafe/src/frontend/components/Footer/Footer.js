import styles from "./Footer.module.css"
function Footer(){
    return(
        <div className={styles.footer}>
            <div className={styles.footer_row}>
                <i className={`${styles.phone_icon} fas fa-phone-square-alt`}></i>
                <p className={styles.footer_content}>Đặt hàng: 0123456789</p>
            </div>
            <p className={styles.footer_content}>Địa chỉ: 1 Đại Cồ Việt, Bách Khoa, Hai Bà Trưng, Hà Nội</p>
        </div>
    )
}
export default Footer