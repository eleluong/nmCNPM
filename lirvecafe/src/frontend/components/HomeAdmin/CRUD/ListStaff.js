import {useEffect, useState} from 'react';
import './ListStaff.css';
function ListStaff() {

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
    }, []);
    console.log(staffs);

    const handleDelete = () => {

    }
    const handleUpdate = () => {

    }
    return (
        <div className='staffs'>
            <table className='staff_table'>
                <tr className='staff_head_tr'>
                    <th className='head_list'>ID</th>
                    <th className='head_list'>Tên</th>
                    <th className='head_list'>SĐT</th>
                    <th className='head_list'>Email</th>
                    <th className='head_list'>Địa chỉ</th>
                    <th className='head_list'>Hành động</th>
                </tr>
                {staffs.map(staff => (
                    <tr title="Double Click để xem thông tin"className='staff_tr'>
                        <th className='list'>{staff.id}</th>
                        <th className='list'>{staff.name}</th>
                        <th className='list'>{staff.phone}</th>
                        <th className='list'>{staff.email}</th>
                        <th className='list'>{staff.address}</th>
                        <th title="Chọn sửa, xóa"className='list ud_staff'>
                            <span className='icon_button' onClick={handleUpdate(staff)}><i title="Sửa" className="fas fa-edit icon_button_update"></i></span>
                            <span className='icon_button' onClick={handleDelete(staff)}><i title="xóa" className="fas fa-trash-alt icon_button_delete"></i></span>
                        </th>
                    </tr>
                ))}
                {/* <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                </tr> */}
            </table>
        </div>
    )
}
export default ListStaff;