import {Routes, Route, Link} from "react-router-dom"
import {AddStaff} from "./AddStaff"
import styles from "./CRUD.module.css"
<<<<<<< HEAD
import ListStaff from "./ListStaff"
//import StaffList from './StaffList'
function CRUD(){
    return(
=======

function CRUD() {
    return (
>>>>>>> c8c83c98b420c8b28d2fb3a6f0e667e2c21f7b89
        <div className={styles.CRUD}>
            <div className={styles.HeaderCRUD}>
                <h1 className={styles.HeaderCRUD_text}>Danh sách nhân viên</h1>
                
                <Link to='ThemNhanVien' className={styles.AddStaff_link}> Thêm nhân viên</Link>
            </div>
            <div>
                Danh sách nhân viên
            </div>
            <div>
                <ListStaff></ListStaff>
            </div>
            
            <Routes>
                <Route path='ThemNhanVien' element={<AddStaff/>}></Route>
                <Route path='/admin/CRUD/deletestaff' element={<AddStaff/>}></Route>
            </Routes>
        </div>
    )
}

export default CRUD