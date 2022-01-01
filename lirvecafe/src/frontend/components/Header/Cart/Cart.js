import styles from "../Header.module.css"
function Cart() {
    return (
            <div className={styles.cart}>
                <i className={`${styles.cart_icon} fas fa-shopping-cart`}></i>
            </div>
    )
}
export default Cart