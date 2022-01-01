import styles from "../Header.module.css"
function Search() {
    return (
        <div className={styles.search}>
            <input type="text" className={styles.search_input} placeholder="Nhập để tìm kiếm sản phẩm"></input>
            <button className={styles.search_btn}>
                <i className={`${styles.search_btn_icon} fas fa-search`}></i>
            </button>
        </div>
    )
}
export default Search