import { useState } from "react";
import './ChooseSignin.css'
const users = [
    {
      id: 1,
      name: 'Khách hàng thành viên'
    },
    {
      id: 2,
      name: 'Nhân viên nhà hàng'
    },
    {
      id: 3,
      name: 'Admin hệ thống'
    }
  ]
 let  ID = 1;
function ChooseSignin() {
      //Làm với Chọn radio
        const [checked, setChecked] = useState(1)
        ID = checked;
        console.log(ID);
        return (
          <div className="choosesignin" style = {{padding: 2}}>
            <legend className="legend">Đăng nhập với vai trò: </legend>
            {users.map(user => (
              <label key={user.id} className="radio">
                <input type="radio" 
                  className="radio__input"
                  checked={checked===user.id}
                  onChange={() => setChecked(user.id)}/>
                <div className="radio__radio"></div>
                {user.name}
              </label>
            ))
            }
          </div>
        ); 
}
export {ID}
export default ChooseSignin