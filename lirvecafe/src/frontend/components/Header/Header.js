import styles from "./Header.module.css";
import Navbar from "./Navbar/Navbar";
import Search from "./Search/Search";
import Cart from "./cart/Cart";

function Header({ name }) {
    console.log("Header ~ name", name)
    return (
        <div className={styles.header}>
            <Navbar name={name} />
            <div className={styles.list_search_cart}>
                <Search/>
                <Cart/>
            </div>
        </div>
    )
}

export default Header