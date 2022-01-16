import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./CRUD.module.css"
import axios from "axios";
// import styles from "./UpdateStaff.module.css"
function UpdateStaff(props) {
    // console.log(props);
    const staffInfo = props.staff;
    // console.log(staffInfo);
    const [name, setName] = useState(staffInfo.name);
    const [phone, setPhone] = useState(staffInfo.phone);
    const [address, setAddress] = useState(staffInfo.address);
    const [email, setEmail]= useState(staffInfo.email);
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const currentInfo = {
        id: staffInfo.id,
        name: name,
        phone: phone,
        address: address,
        email: email,
        password: password
    }
    // console.log('Current Info Edit: ', currentInfo);

    const handleUpdateStaffInfo = () => {
        if(!name || !phone || !address || !email || !password){
            setMsg('Vui lòng nhập đủ các trường thông tin!');
        }
        else if(password.length <=6) {
            setMsg('Mật khẩu phải lớn hơn 6 ký tự!')
        }
        else {
            // axios() API sửa đổi thông tin từ StaffInfo
            //Thông tin thay đổi tương ứng các biến ở setState
            // console.log("StaffInfo cần thay đổi: ", staffInfo);
            setMsg('');
            axios({
                method: 'PUT',
                url: 'http://localhost:5000/staff/update',
                data: {
                    id: staffInfo.id,
                    name: name,
                    phone: phone,
                    email: email,
                    address: address,
                    password: password
                }
            })
            .then(res => {   
               
                // console.log(res.data);
                if(res.data.id === 1) {//Trả về 200 và thành công
                    props.setFlagSuccess(true);
                    props.closeModal(false);
                }
                else if (res.data.id === 2) {
                    setMsg(res.data.message);
                    // console.log(res.data.message);
                }
               
                
            })
            .catch(err => {
                console.log(err);
            })
            // alert("Sửa đổi thành công");
           
            
            
        }
    }
    return (
        <div className={styles.UpdateStaff}>
            <div className={styles.form} >
                <span onClick={() => props.closeModal(false)} className={styles.form_exit}>&times;</span>
                <h1 className={styles.form_heading}>Chỉnh sửa thông tin nhân viên</h1>
                {/* {msg && (<h3 className={styles.form_message}>{msg}</h3>)} */}
                <div className={styles.field}>
                    <label className={styles.form_label}>ID: {staffInfo.id}</label>
                    {/* <div>{props.staff.id}</div> */}
                    {/* Nếu có lỗi thì hiển thị nó ra cho người dùng */}
                    {/* {errors.password &&
                        <p className={styles.form_error}>{errors.password?.message}</p>} */}
                </div>
                <div className={styles.field}>
                    <label className={styles.form_label}>Tên nhân viên: </label>
                    <input className={styles.form_input}
                        defaultValue={name}
                        placeholder="VD: Nguyễn Văn Biển"
                        onChange={(e) => setName(e.target.value)}  />
                    {/* Nếu có lỗi thì hiển thị nó ra cho người dùng */}
                    {/* {errors.name &&
                        <p className={styles.form_error}>{errors.name?.message}</p>} */}
                </div>
                <div className={styles.field}>
                    <label className={styles.form_label}>Số điện thoại: </label>
                    <input className={styles.form_input}
                        defaultValue={phone} onChange={(e) => setPhone(e.target.value)}/>
                    {/* Nếu có lỗi thì hiển thị nó ra cho người dùng */}
                    {/* {errors.phone &&
                        <p className={styles.form_error}>{errors.phone?.message}</p>} */}
                </div>
                <div className={styles.field}>
                    <label className={styles.form_label}>Địa chỉ: </label>
                    <input className={styles.form_input} 
                        defaultValue={address} onChange={(e) => setAddress(e.target.value)}/>
                    {/* Nếu có lỗi thì hiển thị nó ra cho người dùng */}
                    {/* {errors.address &&
                        <p className={styles.form_error}>{errors.address?.message}</p>} */}
                </div>
                <div className={styles.field}>
                    <label className={styles.form_label}>Email: </label>
                    <input className={styles.form_input} 
                        defaultValue={email} onChange={(e) => setEmail(e.target.value)}/>
                    {/* Nếu có lỗi thì hiển thị nó ra cho người dùng */}
                    {/* {errors.email &&
                        <p className={styles.form_error}>{errors.email?.message}</p>} */}
                </div>
                <div className={styles.field}>
                    <label className={styles.form_label}>Mật khẩu: </label>
                    <input className={styles.form_input} 
                        defaultValue={''} onChange={(e) => setPassword(e.target.value)}/>
                    {/* Nếu có lỗi thì hiển thị nó ra cho người dùng */}
                    {/* {errors.email &&
                        <p className={styles.form_error}>{errors.email?.message}</p>} */}
                </div>
                {msg && <span style={{color : 'red'}}>{msg}</span>}
                <div className={styles.field_submit}>
                    <button onClick={() => handleUpdateStaffInfo()} className={styles.form_submit} type="submit">Lưu thay đổi</button>
                    <button onClick={() => props.closeModal(false)} className={styles.form_submit_cancel} type="submit">Hủy</button>
                </div>
            </div>
        </div>
    );
}
export default UpdateStaff;