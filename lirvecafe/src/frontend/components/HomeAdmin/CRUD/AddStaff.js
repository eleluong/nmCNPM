import { useForm } from "react-hook-form";
import { useRef } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./CRUD.module.css"
import { Link } from "react-router-dom";
import axios from "axios";
const schema = yup.object().shape({
    name: yup
        .string()
        .required("Vui lòng nhập tên nhân viên!")
        .max(50, "Tên tối đa 50 ký tự!"),
    phone: yup
        .string()
        .required("Vui lòng nhập số điện thoại!"),
    address: yup
        .string()
        .required("Vui lòng nhập địa chỉ"),
    email: yup
        .string()
        .required("Vui lòng nhập email!"),
    password: yup
        .string()
        .required("Vui lòng nhập mật khẩu!")
});
export const AddStaff = () => {

    const {
        register,
        reset,
        setFocus,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: yupResolver(schema) });
    const inputRef = useRef();

    const onSubmit = (data) => {
        console.log(data);
        reset({
            name: "",
            phone: "",
            address: "",
            email: "",
            password: "",
        });
        axios({
            method: 'POST',
            url: 'http://localhost:5000/staff/add',
            data: {
                phone: data.phone,
                password: data.password, 
                name: data.name,
                email: data.email,
                address: data.address
            }
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
        setFocus("name");

        // console.log('Thêm thành công');
        
    };
    return (
        <div className={styles.AddStaff}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <Link to="/admin/CRUD" className={styles.form_exit}>&times;</Link>
                <h1 className={styles.form_heading}>Điền các thông tin cần thiết để thêm nhân viên</h1>
              
                <div className={styles.field}>
                    <label className={styles.form_label}>Tên nhân viên: </label>
                    <input ref={inputRef} className={styles.form_input} placeholder="VD: Nguyễn Văn Biển" {...register("name")} />
                    {/* Nếu có lỗi thì hiển thị nó ra cho người dùng */}
                    {errors.name &&
                        <p className={styles.form_error}>{errors.name?.message}</p>}
                </div>
                <div className={styles.field}>
                    <label className={styles.form_label}>Số điện thoại: </label>
                    <input className={styles.form_input} {...register("phone")} />
                    {/* Nếu có lỗi thì hiển thị nó ra cho người dùng */}
                    {errors.phone &&
                        <p className={styles.form_error}>{errors.phone?.message}</p>}
                </div>
                <div className={styles.field}>
                    <label className={styles.form_label}>Địa chỉ: </label>
                    <input className={styles.form_input} {...register("địa chỉ")} />
                    {/* Nếu có lỗi thì hiển thị nó ra cho người dùng */}
                    {errors.address &&
                        <p className={styles.form_error}>{errors.address?.message}</p>}
                </div>
                <div className={styles.field}>
                    <label className={styles.form_label}>Email: </label>
                    <input className={styles.form_input} {...register("email")} />
                    {/* Nếu có lỗi thì hiển thị nó ra cho người dùng */}
                    {errors.email &&
                        <p className={styles.form_error}>{errors.email?.message}</p>}
                </div>
                <div className={styles.field}>
                    <label className={styles.form_label}>Mật khẩu: </label>
                    <input className={styles.form_input} placeholder="" {...register("password")} />
                    {/* Nếu có lỗi thì hiển thị nó ra cho người dùng */}
                    {errors.password &&
                        <p className={styles.form_error}>{errors.password?.message}</p>}
                </div>
                <div className={styles.field_submit}>
                    <button className={styles.form_submit} type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}
