import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./Products.module.css"
import { Link } from "react-router-dom";

const schema = yup.object().shape({
    name: yup
        .string()
        .required("Vui lòng nhập tên sản phẩm!")
        .max(50, "Tên tối đa 50 ký tự!"),
    price: yup
        .string()
        .required("Vui lòng nhập giá sản phẩm!"),
    stock: yup
        .string(),
    type: yup
        .string()
        .required("Vui lòng nhập phân loại sản phẩm!"),
    image: yup
        .string(),
    description: yup
        .string(),

});
const AddProduct = () => {
    const {
        register,
        reset,
        setFocus,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: yupResolver(schema) });
    var productsAPI = 'http://localhost:5000/product/add'

    function AddProduct(data) {
        fetch(productsAPI, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
        .then(res=>res.json())
        
    }

    const onSubmit = (data) => {
        AddProduct(data);
        reset({
            name: "",
            price: "",
            stock: "",
            type: "",
            image: "",
            description: "",
        });
        setFocus("name");
    };
    return (
        <div className={styles.addProduct}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <Link to="/staff/Products" className={styles.form_exit}>&times;</Link>
                <h1 className={styles.form_heading}>Điền các thông tin cần thiết để thêm sản phẩm</h1>

                <div className={styles.field}>
                    <label className={styles.form_label}>Tên sản phẩm: </label>
                    <input className={styles.form_input}
                        placeholder="VD: Bạc sỉu" {...register("name")} />
                    {/* Nếu có lỗi thì hiển thị nó ra cho người dùng */}
                    {errors.name &&
                        <p className={styles.form_error}>{errors.name?.message}</p>}
                </div>
                <div className={styles.field}>
                    <label className={styles.form_label}>Giá tiền: </label>
                    <input className={styles.form_input}
                        placeholder="VD: 50000" {...register("price")} />
                    {/* Nếu có lỗi thì hiển thị nó ra cho người dùng */}
                    {errors.phone &&
                        <p className={styles.form_error}>{errors.phone?.message}</p>}
                </div>
                <div className={styles.field}>
                    <label className={styles.form_label}>Phân loại: </label>
                    <input className={styles.form_input} placeholder="VD: Đồ uống điền 0/ Sách điền 1" {...register("type")} />
                </div>
                <div className={styles.field}>
                    <label className={styles.form_label}>Số lượng còn lại: </label>
                    <input className={styles.form_input} placeholder="VD: 10" {...register("stock")} />
                </div>
                <div className={styles.field}>
                    <label className={styles.form_label}>Link ảnh mô tả sản phẩm: </label>
                    <input className={styles.form_input} placeholder="VD: http://image.jpg" {...register("image")} />
                </div>
                <div className={styles.field}>
                    <label className={styles.form_label}>Mô tả sản phẩm: </label>
                    <input className={styles.form_input} placeholder="Bạc sỉu mang đến vị ngọt,..." {...register("description")} />
                </div>
                <div className={styles.field_submit}>
                    <button className={styles.form_submit} type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}
export default AddProduct