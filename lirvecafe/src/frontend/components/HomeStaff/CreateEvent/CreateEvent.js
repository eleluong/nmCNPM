import { useForm } from "react-hook-form";
import { useRef } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from './CreateEvent.module.css'
const schema = yup.object().shape({
    name: yup
        .string()
        .required("Vui lòng nhập tên của bạn!")
        .max(50, "Tên tối đa 50 ký tự!"),
    phone: yup
        .string()
        .required("Vui lòng nhập mật khẩu!"),
    number: yup
        .string()
        .required("Vui lòng nhập số lượng người tham gia!"),
    time: yup
        .string()
        .required("Vui lòng nhập thời gian diễn ra sự kiện!")
});
function CreateEvent() {
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
            time: "",
            number: ""
        });
        setFocus("name");
    };
    return (
        <div className={styles.main}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <h1 className={styles.form_heading}>Điền các thông tin cần thiết để tạo sự kiện</h1>
                <div className={styles.field}>
                    <label className={styles.form_label}>Tên khách hàng: </label>
                    <input ref={inputRef} className={styles.form_input} placeholder="VD: Nguyễn Văn Biển" {...register("name")}/>
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
                    <label className={styles.form_label}>Số lượng người tham gia: </label>
                    <input className={styles.form_input} {...register("number")} />
                    {/* Nếu có lỗi thì hiển thị nó ra cho người dùng */}
                    {errors.number &&
                        <p className={styles.form_error}>{errors.number?.message}</p>}
                </div>
                <div className={styles.field}>
                    <label className={styles.form_label}>Thời gian: </label>
                    <input className={styles.form_input} placeholder="VD: 17h-19h Thứ 6 ngày 1/7" {...register("time")} />
                    {/* Nếu có lỗi thì hiển thị nó ra cho người dùng */}
                    {errors.time &&
                        <p className={styles.form_error}>{errors.time?.message}</p>}
                </div>
                <div className={styles.field_submit}>
                    <button className={styles.form_submit} type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}
export default CreateEvent