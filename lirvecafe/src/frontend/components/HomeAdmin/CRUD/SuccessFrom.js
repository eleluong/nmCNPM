import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./CRUD.module.css"
// import styles from "./UpdateStaff.module.css"
function SuccessForm(props) {
    console.log(props);
    
    // const submitSucessForm = () => {
    //     alert("xóa thành công!")
    // }
    return (
        <div className={styles.SuccessForm}>
            <div className={styles.form} >
                <span onClick={() => props.closeModal(false)} className={styles.form_exit}>&times;</span>
                <h1 className={styles.form_heading}>{props.success} Nhấn OK để quay trở lại</h1>
                
                {/* <div className={styles.field}>
                    <label className={styles.form_label}>ID: {staffInfo.id}</label>
                </div>
                <div className={styles.field}>
                    <label className={styles.form_label}>Tên nhân viên: {staffInfo.name}</label>
                </div> */}
               
                
                <div className={styles.field_submit}>
                    <button onClick={() => props.setFlagSuccess(false)} className={styles.form_submit} type="submit">OK</button>
                </div>
            </div>
        </div>
    );
}
export default SuccessForm;