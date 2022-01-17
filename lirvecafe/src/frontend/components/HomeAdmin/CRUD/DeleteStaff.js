import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./CRUD.module.css"
import axios from "axios";
// import styles from "./UpdateStaff.module.css"
function DeleteStaff(props) {
    // console.log(props);
    const staffInfo = props.staff;
    // console.log(staffInfo);
    
    // const currentInfo = {
    //     id: staffInfo.id,
    //     name: name,
    //     phone: phone,
    //     address: address,
    //     email: email
    // }

    const handleDeleteStaffInfo = () => {
        //Hàm Xóa-API tương ứng ID lấy từ staffInfo
        axios({
            method: 'DELETE',
            url: 'http://localhost:5000/staff/delete',
            data: {
                id: staffInfo.id,
            }
        })
        .then(res => {
            // console.log(res.status);
            if(res.status === 200) {
                props.closeModal(false);
                props.setFlagSuccess(true);
            }
            
        }) 
        .catch(error => {
            console.log(error);
        })
        //Xóa thất bại
        //Xóa thành công
        // alert("xóa thành công!");
        
    }
    return (
        <div className={styles.DeleteStaff}>
            <div className={styles.form} >
                <span onClick={() => props.closeModal(false)} className={styles.form_exit}>&times;</span>
                <h1 className={styles.form_heading}>Xác nhận xóa tài khoản</h1>
                
                <div className={styles.field}>
                    <label className={styles.form_label}>ID: {staffInfo.id}</label>
                </div>
                <div className={styles.field}>
                    <label className={styles.form_label}>Tên nhân viên: {staffInfo.name}</label>
                </div>
               
                
                <div className={styles.field_submit}>
                    <button onClick={() => handleDeleteStaffInfo()} className={styles.form_submit} type="submit">Xác nhận</button>
                    <button onClick={() => props.closeModal(false)} className={styles.form_submit_cancel} type="submit">Hủy xóa</button>
                </div>
            </div>
        </div>
    );
}
export default DeleteStaff;