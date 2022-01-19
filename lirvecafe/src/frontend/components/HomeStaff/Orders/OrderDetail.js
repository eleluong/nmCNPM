import styles from './Orders.module.css'
function OrderDetail({ order, setOpen }) {
    function exitDetail() {
        setOpen(false);
    }
    return (
        <div>
            <div className={styles.main_detail}>
                <div className={styles.detail}>
                    <h1 className={styles.exit_detail} onClick={exitDetail}>&times;</h1>
                    <h1 className={styles.title}>Thông tin đơn hàng</h1>
                    <div className={styles.information}>
                        <label className={styles.label}>Tên khách hàng:</label>
                        <span className={styles.text}> {order.name}</span><br />
                        <label className={styles.label}>SĐT:</label>
                        <span className={styles.text}> {order.phone}</span><br />
                        <label className={styles.label}>Địa chỉ:</label>
                        <span className={styles.text}> {order.shippingAddress}</span><br />
                        <div className={styles.order_list}>
                            <label className={styles.label}>Danh sách sản phẩm:</label><br />
                            {order.products.map(product => (
                                <>
                                <span className={styles.product}>{product.name}</span>
                                <span className={styles.product_number}>x{product.number}</span><br />
                                </>
                            ))}
                        </div>
                        <label className={styles.label}>Tổng số tiền:</label>
                        <span className={styles.total}> {order.total}Đ</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OrderDetail