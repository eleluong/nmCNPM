import styles from './ProductDetail.module.css'
function ProductDetail({ product, setOpen }) {
    return (
        <div className={styles.main}>
            <div className={styles.detail}>
                <div className={styles.exit} onClick={() => setOpen(false)}>&times;</div>
                <h1 className={styles.title}>Chi tiết sản phẩm</h1>
                <div className={styles.detail_product}>
                    <img src={product.image} className={styles.image_product}></img>
                    <ul>
                        <div className={styles.detail_item}>
                            <label className={styles.label}>Tên sản phẩm:</label>
                            <span className={styles.span}>{product.name}</span><br />
                        </div>
                        <div className={styles.detail_item}>
                            <label className={styles.label}>Giá tiền:</label>
                            <span className={styles.span}>{product.price}Đ</span><br />
                        </div>
                        <div className={styles.detail_item}>
                            <label className={styles.label}>Mô tả:</label>
                            <span className={styles.span}>{product.description}</span><br />
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default ProductDetail