import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import * as ROUTES from '../../components/constants/routes/routes'
import styles from './SigninScreen.module.css'

const eye = "far fa-eye";
const eye_slash = "far fa-eye-slash"
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

  
export default  function SigninScreen() {
    
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(1);
    const [error, setError] = useState("");
    const [isShowPassword, setIsShowPassword] = useState(false);

    const navigate = useNavigate();
    const value = {
        'phone': phone,
        'password': password,
        'state': checked,
    }
    console.log(isShowPassword);

    const handleShowHidePassword = (e) => {
        setIsShowPassword(!isShowPassword);
        // console.log('Show hide password')
    }
    // console.log(checked);
    console.log(value);
    const submitHanlder =  (e) => {
        // alert('Bạn đã đăng nhập.');
        // console.log(value);
        console.log("Tài khoản đăng nhập:")
        console.log('Phone: ', value.phone);
        console.log('Password: ', value.password);
        // if(value.state === 1)
        //     navigate(ROUTES.HOME);
        // else if (value.state === 2) {
        //     navigate(ROUTES.HOMESTAFF)
        // }
        e.preventDefault();            
    }

    return (
        <div className={styles.signin}>
            <form className={styles.form} onSubmit={submitHanlder}>
                <div className={styles.form_div}>
                    <h1 className={styles.form_div_h1}>Đăng nhập</h1>
                </div>
                <div className={styles.choosesignin} style = {{padding: 2}}>
                    <legend className={styles.legend}>Đăng nhập với vai trò: </legend>
                    {users.map(user => (
                    <label key={user.id} className={styles.radio}>
                        <input type="radio" 
                        className={styles.radio__input}
                        checked={checked===user.id}
                        onChange={() => setChecked(user.id)}/>
                        <div className={styles.radio__radio}></div>
                        {user.name}
                    </label>))
                }
                </div>
                <div className={styles.form_div}>
                    <label className={styles.form_label} htmlFor="phone">Số điện thoại</label>
                    <input className={styles.form_input}
                        type="text"
                        id="email" 
                        placeholder="Số điện thoại"
                        required
                        onChange={(e) => setPhone(e.target.value)}
                    ></input>
                </div>

                <div className={styles.form_div}>
                    <label className={styles.form_label} htmlFor="password">Mật khẩu</label>
                    <div className={styles.custome_input_password}>
                        <input 
                            className={styles.form_input}
                            type={isShowPassword ? "text" : "password"} 
                            id="password" 
                            placeholder="Mật khẩu"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            
                        ></input>
                        <span onClick={handleShowHidePassword}><i className={`${isShowPassword ? eye : eye_slash} ${styles.far_eye}`}></i></span>
                    </div>
                </div>
                <div className={styles.form_div}>
                    <label/>
                    <button className={`${styles.form_btn} ${styles.primary}`} type="submit">
                        Đăng nhập
                    </button>
                </div>
                <div className={`${styles.form_div} ${styles.center}`}>
                    <div>
                        Khách hàng mới? {' '}
                        <Link to={ROUTES.REGISTER}>Đăng ký tài khoản</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}