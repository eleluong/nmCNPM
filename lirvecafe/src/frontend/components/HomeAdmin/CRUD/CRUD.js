import { useState, useEffect } from "react";
import {Routes, Route,  Link, useNavigate} from "react-router-dom"
import AddStaff from "./AddStaff"
import styles from "./CRUD.module.css"
import ListStaff from "./ListStaff"
import './ListStaff.css';
import UpdateStaff from "./UpdateStaff";
import DeleteStaff from "./DeleteStaff";
import SuccessForm from "./SuccessFrom";
//import StaffList from './StaffList'
function CRUD(){
    const [staffEditInfo, setStaffEditInfo] = useState('{"id": 20194182}');
    const [staffDeleteInfo, setStaffDeleteInfo] = useState('{"id": 20194182}')
    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const [isOpenDelete, setIsOpenDelete] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [successMsg, setSuccessMsg]= useState('');
    //Các biến xét để render gọi API get all ít hơn
    const [isAdded, setIsAdded] = useState(false);
    const [isUpdated, setIsUpdated] = useState(false);
    const handleDelete = (staff) => {
        // navigate('/CRUD/deletestaff');
        console.log(staff);
        setIsOpenDelete(true);
        setSuccessMsg('Xóa thành công!');
        setStaffDeleteInfo(JSON.stringify(staff));
    }
    const handleUpdate = (staff) => {
        setIsOpenEdit(true);
        setSuccessMsg('Sửa đổi thành công!');
        setStaffEditInfo(JSON.stringify(staff));
    }
    // const handleExit = () => {
    //     setIsOpenEdit(false);
    // }
    // const staffs = [
    //     {
    //         id: 'Staff01',
    //         name: "Chu Mạnh Tiến",
    //         phone: '0979832446',
    //         email: 'tiencm@gmail.com',
    //         address: 'Bắc Ninh, Việt Nam' 
    //     },
    //     {
    //         id: 'Staff02',
    //         name: "Chu Phúc Nhật Minh",
    //         phone: '0979832445',
    //         email: 'minhcpn@gmail.com',
    //         address: 'Bắc Ninh, Việt Nam' 
    //     },
    // ];

    //Staffs bên code chính
    const icon_delete = "fas fa-trash-alt";
    const icon_update = "fas fa-edit";
    const [staffs, setStaffs] = useState([]);
    var staffsAPI = 'http://localhost:5000/staff/get_all';
    useEffect(() => {
        const getStaffs = async () => {
            const res = await (await fetch(staffsAPI)).json();
            setStaffs(res);
        };
        getStaffs();
    }, [isAdded, isUpdated]);
    console.log(staffs);
    return(
        <div className={styles.CRUD}>
            <div className={styles.HeaderCRUD}>
                <h1 className={styles.HeaderCRUD_text}>Danh sách nhân viên</h1>
                <Link to='ThemNhanVien' className={styles.AddStaff_link}> +Thêm nhân viên</Link>
            </div>
            {isOpenEdit && <UpdateStaff  setFlagSuccess={setIsSuccess} staff={JSON.parse(staffEditInfo)} closeModal = {setIsOpenEdit}></UpdateStaff>}
            {isOpenDelete && <DeleteStaff setFlagSuccess={setIsSuccess} staff={JSON.parse(staffDeleteInfo)} closeModal = {setIsOpenDelete}></DeleteStaff>}
            {isSuccess && <SuccessForm setFlagSuccess={setIsSuccess} success={successMsg} isUpdated={isUpdated} setChange={setIsUpdated}></SuccessForm>}
            <div className='staffs'>
                <table className='staff_table'>
                <tbody>
                    <tr className='staff_head_tr'>
                        <th className='head_list'>ID</th>
                        <th className='head_list'>Tên</th>
                        <th className='head_list'>SĐT</th>
                        <th className='head_list'>Email</th>
                        <th className='head_list'>Địa chỉ</th>
                        <th className='head_list'>Hành động</th>
                    </tr>
                    {staffs.map((staff, index) => (
                        <tr key={index} title="Double Click để xem thông tin"className='staff_tr'>
                            <th className='list'>{staff.id}</th>
                            <th className='list'>{staff.name}</th>
                            <th className='list'>{staff.phone}</th>
                            <th className='list'>{staff.email}</th>
                            <th className='list'>{staff.address}</th>
                            <th title="Chọn sửa, xóa"className='list ud_staff list'>
                                {/* <span className='icon_button' onClick={() => handleUpdate(staff)}><button title="Sửa" className="fas fa-edit icon_button_update">Sửa</button></span>
                                <span className='icon_button' onClick={() => handleDelete(staff)}><button title="xóa" className="fas fa-trash-alt icon_button_delete">Xóa</button></span> */}
                                <span className='icon_button' onClick={() => handleUpdate(staff)}><i title="Sửa" className="fas fa-edit icon_button_update"></i></span>
                                <span className='icon_button' onClick={() => handleDelete(staff)}><i title="xóa" className="fas fa-trash-alt icon_button_delete"></i></span>
                            </th>
                            {/* Thay ở code chính */}
                            {/* <th title="Chọn sửa, xóa"className='list ud_staff'>
                            <span className='icon_button' onClick={handleUpdate(staff)}><i title="Sửa" className="fas fa-edit icon_button_update"></i></span>
                            <span className='icon_button' onClick={handleDelete(staff)}><i title="xóa" className="fas fa-trash-alt icon_button_delete"></i></span>
                            </th> */}
                        </tr>
                    ))}
                    {/* <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                    </tr> */}
                    </tbody>
                </table>
            </div>
            {/* <div>
                <ListStaff></ListStaff>
            </div> */}
            
            <Routes>
                <Route path='ThemNhanVien' element={<AddStaff setChange = {setIsAdded} isAdded={isAdded}></AddStaff>}></Route>
                {/* <Route path='/deletestaff' element={<AddStaff/>}></Route>
                <Route path='/updatestaff' element={<AddStaff/>}></Route> */}
            </Routes> 
        </div>
        
    )
}

export default CRUD