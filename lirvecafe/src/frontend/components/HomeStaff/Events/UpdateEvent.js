import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from 'react'
import styles from '../CreateEvent/CreateEvent.module.css'

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

function UpdateEvent({ event, isOpen, change, isChange }) {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: yupResolver(schema) });
    const [name, setName] = useState(event.name);
    const [phone, setPhone] = useState(event.phone);
    const [number, setNumber] = useState(event.number);
    const [time, setTime] = useState(event.time);
    var newEvent = {
        id: event.id,
        name: name,
        phone: phone,
        number: number,
        time: time,
    }

    var eventsAPI = 'http://localhost:5000/shopevent/update'
    function UpdateEvent(data) {
        fetch(eventsAPI, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then(res => isChange(change+1))
    }

    const onSubmit = (data) => {
        UpdateEvent(newEvent);
        isOpen(false);
    };
    return (
        <div className={styles.main}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <h1 className={styles.form_heading}>Chỉnh sửa thông tin sự kiện</h1>
                <div className={styles.field}>
                    <label className={styles.form_label}>Tên khách hàng: </label>
                    <input className={styles.form_input} placeholder="VD: Nguyễn Văn Biển" {...register("name")}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {/* Nếu có lỗi thì hiển thị nó ra cho người dùng */}
                    {errors.name &&
                        <p className={styles.form_error}>{errors.name?.message}</p>}
                </div>
                <div className={styles.field}>
                    <label className={styles.form_label}>Số điện thoại: </label>
                    <input className={styles.form_input} placeholder="VD: 0123456789" {...register("phone")}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    {/* Nếu có lỗi thì hiển thị nó ra cho người dùng */}
                    {errors.phone &&
                        <p className={styles.form_error}>{errors.phone?.message}</p>}
                </div>
                <div className={styles.field}>
                    <label className={styles.form_label}>Số lượng người tham gia: </label>
                    <input className={styles.form_input} placeholder="VD: 5" {...register("number")}
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                    />
                    {/* Nếu có lỗi thì hiển thị nó ra cho người dùng */}
                    {errors.number &&
                        <p className={styles.form_error}>{errors.number?.message}</p>}
                </div>
                <div className={styles.field}>
                    <label className={styles.form_label}>Thời gian: </label>
                    <input className={styles.form_input}
                        placeholder="VD: 17h-19h Thứ 6 ngày 1/7" {...register("time")}
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    />
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

export default UpdateEvent