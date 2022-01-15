import styles from "./Header.module.css";
import Navbar from "./Navbar/Navbar";
import Search from "./Search/Search";
import Cart from "./cart/Cart";

function Header() {
    return (
        <div className={styles.header}>
            <Navbar/>
            <div className={styles.list_search_cart}>
                <Search/>
                <Cart/>
            </div>
        </div>
    )
}

export default Header