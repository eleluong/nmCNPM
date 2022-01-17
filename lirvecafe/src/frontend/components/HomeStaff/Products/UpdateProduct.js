import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./Products.module.css"
import { useState } from "react";

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
const UpdateProduct = ({change, IsChange, setIsOpen, product}) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: yupResolver(schema) });
    // console.log(product);

    const [name, setName] = useState(product.name);
    const [price, setPrice] = useState(product.price);
    const [image, setImage] = useState(product.image);
    const [type, setType] = useState(product.type);
    const [stock, setStock] = useState(product.stock);
    const [description, setDescription] = useState(product.description);
    
    var newProduct = {
        id: product.productId,
        name: name,
        price: price,
        type: type,
        stock: stock,
        image: image,
        description: description,
    };
    
    function UpdateProduct(product){
        var productsAPI = 'http://localhost:5000/product/update'
        fetch(productsAPI, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product),
        })
            .then(res => IsChange(change+1))
    }

    const onSubmit = (data) => {
        UpdateProduct(newProduct);
        setIsOpen(false);
    };
    return (
        <div className={styles.addProduct}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <h1 className={styles.form_heading}>Chỉnh sửa sản phẩm</h1>

                <div className={styles.field}>
                    <label className={styles.form_label}>Tên sản phẩm: </label>
                    <input className={styles.form_input}
                        placeholder="VD: Bạc sỉu" {...register("name")}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {/* Nếu có lỗi thì hiển thị nó ra cho người dùng */}
                    {errors.name &&
                        <p className={styles.form_error}>{errors.name?.message}</p>}
                </div>
                <div className={styles.field}>
                    <label className={styles.form_label}>Giá tiền: </label>
                    <input className={styles.form_input}
                        placeholder="VD: 50000" {...register("price")}
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    {/* Nếu có lỗi thì hiển thị nó ra cho người dùng */}
                    {errors.phone &&
                        <p className={styles.form_error}>{errors.phone?.message}</p>}
                </div>
                <div className={styles.field}>
                    <label className={styles.form_label}>Phân loại: </label>
                    <input className={styles.form_input} placeholder="VD: Đồ uống điền 0/ Sách điền 1" {...register("type")}
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    />
                </div>
                <div className={styles.field}>
                    <label className={styles.form_label}>Số lượng còn lại: </label>
                    <input className={styles.form_input} placeholder="VD: 10" {...register("stock")}
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                    />
                </div>
                <div className={styles.field}>
                    <label className={styles.form_label}>Link ảnh mô tả sản phẩm: </label>
                    <input className={styles.form_input} placeholder="VD: http://image.jpg" {...register("image")}
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </div>
                <div className={styles.field}>
                    <label className={styles.form_label}>Mô tả sản phẩm: </label>
                    <input className={styles.form_input} placeholder="Bạc sỉu mang đến vị ngọt,..." {...register("description")}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className={styles.field_submit}>
                    <button className={styles.form_submit} type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}
export default UpdateProduct