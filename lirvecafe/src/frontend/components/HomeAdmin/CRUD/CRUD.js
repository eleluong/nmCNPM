import { Routes,Route,Link } from "react-router-dom"
import { AddStaff } from "./AddStaff"
import styles from "./CRUD.module.css"
function CRUD(){
    return(
        <div className={styles.CRUD}>
            <div className={styles.HeaderCRUD}>
                <h1 className={styles.HeaderCRUD_text}>Danh sách nhân viên</h1>
                <Link to='ThemNhanVien' className={styles.AddStaff_link}> Thêm nhân viên</Link>
            </div>
            <div>
                Danh sách nhân viên
            </div>
            <Routes>
                <Route path='ThemNhanVien' element={<AddStaff/>}></Route>
            </Routes>
        </div>
    )
}

export default CRUD